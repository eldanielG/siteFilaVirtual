    // lista de exemplo (pode vir da sua API ou URL params)
    const users = ['Alice', 'Bruno', 'Carla', 'Daniel', 'Eduardo'];
    let currentIndex = null;
    let intervalId = null;
    let seconds = 0;

    const listEl = document.getElementById('waitingList');
    const currNameEl = document.getElementById('currentName');
    const timerEl    = document.getElementById('timer');
    const finalizeBtn= document.getElementById('finalize');

    // Preenche a lista
    function renderList() {
      listEl.innerHTML = '';
      users.forEach((u, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="name">${i+1}. ${u}</span>
          <button class="call-btn" onclick="callUser(${i})"></button>
        `;
        listEl.appendChild(li);
      });
    }

    // Ao chamar um usuário
    window.callUser = function(idx) {
      // pára timer anterior
      clearInterval(intervalId);
      seconds = 0;
      // define atual
      currentIndex = idx;
      currNameEl.textContent = users[idx];
      timerEl.textContent = 'Tempo: 00:00';
      // inicia cronômetro
      intervalId = setInterval(() => {
        seconds++;
        const m = String(Math.floor(seconds/60)).padStart(2,'0');
        const s = String(seconds%60).padStart(2,'0');
        timerEl.textContent = `Tempo: ${m}:${s}`;
      }, 1000);
    }

    // Finalizar atendimento
    finalizeBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      if (currentIndex !== null) {
        // remove da fila
        users.splice(currentIndex, 1);
        renderList();
        currNameEl.textContent = '—';
        timerEl.textContent = 'Tempo: 00:00';
        currentIndex = null;
      }
    });

    // inicializa
    renderList();