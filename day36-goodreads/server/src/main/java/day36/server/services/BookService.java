package day36.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import day36.server.models.Book;
import day36.server.repositories.BookRepository;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bRepo;

    public List<Book> getBooks() {
        return bRepo.getBooks();
    }

    public Optional<Book> findBook(String bookId) {
        return bRepo.findBook(bookId);
    }

}
