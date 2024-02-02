document.addEventListener("DOMContentLoaded", function () {
    const ball = document.querySelector('.ball');

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the ball click
    ball.addEventListener('click', function () {
        // Change the ball color on click
        ball.style.backgroundColor = getRandomColor();
    });
});