const texts = [
    "I Am A Front-End Developer",
    "I Am A Full Stack Developer",
    "I Am A Computer Science Engineer",
    "I Am An Artificial Intelligence Enthusiast"
];
let index = 0;
const element = document.getElementById('dynamic-text');

function changeText() {
    element.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 500);

document.addEventListener('DOMContentLoaded', () => {
    const cursor1 = document.createElement('div');
    cursor1.className = 'cursor-1';
    document.body.appendChild(cursor1);

    const cursor2 = document.createElement('div');
    cursor2.className = 'cursor-2';
    document.body.appendChild(cursor2);

    document.addEventListener('mousemove', (e) => {
        cursor1.style.left = `${e.pageX}px`;
        cursor1.style.top = `${e.pageY}px`;

        cursor2.style.left = `${e.pageX}px`;
        cursor2.style.top = `${e.pageY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    });

    document.querySelectorAll('a').forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        });
        el.addEventListener('mouseout', () => {
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const root = document.documentElement; // Get the root element (HTML)

    function getRandomColor() {
        // Generate a random color in hexadecimal format
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updateColors() {
        // Update CSS variables with random colors
        root.style.setProperty('--text-color', getRandomColor());
        root.style.setProperty('--icon-color', getRandomColor());
    }

    // Call updateColors every 200 milliseconds
    setInterval(updateColors, 200);
});
