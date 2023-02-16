package vttp_csf.day37server.services;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vttp_csf.day37server.models.Post;
import vttp_csf.day37server.repositories.FileUploadRepository;

@Service
public class FileUploadService {
    
    @Autowired
    private FileUploadRepository fileRepo;

    public void uploadBlob(MultipartFile file, String title, String complain) throws SQLException, IOException {

        fileRepo.uploadBlob(file, title, complain);
    }

    public Optional<Post> getPostById(Integer postId) {
        return fileRepo.getPostById(postId);
    }
    
    
}
