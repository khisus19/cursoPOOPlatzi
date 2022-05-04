from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo")

    car = Car("AMG522", Account("Andres Herrera", "AHE4832"))
    print(vars(car))
    print(vars(car.driver))