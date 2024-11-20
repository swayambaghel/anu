// Countdown Timer
function updateCountdown() {
    const targetDate = new Date("2024-11-23T12:00:00");
    const currentDate = new Date();
    const diff = targetDate - currentDate;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "Countdown ended!";
    } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").textContent = `${hours}h ${minutes}m ${seconds}s`;
    }
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);

// Login Form Validation
document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Anu" && password === "swayamishot") {
        // Successful login, show cards
        document.getElementById("login-form").style.display = "none";
        document.getElementById("cards").style.display = "flex";
    } else {
        // Incorrect login, show error message
        document.getElementById("error-message").textContent = "Wrong password, My Anu! Please try again 😘";
    }
});

// Expand the card
function expandCard(index) {
    const cards = document.querySelectorAll('.card');
    const card = cards[index];
    
    card.classList.toggle('expanded');
}
 
