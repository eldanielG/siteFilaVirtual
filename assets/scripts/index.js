document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const qr = params.get('qr') || './assets/imagens/qrcode.svg';
    const code = params.get('code') || 'ABC123';
    const position = params.get('position') || '5';
    const time = params.get('time') || '00:15';

    document.getElementById('qrImg').src = qr;
    document.getElementById('codeSpan').textContent = code;
    document.getElementById('positionSpan').textContent = position;
    document.getElementById('timeSpan').textContent = time;
});

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