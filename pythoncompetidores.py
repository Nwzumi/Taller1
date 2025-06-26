import random

def competencia():
    jugadores_c = int(input("¿Cuántos competidores van a participar? "))

    jugadores = []

    for i in range(jugadores_c):
        num_jugador = int(input("Ingrese el número del jugador: "))
        jugadores.append([num_jugador, 0])  # [numero_jugador, puesto]

    print("EN COMPETENCIA")

    for i in range(jugadores_c):
        num_random = random.randint(1, jugadores_c)
        jugadores[i][1] = num_random

        print(f"El puesto de llegada para el jugador {jugadores[i][0]} es {num_random}")

        if num_random == 1:
            print("Ganaste 1.000.000 de pesos")
        elif num_random == 2:
            print("Ganaste 500.000 de pesos")
        elif num_random == 3:
            print("Ganaste 250.000 de pesos")
        elif num_random == 4:
            print("Ganaste 100.000 de pesos")
        elif num_random == 5:
            print("Ganaste una medalla")
        else:
            print("Ganaste un dulce")

if __name__ == "__main__":
    competencia()
