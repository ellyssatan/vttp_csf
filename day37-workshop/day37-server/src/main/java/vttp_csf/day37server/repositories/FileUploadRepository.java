package vttp_csf.day37server.repositories;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import vttp_csf.day37server.models.Post;

import static vttp_csf.day37server.repositories.Queries.*;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

@Repository
public class FileUploadRepository {

    @Autowired
    private DataSource datasrc;

    @Autowired
    private JdbcTemplate template;

    public void uploadBlob(MultipartFile file, String title, String complain) throws SQLException, IOException {

        try (Connection con = datasrc.getConnection();
            PreparedStatement ps = con.prepareStatement(INSERT_POSTS)) {
            InputStream is = file.getInputStream();
            ps.setBinaryStream(1, is, file.getSize());
            ps.setString(2, title);
            ps.setString(3, complain);
            ps.executeUpdate();
        }
    }

    public Optional<Post> getPostById(Integer postId) {
        return template.query(
            GET_POSTS_BY_ID,
            (ResultSet rs) -> {
                if (!rs.next()) {
                    return Optional.empty();
                }
                final Post post = Post.populate(rs);
                return Optional.of(post);
            },
            postId);
    }
}
