const estudios = [
  {
    yearInicio: '2019',
    yearFin: '2023',
    titulo: 'Educación Secundaria Obligatoria (ESO)',
    descripcion: 'Educación básica completada con éxito'
  },
  {
    yearInicio: '2023',
    yearFin: '2025',
    titulo: 'Grado Medio en Sistemas Microinformáticos y Redes',
    descripcion: 'Formación especializada en infraestructura tecnológica, mantenimiento de equipos, redes y sistemas informáticos'
  },
  {
    yearInicio: '2026',
    yearFin: 'Actualidad',
    titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
    descripcion: 'Actualmente cursando 1º de DAM. Aprendiendo desarrollo de software con Java, HTML, CSS, JavaScript y bases de datos'
  }
];

function crearEstudioHTML(estudio) {
  const article = document.createElement('article');
  article.className = 'estudio';
  
  const divYear = document.createElement('div');
  divYear.className = 'estudio-year';
  divYear.textContent = estudio.yearInicio + ' - ' + estudio.yearFin;
  
  const divContent = document.createElement('div');
  divContent.className = 'estudio-content';
  
  const h3 = document.createElement('h3');
  h3.textContent = estudio.titulo;
  
  const p = document.createElement('p');
  p.textContent = estudio.descripcion;
  
  divContent.appendChild(h3);
  divContent.appendChild(p);
  
  article.appendChild(divYear);
  article.appendChild(divContent);
  
  return article;
}

function renderizarEstudios() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';
  
  for (let i = 0; i < estudios.length; i++) {
    const estudioHTML = crearEstudioHTML(estudios[i]);
    container.appendChild(estudioHTML);
  }
}

const btnNuevoEstudio = document.getElementById('btn-nuevo-estudio');
const formEstudio = document.getElementById('form-estudio');
const formNuevoEstudio = document.getElementById('form-nuevo-estudio');
const btnCancelar = document.getElementById('btn-cancelar');

btnNuevoEstudio.addEventListener('click', function() {
  formEstudio.style.display = 'block';
  formNuevoEstudio.reset();
});

btnCancelar.addEventListener('click', function() {
  formEstudio.style.display = 'none';
  formNuevoEstudio.reset();
});

formNuevoEstudio.addEventListener('submit', function(evento) {
  evento.preventDefault();
  
  const yearInicio = document.getElementById('year-inicio').value;
  const yearFin = document.getElementById('year-fin').value;
  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  
  const nuevoEstudio = {
    yearInicio: yearInicio,
    yearFin: yearFin,
    titulo: titulo,
    descripcion: descripcion
  };
  
  estudios.push(nuevoEstudio);
  
  renderizarEstudios();
  
  formEstudio.style.display = 'none';
  formNuevoEstudio.reset();
});

renderizarEstudios();