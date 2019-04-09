package toy;

public class CoffeeMaterial implements Material {
    int bean;
    int water;

    public CoffeeMaterial() {
        this.bean = 1;
        this.water = 500;
    }

    public CoffeeMaterial(int bean , int water) {
        this.bean = bean;
        this.water = water;
    }

    @Override
    public String toString() {
        return bean + " shot, " + water + " mL coffee";
    }
}