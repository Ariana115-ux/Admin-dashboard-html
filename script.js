document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const signupLink = document.getElementById('signup-link');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Open login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Open signup modal from signup button
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // Open signup modal from link in login modal
    signupLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'block';
    });

    // Close modals when clicking on close button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Other modal and auth button code here

    // Toggle submenu for the "All" button
    const allButton = document.getElementById("all-button");
    allButton.addEventListener("click", toggleSubmenu);
});

function toggleSubmenu() {
    const submenu = document.getElementById("submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}