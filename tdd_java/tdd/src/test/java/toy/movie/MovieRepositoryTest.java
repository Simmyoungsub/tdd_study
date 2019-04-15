package toy.movie;

import java.sql.SQLException;

import org.junit.Test;

import toy.movie.model.Movie;
import toy.movie.repository.MovieRepository;

public class MovieRepositoryTest {
    @Test
    public void testFindAll() {

    }

    @Test
    public void testFindByName() {

    }

    @Test
    public void testAddMovie() throws CloneNotSupportedException, ClassNotFoundException, SQLException {
        MovieRepository repository = new MovieRepository();
        repository.add(new Movie("윈터솔져"));
    }
}