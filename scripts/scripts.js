// Countdown Timer with modern formatting
function updateCountdown() {
    const targetDate = new Date("2024-11-23T12:00:00");
    const currentDate = new Date();
    const diff = targetDate - currentDate;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "Happy Birthday! 🎉";
        document.getElementById("countdown").classList.add("celebration");
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Modern format with emojis
        document.getElementById("countdown").innerHTML = `
            <span>${days}d</span> 
            <span>${hours}h</span> 
            <span>${minutes}m</span> 
            <span>${seconds}s</span>`;
    }
}

// Update countdown every second with smooth transition
setInterval(updateCountdown, 1000);
updateCountdown();

// Enhanced Login Form with smooth transitions
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginForm = document.getElementById("login-form");
    const cards = document.getElementById("cards");
    const errorMessage = document.getElementById("error-message");

    if (username === "Anu" && password === "swayamishot") {
        loginForm.style.transform = "translateY(-100vh)";
        loginForm.style.opacity = "0";
        
        setTimeout(() => {
            loginForm.style.display = "none";
            cards.style.display = "grid";
            // Animate cards entrance
            document.querySelectorAll('.card').forEach((card, index) => {
                card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
            });
        }, 500);
    } else {
        errorMessage.textContent = "Wrong password, My Anu! Please try again 😘";
        errorMessage.style.animation = "shake 0.5s ease-in-out";
    }
});

// Enhanced Card Expansion with smooth animations
let currentlyExpanded = null;
const overlay = document.querySelector('.overlay');

function expandCard(index) {
    const cards = document.querySelectorAll('.card');
    const clickedCard = cards[index];
    
    if (currentlyExpanded === clickedCard) {
        collapseCard();
        return;
    }
    
    if (currentlyExpanded) {
        collapseCard();
    }
    
    clickedCard.classList.add('expanded');
    currentlyExpanded = clickedCard;
    overlay.style.display = 'block';
    
    // Smooth fade in
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function collapseCard() {
    if (currentlyExpanded) {
        currentlyExpanded.classList.remove('expanded');
        overlay.style.opacity = '0';
        
        setTimeout(() => {
            overlay.style.display = 'none';
            currentlyExpanded = null;
        }, 300);
        
        document.body.style.overflow = 'auto';
    }
}

overlay.addEventListener('click', collapseCard);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        collapseCard();
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
