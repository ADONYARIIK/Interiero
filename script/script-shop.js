document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.querySelector('.scroll-button');

    const container = document.getElementById('container');
    const dropdown = document.getElementById('col-sel');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 222) {
            scrollButton.style.display = 'block';
            container.classList.add('act');
            dropdown.classList.add('act');
        } else {
            scrollButton.style.display = 'none';
            container.classList.remove('act');
            dropdown.classList.remove('act');
        }
    });
});

const searchOverlay = document.getElementById('s-overlay');
const openSearchBtn = document.getElementById('open-search');

function openSearch() {
    searchOverlay.style.display = "block"
}

function closeSearch() {
    searchOverlay.style.display = "none";
}

openSearchBtn.addEventListener('click', openSearch);

document.querySelector('.closebtn').addEventListener('click', closeSearch);



function myFunction(element) {
    document.getElementById('container').classList.toggle("change");
    document.getElementById('Mydropdown').classList.toggle("show");
}



var modal = document.getElementById("modal");


var imga = document.getElementById("Imga");
var imgb = document.getElementById("Imgb");
var imgc = document.getElementById("Imgc");
var imgd = document.getElementById("Imgd");
var imge = document.getElementById("Imge");
var imgf = document.getElementById("Imgf");

var imgg = document.getElementById("Imgg");
var imgh = document.getElementById("Imgh");
var imgi = document.getElementById("Imgi");
var imgj = document.getElementById("Imgj");
var imgk = document.getElementById("Imgk");
var imgl = document.getElementById("Imgl");

var imgm = document.getElementById("Imgm");
var imgn = document.getElementById("Imgn");
var imgo = document.getElementById("Imgo");
var imgp = document.getElementById("Imgp");
var imgq = document.getElementById("Imgq");
var imgr = document.getElementById("Imgr");


var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");


imga.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgb.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgc.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgd.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imge.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgf.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


imgg.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgh.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgi.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgj.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgk.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgl.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


imgm.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgn.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgo.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgp.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgq.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgr.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}