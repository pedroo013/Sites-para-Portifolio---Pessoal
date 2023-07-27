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
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}