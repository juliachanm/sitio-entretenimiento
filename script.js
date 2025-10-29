document.getElementById('formularioContacto').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    document.getElementById('mensajeExito').textContent = '¡Gracias por tu mensaje, te contactaremos pronto!';
    this.reset();
  } else {
    document.getElementById('mensajeExito').textContent = 'Por favor completa todos los campos.';
  }
});
// Mostrar solo la sección clickeada
const links = document.querySelectorAll('nav a');
const secciones = document.querySelectorAll('.seccion');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('data-section');

    secciones.forEach(seccion => {
      if (seccion.id === id) {
        seccion.classList.remove('hidden');
      } else {
        seccion.classList.add('hidden');
      }
    });
  });
});

// Manejo de formulario
document.getElementById('formularioContacto').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    document.getElementById('mensajeExito').textContent = '¡Gracias por tu mensaje!';
    this.reset();
  } else {
    document.getElementById('mensajeExito').textContent = 'Completa todos los campos.';
  }
});
