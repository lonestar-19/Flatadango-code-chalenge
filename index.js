// function to fetch movie data from a local server and display the function fetchMovies() {
    function moviesArray (){
    fetch("http://localhost:3000/films") // Fetch movie data from the server
    .then(response => responsesponse.json()) // Parse the response as JSON
    .then(movies => {
        // Display movie titles and information
        displayMovieTitles(movies); // Call function to display movie titles
        // Display details of the first movie
        displayMovieDetails(movies[0]); // Call function to display details of the first movie
    });
}

// Call the fetchMovies function to initiate fetching and displaying movies
fetchMovies();

// Function to display movie titles
function displayMovieTitles(films) {
    let ul = document.getElementById("films"); // Get the films list element
    ul.innerHTML = ""; // Clear the existing content of the films list
    moviesArray.map(movie => {
        let li = document.createElement("li"); // Create a list item for each movie
        li.className = "film item"; // Add class to list item
        li.addEventListener("click", () => handleClick(movie)); // Add event listener for clicking on movie
        li.textContent = movie.title; // Set text content of list item to movie title
        ul.appendChild(listItem); // Append list item to films list
    });
}

// Function to display details of a single movie
function displayMovieDetails(movie) {
    let titleElement = document.getElementById("title"); // Get the title element
    titleElement.textContent = movie.title; // Set title
    let runtimeElement = document.getElementById("runtime"); // Get the runtime element
    runtimeElement.textContent = `${movie.runtime} minutes`; // Set runtime
    let infoElement = document.getElementById("film-info"); // Get the film info element
    infoElement.textContent = movie.description; // Set movie description
    let showtimeElement = document.getElementById("showtime"); // Get the showtime element
    showtimeElement.textContent = movie.showtime; // Set showtime
    let ticketCountElement = document.getElementById("ticket-num"); // Get the remaining ticket count element
    ticketCountElement.textContent = movie.capacity - movie.tickets_sold; // Calculate and set remaining ticket count
    let posterElement = document.getElementById("poster"); // Get the poster element
    posterElement.src = movie.poster; // Set poster image source
    let buyTicketBtn = document.getElementById("buy-ticket"); // Get the "Buy Ticket" button element
    buyTicketBtn.removeEventListener("click", handleTicket); // Remove existing event listener
    buyTicketBtn.addEventListener("click", () => handleTicket(ticketCountElement, movie)); // Add event listener for buying ticket
}

// Function to handle clicking on a movie
function handleClick(movie) {
    displayMovieDetails(movie);
}

// Function to handle buying a ticket for a movie
function handleTicket(ticketCountElement, movie) {
    let remainingTickets = parseInt(ticketCountElement.textContent); // Get the remaining ticket count
    if (remainingTickets > 0) { // If there are available tickets
        remainingTickets--; // Decrease the ticket count
        ticketCountElement.textContent = remainingTickets; // Update the displayed remaining ticket count
    }
}

