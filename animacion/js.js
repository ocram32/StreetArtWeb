document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.painting-text');
    const textToPaint = 'Tu texto aquí'; // Reemplaza con el texto que deseas pintar

    function paintLetters() {
        for (let i = 0; i < textToPaint.length; i++) {
            setTimeout(() => {
                const letter = document.createElement('span');
                letter.classList.add('letter');
                letter.textContent = textToPaint[i];
                textContainer.appendChild(letter);
            }, i * 100); // Ajusta el intervalo entre letras aquí
        }
    }

    paintLetters();
});
