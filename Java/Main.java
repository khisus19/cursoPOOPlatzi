class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo!");
        UberX uberX = new UberX("AMQ123", new Account("Andres Herrera", "HRNE532"), "Chevrolet", "Sonic");
        uberX.setPassenger(4);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("FHG4383", new Account("Luis Paredes", "JFI392"));
        uberVan.setPassenger(6);
        uberVan.printDataCar();
    }
}