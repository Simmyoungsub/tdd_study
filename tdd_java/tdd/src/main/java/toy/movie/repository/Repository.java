package toy.movie.repository;

import java.sql.SQLException;
import java.util.List;

public interface Repository<T> {
    public T add(T entity) throws CloneNotSupportedException, ClassNotFoundException, SQLException;
    public T remove(T entity);
    public T update(T entity);
    public List<T> findAll();
    public T findByName(String name);
}