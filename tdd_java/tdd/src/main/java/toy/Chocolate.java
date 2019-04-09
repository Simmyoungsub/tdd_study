package toy;

public class Chocolate implements Drink {
    Material material;

    public Chocolate() {
        
    }

    public Chocolate(Material material) {
        this.material = material;
    }

    @Override
    public String toString() {
        return material.toString();
    }
}