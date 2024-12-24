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

var imgs = document.getElementById("Imgs");
var imgt = document.getElementById("Imgt");
var imgu = document.getElementById("Imgu");
var imgv = document.getElementById("Imgv");
var imgw = document.getElementById("Imgw");
var imgx = document.getElementById("Imgx");


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


imgs.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgt.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgu.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgv.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgw.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
imgx.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}


var loadFile = function (event) {

    var input = event.target;
    var file = input.files[0];
    var type = file.type;

    var output = document.getElementById('preview_img');


    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src)
    }
};




// function change(button) {

//     const textarea = document.getElementById('description');

//     textarea.addEventListener('invalid', function () {
//         if (textarea.value.trim() === '') {
//             textarea.setCustomValidity('Please fill this field!');
//             return;
//         } else {
//             textarea.setCustomValidity('');
//         }
//     });

//     textarea.addEventListener('input', function () {
//         textarea.setCustomValidity('');
//     });


//     const origin = button.innerHTML;

//     button.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

//     setTimeout(() => {
//         button.innerHTML = origin;

//         clear();

//         showSnackbar();
//     }, 2000);

//     function clear() {
//         var text = document.getElementById("description");
//         var img = document.getElementById("image");
//         var pimg = document.getElementById("preview_img");

//         text.value = "";
//         img.value = "";
//         pimg.src = "../img/upload-files.svg";
//     }

//     function showSnackbar() {

//         var x = document.getElementById("snackbar");

//         x.className = "show";

//         setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
//     };
// }




function change(button, event) {

    event.preventDefault();


    const textarea = document.getElementById('description');

    if (textarea.value.trim() === "") {
        textarea.setCustomValidity('Please fill this field!');
        textarea.reportValidity();
        return;
    } else {
        textarea.setCustomValidity('');
    }

    const origin = button.innerHTML;

    button.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

    setTimeout(() => {
        button.innerHTML = origin;

        clear();

        showSnackbar();
    }, 2000);

    function clear() {
        textarea.value = "";
        img.value = "";
        var pimg = document.getElementById("preview_img");
        pimg.src = "../img/upload-files.svg";
    }

    function showSnackbar() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    }
}