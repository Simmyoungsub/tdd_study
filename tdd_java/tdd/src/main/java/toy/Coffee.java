package toy;

public class Coffee implements Drink {
    Material material;

    public Coffee() {

    }

    public Coffee(Material material) {
        this.material = material;
    }

    @Override
    public String toString() {
        return material.toString();
    }
}