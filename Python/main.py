from car import Car

if __name__ == "__main__":
    print("Hola Mundo")
    car = Car()
    car.license = "AMG522"
    car.driver = "Andres Herrera"
    print(vars(car))

    car2 = Car()
    car2.license = "QMFN324"
    car2.driver = "Pedro Mendez"
    print(vars(car2))