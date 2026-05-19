// github.js - Gestión de información de GitHub

// Configuración de GitHub
const GITHUB_USERNAME = 'AirLord56';

// Función para crear el perfil de GitHub en el DOM
function cargarPerfilGitHub() {
  const profileContainer = document.getElementById('github-profile');
  
  fetch('https://api.github.com/users/' + GITHUB_USERNAME)
    .then(function(respuesta) {
      if (!respuesta.ok) {
        throw new Error('Error al cargar perfil');
      }
      return respuesta.json();
    })
    .then(function(usuario) {
      profileContainer.innerHTML = '';
      
      const img = document.createElement('img');
      img.src = usuario.avatar_url;
      img.alt = 'Avatar de ' + usuario.name;
      img.className = 'github-avatar';
      
      const infoDiv = document.createElement('div');
      infoDiv.className = 'github-info';
      
      const h3 = document.createElement('h3');
      h3.textContent = usuario.name || usuario.login;
      
      const bio = document.createElement('p');
      bio.textContent = usuario.bio || 'Desarrollador apasionado por la tecnología';
      
      const statsDiv = document.createElement('div');
      statsDiv.className = 'github-stats';
      
      const reposDiv = document.createElement('div');
      reposDiv.className = 'github-stat';
      reposDiv.innerHTML = '<span class="github-stat-number">' + usuario.public_repos + '</span><span class="github-stat-label">Repositorios</span>';
      
      const followersDiv = document.createElement('div');
      followersDiv.className = 'github-stat';
      followersDiv.innerHTML = '<span class="github-stat-number">' + usuario.followers + '</span><span class="github-stat-label">Seguidores</span>';
      
      const followingDiv = document.createElement('div');
      followingDiv.className = 'github-stat';
      followingDiv.innerHTML = '<span class="github-stat-number">' + usuario.following + '</span><span class="github-stat-label">Siguiendo</span>';
      
      statsDiv.appendChild(reposDiv);
      statsDiv.appendChild(followersDiv);
      statsDiv.appendChild(followingDiv);
      
      const link = document.createElement('a');
      link.href = usuario.html_url;
      link.target = '_blank';
      link.className = 'github-link';
      link.textContent = 'Ver perfil completo';
      
      infoDiv.appendChild(h3);
      infoDiv.appendChild(bio);
      infoDiv.appendChild(statsDiv);
      infoDiv.appendChild(link);
      
      profileContainer.appendChild(img);
      profileContainer.appendChild(infoDiv);
    })
    .catch(function(error) {
      console.error('Error al cargar perfil:', error);
      profileContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No se pudo cargar el perfil de GitHub</p>';
    });
}

// Función para cargar repositorios de GitHub
function cargarRepositoriosGitHub() {
  const reposContainer = document.getElementById('github-repos');
  
  fetch('https://api.github.com/users/' + GITHUB_USERNAME + '/repos?sort=updated&per_page=6')
    .then(function(respuesta) {
      if (!respuesta.ok) {
        throw new Error('Error al cargar repositorios');
      }
      return respuesta.json();
    })
    .then(function(repositorios) {
      reposContainer.innerHTML = '';
      
      for (let i = 0; i < repositorios.length; i++) {
        const repo = repositorios[i];
        
        const card = document.createElement('div');
        card.className = 'repo-card';
        
        const h3 = document.createElement('h3');
        h3.textContent = repo.name;
        
        const p = document.createElement('p');
        p.textContent = repo.description || 'Sin descripción';
        
        const info = document.createElement('div');
        info.className = 'repo-info';
        
        if (repo.language) {
          const language = document.createElement('span');
          language.textContent = '💻 ' + repo.language;
          info.appendChild(language);
        }
        //Si,me gustan los emojis, no es IA.
        const stars = document.createElement('span');
        stars.textContent = '⭐ ' + repo.stargazers_count;
        info.appendChild(stars);
        
        const forks = document.createElement('span');
        forks.textContent = '🔀 ' + repo.forks_count;
        info.appendChild(forks);
        
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';
        link.textContent = 'Ver repositorio';
        
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(info);
        card.appendChild(link);
        
        reposContainer.appendChild(card);
      }
    })
    .catch(function(error) {
      console.error('Error al cargar repositorios:', error);
      reposContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No se pudieron cargar los repositorios</p>';
    });
}

// Inicializar la carga de datos de GitHub
cargarPerfilGitHub();
cargarRepositoriosGitHub();