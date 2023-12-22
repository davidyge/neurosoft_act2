document.addEventListener("DOMContentLoaded", function () {
    var headerTo = document.querySelector('.header_to');
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            headerTo.classList.add("hide-on-scroll");
            headerTo.classList.remove("show-on-scroll");
        } else {
            headerTo.classList.remove("hide-on-scroll");
            headerTo.classList.add("show-on-scroll");
        }
    });
});

/* INICIO TEMPORALIZADOR */
// Establecer la fecha de finalización del temporizador (8 horas y algunos minutos desde ahora)
const endTime = new Date();
endTime.setHours(endTime.getHours() + 8);
endTime.setMinutes(endTime.getMinutes() + 15); // Agrega 15 minutos como ejemplo, puedes ajustarlo según sea necesario

// Función para actualizar el temporizador
function updateCountdown() {
  const now = new Date();
  const timeLeft = endTime - now;

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Obtener elementos por ID
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  // Aplicar estilo al texto (color blanco)
  hoursElement.style.color = "white";
  minutesElement.style.color = "white";
  secondsElement.style.color = "white";

  // Aplicar estilo al texto (negrita y color blanco)
  hoursElement.style.fontWeight = "bold";
  minutesElement.style.fontWeight = "bold";
  secondsElement.style.fontWeight = "bold";

  // Actualizar el contenido con "HORAS", "MINUTOS" y "SEGUNDOS"
  hoursElement.innerHTML = `${hours} <p style='margin-top:-20px;'>Horas</p>`;
  minutesElement.innerHTML = `${minutes} <p style='margin-top:-20px;'>Minutos</p>`;
  secondsElement.innerHTML = `${seconds} <p style='margin-top:-20px;'>Segundos</p>`;

  // Detener el temporizador cuando llega a cero
  if (timeLeft <= 0) {
    document.getElementById('hours').innerHTML = `<p style='margin-top:-20px;'>Oferta expirada</p>`;
    clearInterval(timerInterval);
  }
}

// Actualizar el temporizador cada segundo
const timerInterval = setInterval(updateCountdown, 1000);

// Llamar a la función para actualizar el temporizador inmediatamente
updateCountdown();
/* FIN TEMPORALIZADOR */

/* INICIO FAQ */
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));
/* FIN FAQ */


