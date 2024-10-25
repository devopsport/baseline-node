let activateColor = false;
const backendUrl = process.env.BACKEND_URL;

async function fetchActivateColor() {
  try {
    const response = await fetch(`${backendUrl}/getActivateColor`);
    const data = await response.json();
    activateColor = data.activateColor;
    console.log("Valor de ACTIVATE_COLOR:", activateColor);
  } catch (error) {
    console.error('Error obteniendo ACTIVATE_COLOR:', error);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  const array = new Uint8Array(6);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < 6; i++) {
    color += letters[array[i] % 16];
  }
  return color;
}

function applyRandomColor() {
  if (activateColor) {
    const elements = document.querySelectorAll('h1, h2, p, label, input, button, th, td');
    elements.forEach(el => {
      el.style.color = getRandomColor();
    });
  }
}

async function loadUsers() {
  try {
    const response = await fetch(`${backendUrl}/users`);
    const users = await response.json();
    const usersBody = document.getElementById('usersBody');
    usersBody.innerHTML = '';

    users.forEach(user => {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = user;
      row.appendChild(cell);
      usersBody.appendChild(row);
    });

    applyRandomColor();
  } catch (error) {
    console.error('Error cargando usuarios:', error);
  }
}

document.getElementById('userForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const username = document.getElementById('userInput').value;
  if (username) {
    await fetch(`${backendUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    document.getElementById('userInput').value = '';
    loadUsers();
  }
});

window.onload = async function() {
  await fetchActivateColor();
  loadUsers();
};