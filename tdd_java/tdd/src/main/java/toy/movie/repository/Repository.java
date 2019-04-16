package toy.movie.repository;

import java.sql.SQLException;
import java.util.List;

public interface Repository<T> {
    public T add(T entity) throws CloneNotSupportedException, ClassNotFoundException, SQLException;
    public T remove(T entity) throws ClassNotFoundException, SQLException, CloneNotSupportedException;
    public T update(T entity) throws ClassNotFoundException, SQLException, CloneNotSupportedException;
    public List<T> findAll() throws ClassNotFoundException, SQLException;
    public T findByName(String name) throws ClassNotFoundException, SQLException;
}