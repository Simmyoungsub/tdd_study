package toy;

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