package toy.movie.repository.db;

import java.sql.*;

public class MyConnection {
    static Connection conn = null;
    private static String url = "jdbc:mysql://192.168.122.128:3306/viper_app?characterEncoding=UTF-8&serverTimezone=UTC&useSSL=false";

    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        if (conn != null) {
            return conn;
        }

        Class.forName("com.mysql.jdbc.Driver");
        conn = DriverManager.getConnection(url, "viper", "viper");
        
        return conn;
    }
}