package toy;

public class ChocolateMaterial implements Material {
    int chocolate;
    int milk;

    public ChocolateMaterial() {
        this.chocolate = 1;
        this.milk = 500;
    }

    public ChocolateMaterial(int chocolate, int milk) {
        this.chocolate = chocolate;
        this.milk = milk;
    }

    @Override
    public String toString() {
        return chocolate + " spoon, " + milk + " mL chocolate";
    }
}