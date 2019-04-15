package toy.movie.repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import toy.movie.model.Movie;
import toy.movie.repository.db.MyConnection;

public class MovieRepository implements Repository<Movie> {
    @Override
    public Movie add(Movie entity) throws CloneNotSupportedException, SQLException, ClassNotFoundException {
        String query = new StringBuffer("insert into movie (name) values (?)").toString();
        PreparedStatement stmt;
        stmt = MyConnection.getConnection().prepareStatement(query);
        stmt.setString(1, entity.getName());
        stmt.executeUpdate();

        return (Movie) (entity.clone());
    }

    @Override
    public Movie remove(Movie entity) {
        return entity;
    }

    @Override
    public Movie update(Movie entity) {
        return null;
    }

    @Override
    public Movie findByName(String name) {
        return null;
    }

    @Override
    public List<Movie> findAll() {
        return null;
    }
}