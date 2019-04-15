package toy.movie.model;

import java.util.Date;

public class Movie implements Cloneable {
    private String name;
    private int id;
    private Date regDate;
    
    public Movie() {
        
    }

    public Movie(int id, String name, Date regDate) {
        this.id = id;
        this.name = name;
        this.regDate = regDate;
    }

    public Movie(String name) {
        this.name = name;
    }
    
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}