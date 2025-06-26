const btnConfirmar = document.getElementById('btn-confirmar');
const numJugadoresInput = document.getElementById('num-jugadores');
const formJugadores = document.getElementById('form-jugadores');
const inputsJugadoresDiv = document.getElementById('inputs-jugadores');
const btnCompetir = document.getElementById('btn-competir');
const resultadosDiv = document.getElementById('resultados');
const formularioInicial = document.getElementById('formulario-inicial');

btnConfirmar.addEventListener('click', () => {
  const n = parseInt(numJugadoresInput.value);
  if (isNaN(n) || n < 1) {
    alert('Por favor ingresa un número válido de competidores (mínimo 1)');
    return;
  }

  // Limpiar inputs previos
  inputsJugadoresDiv.innerHTML = '';

  // Crear inputs para cada jugador
  for (let i = 0; i < n; i++) {
    const div = document.createElement('div');
    div.classList.add('jugador-input');
    div.innerHTML = `
      <label>Jugador ${i + 1} número: </label>
      <input type="number" class="numero-jugador" min="1" required />
    `;
    inputsJugadoresDiv.appendChild(div);
  }

  formularioInicial.style.display = 'none';
  formJugadores.style.display = 'block';
  resultadosDiv.innerHTML = '';
});

btnCompetir.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.numero-jugador');
  const jugadores = [];

  for (const input of inputs) {
    const val = parseInt(input.value);
    if (isNaN(val) || val < 1) {
      alert('Por favor ingresa números válidos para todos los jugadores.');
      return;
    }
    jugadores.push([val, 0]);
  }

  const n = jugadores.length;
  resultadosDiv.innerHTML = '<h2>EN COMPETENCIA</h2>';

  for (let i = 0; i < n; i++) {
    const num_random = Math.floor(Math.random() * n) + 1;
    jugadores[i][1] = num_random;

    let premio = '';
    switch(num_random) {
      case 1: premio = "Ganaste 1.000.000 de pesos"; break;
      case 2: premio = "Ganaste 500.000 de pesos"; break;
      case 3: premio = "Ganaste 250.000 de pesos"; break;
      case 4: premio = "Ganaste 100.000 de pesos"; break;
      case 5: premio = "Ganaste una medalla"; break;
      default: premio = "Ganaste un dulce"; break;
    }

    const p = document.createElement('p');
    p.classList.add('resultado-jugador');
    p.textContent = `El puesto de llegada para el jugador ${jugadores[i][0]} es ${num_random}. ${premio}`;
    resultadosDiv.appendChild(p);
  }
});
