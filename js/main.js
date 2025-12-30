const out = document.getElementById("out");
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function mensaje(){
  out.innerHTML = "💌 " + rand(mensajes);
}

function reto(){
  out.innerHTML = "🎲 Reto ARMY:<br>" + rand(retos);
}

function mood(){
  const m = rand(moods);
  out.innerHTML = `🎨 ${m.e}<br>${m.r}`;
}

function rompe(){
  out.innerHTML = "🧩 " + rand(rompehielos);
}

function trivia(){
  const t = rand(triviaData);
  out.innerHTML =
    `🧠 ${t.q}<br><br>
     <button onclick="this.innerText='${t.a}'">
       Ver respuesta
     </button>`;
}
