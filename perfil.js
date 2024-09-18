window.onload = function() {
    const profileForm = document.getElementById('profileForm');
    const profileImageInput = document.getElementById('profileImageInput');
    const profileImage = document.getElementById('profileImage');

    // Carregar o nome e sobrenome do localStorage
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
        document.getElementById('firstName').value = storedUser.firstName;
        document.getElementById('lastName').value = storedUser.lastName;
        if (storedUser.profileImage) {
            profileImage.src = storedUser.profileImage;
        }
    }

    // Alteração da imagem de perfil
    profileImageInput.addEventListener('change', function() {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
    });

    // Salvando alterações
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const profileImageSrc = profileImage.src;

        // Atualizando os dados no localStorage
        const updatedUser = { ...storedUser, firstName, lastName, profileImage: profileImageSrc };
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        // Exibir um alerta de sucesso
        alert('Alterações salvas com sucesso!');

        // Redirecionar para a página home após salvar
        window.location.href = 'home.html';
    });

    menuBtn.addEventListener('click', () => {
        sideMenu.style.width = "250px";
    });
    
    closeBtn.addEventListener('click', () => {
        sideMenu.style.width = "0";
    });
    
    entradaBtn.addEventListener('click', startTimer);
    saidaBtn.addEventListener('click', stopTimer);
};
