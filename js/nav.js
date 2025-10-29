const menuBtn = document.getElementById('menu-icon-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});