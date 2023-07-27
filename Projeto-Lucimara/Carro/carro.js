var imgcar1 = "skyline 500x500.jpg"
var imgcar2 = "Chevelle-1971-Vermelho-3-500x500.jpg"
var imgcar3 = "carro 500x500.jpg"
var imgcar4 = "carro antigo 500x500.jpg"

function img1click() {
    document.getElementById("principal").src = imgcar2
    document.getElementById("thumb1").src = imgcar1
    let trade = imgcar1
    imgcar1 = imgcar2
    imgcar2 = trade

}

function img2click() {
    document.getElementById("principal").src = imgcar3
    document.getElementById("thumb2").src = imgcar1
    let trade = imgcar1
    imgcar1 = imgcar3
    imgcar3 = trade
}

function img3click() {
    document.getElementById("principal").src = imgcar4
    document.getElementById("thumb3").src = imgcar1
    let trade = imgcar1
    imgcar1 = imgcar4
    imgcar4 = trade
}