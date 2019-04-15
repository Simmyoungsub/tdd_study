package toy.movie.repository.mock;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

import toy.movie.model.Movie;
import toy.movie.repository.MovieRepository;

public class MovieMockRepository extends MovieRepository {
    private List<Movie> movieList;

    public MovieMockRepository() {
        this.movieList = new ArrayList<Movie>();
    }

    @Override
    public Movie add(Movie entity) throws CloneNotSupportedException {
        Movie cMovie = (Movie) entity.clone();
        this.movieList.add(cMovie);
        return cMovie;
    }

    @Override
    public Movie remove(Movie entity) {
        Iterator<Movie> it = movieList.iterator();
        
        while (it.hasNext()) {
            if (it.next().getName() == entity.getName()) {
                return entity;
            }
        }

        throw new NoSuchElementException();
    }

    @Override
    public List<Movie> findAll() {
        return this.movieList;
    }

    @Override
    public Movie update(Movie entity) {
        Movie target = findByName(entity.getName());
        target.setName(entity.getName());
        return target;
    }

    @Override
    public Movie findByName(String name) {
        Iterator<Movie> it = movieList.iterator();
        
        while (it.hasNext()) {
            Movie target = it.next();
            if (target.getName() == name) {
                return target;
            }
        }

        throw new NoSuchElementException();
    }
}