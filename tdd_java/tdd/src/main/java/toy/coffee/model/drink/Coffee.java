package toy.coffee.model.drink;

import toy.coffee.model.material.Material;

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