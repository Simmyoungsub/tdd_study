package toy.movie.repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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
    public Movie remove(Movie entity) throws ClassNotFoundException, SQLException, CloneNotSupportedException {
        String query = new StringBuffer("delete from movie where name = ?").toString();
        PreparedStatement stmt;
        stmt = MyConnection.getConnection().prepareStatement(query);
        stmt.setString(1, entity.getName());
        stmt.executeUpdate();

        return (Movie) (entity.clone());
    }

    @Override
    public Movie update(Movie entity) throws ClassNotFoundException, SQLException, CloneNotSupportedException {
        String query = new StringBuffer("update movie set name = ? where id = ?").toString();
        PreparedStatement stmt;
        stmt = MyConnection.getConnection().prepareStatement(query);
        stmt.setString(1, entity.getName());
        stmt.setInt(2, entity.getId());
        stmt.executeUpdate();

        return (Movie) (entity.clone());
    }

    @Override
    public Movie findByName(String name) throws ClassNotFoundException, SQLException {
        String query = new StringBuffer("select * from movie where name = ?").toString();
        PreparedStatement stmt;
        stmt = MyConnection.getConnection().prepareStatement(query);
        stmt.setString(1, name);
        ResultSet rs = stmt.executeQuery();
        
        Movie movie = null;

        while(rs.next()) {
            movie = new Movie(rs.getInt("id"), rs.getString("name"), rs.getDate("regDate"));
        }

        return movie;
    }

    @Override
    public List<Movie> findAll() throws ClassNotFoundException, SQLException {
        List<Movie> list = new ArrayList<Movie>();
        String query = new StringBuffer("select * from movie").toString();
        PreparedStatement stmt;
        stmt = MyConnection.getConnection().prepareStatement(query);
        ResultSet rs = stmt.executeQuery();
        
        while(rs.next()) {
            list.add(new Movie(rs.getInt("id"), rs.getString("name"), rs.getDate("regDate")));
        }

        return list;
    }
}