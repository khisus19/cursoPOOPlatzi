class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo!");
        UberX uberX = new UberX("AMQ123", new Account("Andres Herrera", "HRNE532"), "Chevrolet", "Sonic");
        uberX.setPassenger(3);
        uberX.printDataCar();

        /* Car car2 = new Car("QMFN324", new Account("Pedro Mendez", "PME395"));
        car2.passenger = 3;
        car2.printDataCar(); */
    }
}