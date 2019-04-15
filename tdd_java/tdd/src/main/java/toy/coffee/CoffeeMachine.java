package toy.coffee;

import toy.coffee.model.drink.Chocolate;
import toy.coffee.model.drink.Coffee;
import toy.coffee.model.drink.Drink;
import toy.coffee.model.material.Material;

public class CoffeeMachine {
    public CoffeeMachine() {

    }

    public static Drink coffee(Material material) {
        return new Coffee(material);
    }

    public static Drink chocolate(Material material) {
        return new Chocolate(material);
    }
}