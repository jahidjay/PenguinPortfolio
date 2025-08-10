// Dark/Light Theme Toggle
const themeBtn = document.querySelector('.theme-btn');
const root = document.documentElement;
const themeIcon = themeBtn.querySelector('i');

// Load saved theme from localStorage or default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';

// Toggle theme when the button is clicked
themeBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Animate icon change
  themeIcon.classList.add('fade-out');
  setTimeout(() => {
    themeIcon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    themeIcon.classList.remove('fade-out');
  }, 200);
});

// EmailJS Contact Form functionality (optional if you have this)
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  this.contact_number.value = (Math.random() * 100000) | 0;
  emailjs.sendForm('contact_service', 'contact-form', this)
    .then(() => alert('Message sent successfully!'), 
          (error) => console.log('FAILED...', error));
});
