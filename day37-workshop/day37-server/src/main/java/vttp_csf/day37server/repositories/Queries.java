package vttp_csf.day37server.repositories;

public class Queries {
    public static final String INSERT_POSTS = "INSERT INTO posts(blobc, title, complain) VALUES(?, ?, ?)";
    public static final String GET_POSTS_BY_ID = "select * from posts where id=?";
}
