const btn = document.getElementById('btn');
btn.addEventListener('dblclick', () => {
    open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    btn.style.display = 'color: blue';
    btn.style.display = 'background-color: purple';
    btn.style.display = 'font-size: 90px';
})