#include <iostream>
#include <cstdlib>  // para rand() y srand()
#include <ctime>    // para time()

using namespace std;

int main() {
    int jugadores_c;

    cout << "¿Cuántos competidores van a participar? ";
    cin >> jugadores_c;

    int jugadores[jugadores_c][2];

    for (int i = 0; i < jugadores_c; i++) {
        cout << "Ingrese el número del jugador: ";
        cin >> jugadores[i][0];
        jugadores[i][1] = 0; 
    }

    cout << "EN COMPETENCIA" << endl;

    srand(time(nullptr)); 

    for (int i = 0; i < jugadores_c; i++) {
        int num_random = rand() % jugadores_c + 1;  // número aleatorio entre 1 y jugadores_c
        jugadores[i][1] = num_random;

        cout << "El puesto de llegada para el jugador " << jugadores[i][0] 
             << " es " << num_random << endl;

        switch (num_random) {
            case 1:
                cout << "Ganaste 1.000.000 de pesos" << endl;
                break;
            case 2:
                cout << "Ganaste 500.000 de pesos" << endl;
                break;
            case 3:
                cout << "Ganaste 250.000 de pesos" << endl;
                break;
            case 4:
                cout << "Ganaste 100.000 de pesos" << endl;
                break;
            case 5:
                cout << "Ganaste una medalla" << endl;
                break;
            default:
                cout << "Ganaste un dulce" << endl;
        }
    }

    return 0;
}
