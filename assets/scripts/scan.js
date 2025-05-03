function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

function startScan() {
    // Redirecionar para a página de scanner
    window.location.href = "scanner.html"; // ajuste se precisar
}

const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', function() {
      sideMenu.classList.toggle('open');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', function() {
      sideMenu.classList.remove('open');
      overlay.classList.remove('show');
    });