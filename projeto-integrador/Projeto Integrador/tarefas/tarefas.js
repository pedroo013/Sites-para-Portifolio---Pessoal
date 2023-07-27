var arrow = document.querySelector(".arrow ");
var lateral = document.querySelector('.lateral');
arrow.onclick = e => {
    if (!lateral.classList.contains('oculto')) {
        lateral.classList.add('oculto');
    } else {
        lateral.classList.remove('oculto');
    }
}
let count = 1;