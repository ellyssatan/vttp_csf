package day36.server.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import day36.server.models.Book;

import static day36.server.repositories.Queries.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Repository
public class BookRepository {
    
    @Autowired
    private JdbcTemplate template;

    public List<Book> getBooks() {
        SqlRowSet rs = template.queryForRowSet(SQL_SELECT_BOOKS);
        List<Book> results = new LinkedList<>();

        while (rs.next()) {
            results.add(Book.create(rs));
        }
        return results;
    }

    public Optional<Book> findBook(String bookId) {

        SqlRowSet rs = template.queryForRowSet(SQL_FIND_BOOKS, bookId);

        if (!rs.next()) {
            return Optional.empty();
        }

        return Optional.of(Book.create(rs));
    }
}
