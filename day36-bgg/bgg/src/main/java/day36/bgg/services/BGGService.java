package day36.bgg.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import day36.bgg.models.Comment;
import day36.bgg.models.Game;
import day36.bgg.repositories.CommentRepository;
import day36.bgg.repositories.GameRepository;

@Service
public class BGGService {

    @Autowired
    private GameRepository gameRepo;

    @Autowired
    private CommentRepository commentRepo;

    public List<Comment> getComments(int gameId) {
        return commentRepo.findCommentByGameId(gameId);
    }

    public List<Game> getGames() {
        return this.getGames(20, 0);
    }
    public List<Game> getGames(int limit, int skip) {
        return gameRepo.getGames(limit, skip);
    }
    
}
