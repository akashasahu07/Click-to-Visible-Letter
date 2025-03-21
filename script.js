const f = document.getElementById('f');
const l = document.getElementById('l');
const a = document.getElementById('a');
const s = document.getElementById('s');
const h = document.getElementById('h');
const icon = document.getElementById('icon');
const complete = document.getElementById('complete');

f.addEventListener('click', () => {
    f.style.display = 'none';
    l.style.display = 'block';
});

l.addEventListener('click', () => {
    l.style.display = 'none';
    a.style.display = 'block';
});

a.addEventListener('click', () => {
    a.style.display = 'none';
    s.style.display = 'block';
});

s.addEventListener('click', () => {
    s.style.display = 'none';
    h.style.display = 'block';
});

h.addEventListener('click', () => {
    h.style.display = 'none';
    icon.style.display = 'block';
});

icon.addEventListener('click', () => {
    icon.style.display = 'none';
    complete.style.display = 'block';
});

complete.addEventListener('click', () => {
    complete.style.display = 'none';
    f.style.display = 'block';
});