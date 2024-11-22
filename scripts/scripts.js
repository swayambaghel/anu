function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Set target date for 12:00 AM IST on November 23
    let targetDate = new Date(`November 23, ${currentYear} 00:00:00 GMT+0530`);
    
    // If the target date has passed, set it for the next year
    if (now > targetDate) {
        targetDate = new Date(`November 23, ${currentYear + 1} 00:00:00 GMT+0530`);
    }
    
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "Countdown ended!";
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").textContent = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call


// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Login Form Validation
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Anu" && password === "swayamishot") {
        // Successful login
        document.getElementById("login-form").style.display = "none";
        document.getElementById("cards").style.display = "flex";
    } else {
        // Incorrect login
        document.getElementById("error-message").textContent = 
            "Wrong password, My Anu! Please try again 😘";
    }
});

// Card expansion functionality
let currentlyExpanded = null;
const overlay = document.querySelector('.overlay');

function expandCard(index) {
    const cards = document.querySelectorAll('.card');
    const clickedCard = cards[index];
    
    // If clicking the same card, collapse it
    if (currentlyExpanded === clickedCard) {
        collapseCard();
        return;
    }
    
    // Collapse previously expanded card
    if (currentlyExpanded) {
        collapseCard();
    }
    
    // Expand clicked card
    clickedCard.classList.add('expanded');
    currentlyExpanded = clickedCard;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function collapseCard() {
    if (currentlyExpanded) {
        currentlyExpanded.classList.remove('expanded');
        currentlyExpanded = null;
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Close expanded card when clicking overlay
overlay.addEventListener('click', collapseCard);

// Close expanded card when pressing ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        collapseCard();
    }
});
