package toy.movie;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.NoSuchElementException;

import org.junit.Before;
import org.junit.Test;

import toy.movie.model.Movie;
import toy.movie.repository.Repository;
import toy.movie.repository.mock.MovieMockRepository;

/**
 * 기본 CRUD add / update / get / remove
 */
public class MovieTest {
    Repository<Movie> repository;

    @Before
    public void beforeAll() throws CloneNotSupportedException {
        repository = new MovieMockRepository();
        repository.add(new Movie("시빌워"));
    }

    @Test
    public void testCreateMovieInstance() {
        Movie movie = new Movie();
        assertNotNull(movie);
    }

    @Test
    public void testAddRepository() throws CloneNotSupportedException {
        Movie movie = new Movie("어벤져스");
        Movie item = repository.add(movie);
        assertEquals(item.getName(), movie.getName());
    }

    @Test
    public void testRemove() throws NoSuchElementException {
        Movie removedMovie = this.repository.remove(new Movie("시빌워"));
        assertNotNull(removedMovie);
    }

    @Test(expected = NoSuchElementException.class)
    public void testRemoveNoElementException() {
        Movie removedMovie = this.repository.remove(new Movie("토르"));
    }
}