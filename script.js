document.addEventListener('DOMContentLoaded', () => {
    /* ----------------------------------------------------
       1. Global Background Mouse Glow
       ---------------------------------------------------- */
    const blob = document.getElementById("mouse-glow");
    
    if (blob) {
        window.addEventListener("mousemove", event => {
            const { clientX, clientY } = event;
            // Smoothly animate the background glow to follow the cursor
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        });
    }

    /* ----------------------------------------------------
       2. Linear-Style Card Hover Spotlight
       ---------------------------------------------------- */
    const cards = document.querySelectorAll(".linear-card");
    
    document.body.addEventListener("mousemove", e => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set CSS variables for the spotlight effect
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    /* ----------------------------------------------------
       3. Fade-Up Scroll Observer
       ---------------------------------------------------- */
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    /* ----------------------------------------------------
       4. Navbar Scroll Effect
       ---------------------------------------------------- */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg', 'bg-background/90');
            nav.classList.remove('bg-background/70');
        } else {
            nav.classList.remove('shadow-lg', 'bg-background/90');
            nav.classList.add('bg-background/70');
        }
    });
});