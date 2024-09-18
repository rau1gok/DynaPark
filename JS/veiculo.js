window.onload = function() {
    const vehicleList = document.getElementById('vehicleList');

    // Função para carregar a lista de veículos
    function loadVehicles() {
        const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        vehicleList.innerHTML = '';
        vehicles.forEach((vehicle, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${vehicle.plate} - ${vehicle.brand} - ${vehicle.model} 
                <button onclick="removeVehicle(${index})">Excluir</button>`;
            vehicleList.appendChild(li);
        });
    }

    // Função para remover um veículo
    window.removeVehicle = function(index) {
        const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        vehicles.splice(index, 1);
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
        loadVehicles(); // Recarrega a lista após a exclusão
    };

    loadVehicles(); // Carrega a lista quando a página é carregada

    menuBtn.addEventListener('click', () => {
        sideMenu.style.width = "250px";
    });
    
    closeBtn.addEventListener('click', () => {
        sideMenu.style.width = "0";
    });
    
    entradaBtn.addEventListener('click', startTimer);
    saidaBtn.addEventListener('click', stopTimer);
};
