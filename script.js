const reasons = [
    "Amo q siempre estes ahí para mi",
    "ME ENCANTA tu personalidad, la adoro",
    "La forma en la que siempre te preocupas por mi",
    "El q gracias a ti mi vida, mis dias son mucho mejores <3",
    "Lo lista y apasionada que eres",
    "Simplemente por ser tú, Ojitos lindos, te amo con todo mi corazonnnnn"
];

let currentReasonIndex = 0;

const reasonText = document.getElementById('reason-text');
const nextBtn = document.getElementById('next-btn');
const starsContainer = document.querySelector('.stars-container');

// Función para cambiar de razón
nextBtn.addEventListener('click', () => {
    reasonText.style.opacity = 0; // Efecto de desvanecimiento
    
    setTimeout(() => {
        currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
        reasonText.innerText = reasons[currentReasonIndex];
        reasonText.style.opacity = 1;
    }, 300);
});

// Generador de estrellas aleatorias
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        
        starsContainer.appendChild(star);
    }
}

createStars();