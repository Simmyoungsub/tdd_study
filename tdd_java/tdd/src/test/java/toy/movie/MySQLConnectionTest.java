package toy.movie;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import toy.movie.model.Movie;

public class MySQLConnectionTest {
    String url = "jdbc:mysql://192.168.122.128:3306/viper_app?characterEncoding=UTF-8&serverTimezone=UTC&useSSL=false";

    @Test
    public void testExecuteQuery() throws SQLException, ClassNotFoundException {
        Connection conn = null;
        Statement stmt = null;

        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, "viper", "viper");
            assertNotNull(conn);
            stmt = conn.createStatement();
            assertNotNull(stmt);
            
            List<Movie> movies = new ArrayList<Movie>();
            assertNotNull(movies);
            // ResultSet rs = stmt.executeQuery("SELECT * FROM movie");
            // stmt.
            String query = "select * from movie";
            ResultSet resultSet = stmt.executeQuery(query);
            assertNotNull(resultSet);
            
            while(resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                Date date = resultSet.getDate("regDate");
                movies.add(new Movie(id, name, date));
            }

            resultSet.close();
            assertEquals(movies.size(), 1);
        } catch (SQLException e) {
            throw new SQLException(e);
        } finally {
            if (stmt != null) {
                stmt.close();
            }
            if (conn != null) {
                conn.close();
            }
        }
    }
}