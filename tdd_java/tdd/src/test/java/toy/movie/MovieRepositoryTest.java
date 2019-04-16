package toy.movie;

import static org.junit.Assert.assertEquals;

import java.sql.SQLException;
import java.util.List;

import org.junit.Test;

import toy.movie.model.Movie;
import toy.movie.repository.MovieRepository;

public class MovieRepositoryTest {
    @Test
    public void testFindAll() throws ClassNotFoundException, SQLException {
        MovieRepository repository = new MovieRepository();
        List<Movie> list = repository.findAll();
        assertEquals(list.size(), 1);
    }

    @Test
    public void testFindByName() throws ClassNotFoundException, SQLException {
        MovieRepository repository = new MovieRepository();
        Movie movie = new Movie("어벤져스 - 시빌워");
        Movie find = repository.findByName("어벤져스 - 시빌워");
        assertEquals(movie.getName(), find.getName());
    }

    @Test
    public void testAddMovie() throws CloneNotSupportedException, ClassNotFoundException, SQLException {
        MovieRepository repository = new MovieRepository();
        repository.add(new Movie("윈터솔져"));
    }

    @Test
    public void testRemoveMovie() throws ClassNotFoundException, SQLException, CloneNotSupportedException {
        MovieRepository repository = new MovieRepository();
        repository.remove(new Movie("윈터솔져"));
    }

    @Test
    public void testUpdateMovie() throws ClassNotFoundException, SQLException, CloneNotSupportedException {
        MovieRepository repository = new MovieRepository();
        Movie movie = new Movie("어벤져스 - 시빌워");
        movie.setId(1);
        repository.update(movie);
    }
}