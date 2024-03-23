// Función para hacer la solicitud GET al servidor
function fetchDataFromServer() {
    fetch('https://reqres.in/api/users?delay=3')
    .then(response => response.json())
    .then(data => {
        // Almacenar datos en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(data));
        // Almacenar la fecha y hora de la solicitud
        localStorage.setItem('lastFetchTime', new Date().getTime());
        // Mostrar los datos en la interfaz del usuario
        displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Función para mostrar los datos en la interfaz del usuario
function displayData(data) {
    const userList = document.getElementById('user-list');
    // Limpiar el contenido anterior
    userList.innerHTML = '';
    // Iterar sobre los usuarios y agregarlos a la tabla
    data.data.forEach(user => {
        const row = document.createElement('tr');
        // Avatar
        const avatarCell = document.createElement('td');
        const avatarImg = document.createElement('img');
        avatarImg.src = user.avatar;
        avatarImg.classList.add('rounded-circle', 'avatar');
        avatarCell.appendChild(avatarImg);
        row.appendChild(avatarCell);
        // First Name
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = user.first_name;
        row.appendChild(firstNameCell);
        // Last Name
        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = user.last_name;
        row.appendChild(lastNameCell);
        // Email
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);
        // Agregar fila a la tabla
        userList.appendChild(row);
    });
}

// Función para manejar el evento de clic del botón
function fetchUsers() {
    // Hacer una nueva solicitud al servidor solo cuando se presiona el botón
    fetchDataFromServer();
}

// Obtener el botón y asociarle el evento de clic
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchUsers);