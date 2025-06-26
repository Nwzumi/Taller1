Algoritmo competencia
	Definir jugadores_c Como Entero
	Definir i  como entero 
	Definir j como entero
	Definir num_random Como Entero
	
	Escribir "¿Cuántos competidores van a participar?";
	Leer jugadores_c;
	
	Dimension jugadores[jugadores_c, 2];
	
	Para i <- 1 Hasta jugadores_c Con Paso 1 Hacer
		Escribir "Ingrese el número del jugador";
		Leer jugadores[i, 1];
	FinPara
	
	Escribir "EN COMPETENCIA";
	
	Para i <- 1 Hasta jugadores_c Con Paso 1 Hacer
		num_random <- azar(jugadores_c) + 1 
		jugadores[i, 2] <- num_random
		
		Escribir "El puesto de llegada para el jugador ", jugadores[i, 1], " es ", num_random;
		
		Segun num_random Hacer
			1:
				Escribir "Ganaste 1.000.000 de pesos"
			2:
				Escribir "Ganaste 500.000 de pesos"
			3:
				Escribir "Ganaste 250.000 de pesos"
			4:
				Escribir "Ganaste 100.000 de pesos"
			5:
				Escribir "Ganaste una medalla"
			De Otro Modo:
				Escribir "Ganaste un dulce"
		FinSegun
	FinPara
FinAlgoritmo
