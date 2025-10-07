// Navigation functions
function goToHome() {
    window.location.href = 'index.html';
}

function goToLogin() {
    window.location.href = 'loginpage.html';
}

function goToPurchase() {
    window.location.href = 'PurchasePage1.html';
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    if (email && password) {
        // Simulate successful login
        message.textContent = 'Login successful! Redirecting...';
        message.style.color = 'green';
        setTimeout(() => {
            goToPurchase();
        }, 1000);
    } else {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
    }
}

// Handle index form submission (simulate login)
function handleIndexLogin(event) {
    event.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const username = document.querySelector('input[type="text"]').value;

    if (email && username) {
        alert('Login successful! Redirecting to purchase page.');
        goToPurchase();
    } else {
        alert('Please fill in email and username.');
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // For loginpage.html
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // For index.html
    const indexForm = document.querySelector('form[action="submit here"]');
    if (indexForm) {
        indexForm.addEventListener('submit', handleIndexLogin);
    }

    // Add navigation buttons if needed
    // For example, add a button to go to purchase from index

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('drawer');
    const closeDrawer = document.getElementById('closeDrawer');

    if (hamburger && drawer) {
        hamburger.addEventListener('click', function() {
            drawer.classList.toggle('open');
            hamburger.classList.toggle('open');
        });

        // Close drawer when close button is clicked
        if (closeDrawer) {
            closeDrawer.addEventListener('click', function() {
                drawer.classList.remove('open');
                hamburger.classList.remove('open');
            });
        }

        // Close drawer when a link is clicked
        const drawerLinks = drawer.querySelectorAll('a');
        drawerLinks.forEach(link => {
            link.addEventListener('click', function() {
                drawer.classList.remove('open');
                hamburger.classList.remove('open');
            });
        });
    }
});
