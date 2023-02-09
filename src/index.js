// Your code here

const filmAPI = 'http://localhost:3000/films';
const filmlistTop = document.getElementById('films');

function el(id) {
    return document.getElementById(id);
}
 
window.onload = function() {
    fetch("http://localhost:3000/films")
      .then(response => response.json())
      .then(films => {
        let firstFilm = films[0];
        renderFilm(firstFilm);
      })
    }


fetch(filmAPI)
.then(res => res.json())
.then(films => renderFilmLists(films));

function renderFilmLists(films) {
    films.forEach(renderFilm);
}

function renderFilm(films) {
  const filmElement =  document.createElement('li');
  filmElement.textContent = films.title;
filmElement.addEventListener('click', () => addFilmInfo(films))


  filmlistTop.append(filmElement);
}

function addFilmInfo(films) {
    let ticketsFree = films.capacity - films.tickets_sold;
  
    el('poster').src = films.poster;
el('title').textContent = films.title;
el('runtime').textContent = films.runtime + " minutes";
el("film-info").textContent =films.description;
el('showtime').textContent = films.showtime;
el('ticket-num').innerHTML = ticketsFree;
el('buy-ticket').addEventListener('click', function() {
    if (ticketsFree > 0) {
    ticketsFree--;
el('ticket-num').innerHTML = ticketsFree;
    }
});
}

