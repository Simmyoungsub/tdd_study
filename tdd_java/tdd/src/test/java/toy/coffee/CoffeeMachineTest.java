package toy.coffee;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import toy.coffee.CoffeeMachine;
import toy.coffee.model.drink.Drink;
import toy.coffee.model.material.ChocolateMaterial;
import toy.coffee.model.material.CoffeeMaterial;
import toy.coffee.model.material.Material;
import toy.coffee.model.order.Order;

/**
 * 커피 / 핫초코 생성
 * 원두 / 캡슐 넣기
 * 물 넣기
 * 
 * 원두 + 물 = 커피
 * 초콜릿 + 우유 = 핫초코
 */
public class CoffeeMachineTest {
    @Test
    public void testMakeCoffeeMaterial() {
        Material material = new CoffeeMaterial();
        assertNotNull(material);
    }
    @Test
    public void testMakeChocolateMaterial() {
        Material material = new ChocolateMaterial();
        assertNotNull(material);
    }
    @Test
    public void testMakeCoffee() {
        Material material = new CoffeeMaterial(2, 500);
        Drink coffee = CoffeeMachine.coffee(material);
        assertNotNull(coffee);
        assertEquals(coffee.toString(), "2 shot, 500 mL coffee");
    }

    @Test
    public void testMakeChocolate() {
        Material material = new ChocolateMaterial(2, 500);
        Drink chocolate = CoffeeMachine.chocolate(material);
        assertNotNull(chocolate);
        assertEquals(chocolate.toString(), "2 spoon, 500 mL chocolate");
    }

    @Test
    public void testOrder() {
        Material material = new CoffeeMaterial(2, 500);
        Drink coffee = CoffeeMachine.coffee(material);
        Order order = new Order(coffee, 4500);
        assertNotNull(order);
        assertEquals(order.toString(), "2 shot, 500 mL coffee 4500 원");
    }
}