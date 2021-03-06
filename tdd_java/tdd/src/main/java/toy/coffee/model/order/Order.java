package toy.coffee.model.order;

import toy.coffee.model.drink.Drink;

public class Order {
    int amount;
    Drink drink;

    public Order(Drink drink, int amount) {
        this.drink = drink;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return drink.toString() + " " + amount + " 원";
    }
}