document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.querySelector('.scroll-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});


const toTop = document.getElementById("to-top");
const pd = document.getElementById("productData");
const fi = document.getElementById("fieldImg");
const ft = document.getElementById("fieldText");
const fr = document.getElementById("field-rates");
const fri = document.getElementById("rat-img");
const frr = document.getElementById("rat-rat");
const frt = document.getElementById("rat-text");
const frta = document.getElementById("description");
const fru = document.getElementById("field-urates");

const toggleSwitch = document.querySelector(
    '.switch input[type="checkbox"]'
);

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add("dark");
        toTop.classList.add("dark");
        pd.classList.add("dark");
        fi.classList.add("dark");
        ft.classList.add("dark");
        fr.classList.add("dark");
        fri.classList.add("dark");
        frr.classList.add("dark");
        frt.classList.add("dark");
        frta.classList.add("dark");
        fru.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        toTop.classList.remove("dark");
        pd.classList.remove("dark");
        fi.classList.remove("dark");
        ft.classList.remove("dark");
        fr.classList.remove("dark");
        fri.classList.remove("dark");
        frr.classList.remove("dark");
        frt.classList.remove("dark");
        frta.classList.remove("dark");
        fru.classList.remove("dark");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);




var header = document.getElementById("header");

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
        header.style.top = "0";
    } else {
        header.style.top = "-200px";
    }
};


const searchOverlay = document.getElementById('s-overlay');
const openSearchBtn = document.getElementById('open-search');

function openSearch() {
    searchOverlay.style.display = "block"
}

function closeSearch() {
    searchOverlay.style.display = "none";
}

openSearchBtn.addEventListener('click', openSearch);


const searchField = document.getElementById("search-t");
const searchButton = document.getElementById("sb");

searchField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});

searchButton.addEventListener("click", function () {
    alert("Button clicked! Input value: " + searchField.value);
});

document.querySelector('.closebtn').addEventListener('click', closeSearch);



let options = {
    root: null,
    rootMargin: '25px',
    threshold: 0.01
}

let callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('find', entry);
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});



function favo() {
    const addToFavo = document.getElementById("addToFavo");

    addToFavo.addEventListener("click", () => {
        addToFavo.classList.toggle('checked');
    });
}

favo();



var loadFile = function (event) {
    var input = event.target;
    var file = input.files[0];
    var output = document.getElementById('preview_img');

    if (file) {
        output.src = URL.createObjectURL(file);
        output.onload = function () {
            URL.revokeObjectURL(output.src);
        };

        const imgError = document.getElementById('img-error');
        if (imgError) {
            imgError.style.display = 'none';
        }
    }
};



function change(button, event) {
    event.preventDefault();

    const textarea = document.getElementById('description');
    const imgInput = document.getElementById('image');
    const previewImg = document.getElementById('preview_img');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const generalError = document.getElementById('general-error');

    let hasRating = false;
    ratingInputs.forEach(input => {
        if (input.checked) {
            hasRating = true;
        }
    });

    let hasError = false;

    if (!hasRating) {
        document.getElementById('rating-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('rating-error').style.display = 'none';
    }

    if (textarea.value.trim() === "") {
        document.getElementById('text-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('text-error').style.display = 'none';
    }

    if (!imgInput.value) {
        document.getElementById('img-error').style.display = 'block';
        hasError = true;
    } else {
        document.getElementById('img-error').style.display = 'none';
    }

    if (hasError) {
        if (generalError) generalError.style.display = 'block';
        return;
    }

    if (generalError) generalError.style.display = 'none';

    const origin = button.innerHTML;
    button.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

    setTimeout(() => {
        button.innerHTML = origin;

        clear();

        showSnackbar();
    }, 2000);

    function clear() {
        textarea.value = "";
        imgInput.value = "";
        previewImg.src = "../img/upload-files.svg";

        document.getElementById('rating-error').style.display = 'none';
        document.getElementById('text-error').style.display = 'none';
        document.getElementById('img-error').style.display = 'none';
        if (generalError) generalError.style.display = 'none';

        ratingInputs.forEach(input => {
            input.checked = false;
        });
    }

    function showSnackbar() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(() => {
            x.className = x.className.replace("show", "");
        }, 3000);
    }
}

function checkAllFields() {
    const textarea = document.getElementById('description');
    const imgInput = document.getElementById('image');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const generalError = document.getElementById('general-error');

    let hasRating = false;
    ratingInputs.forEach(input => {
        if (input.checked) {
            hasRating = true;
        }
    });

    if (
        textarea.value.trim() !== "" &&
        imgInput.value &&
        hasRating
    ) {
        if (generalError) generalError.style.display = 'none';
    }
}

document.getElementById('description').addEventListener('input', () => {
    const textError = document.getElementById('text-error');
    if (textError && document.getElementById('description').value.trim() !== "") {
        textError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById('image').addEventListener('change', () => {
    const imgError = document.getElementById('img-error');
    if (imgError && document.getElementById('image').value) {
        imgError.style.display = 'none';
    }
    checkAllFields();
});

document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener('change', () => {
        const ratingError = document.getElementById('rating-error');
        if (ratingError && Array.from(document.querySelectorAll('input[name="rating"]')).some(radio => radio.checked)) {
            ratingError.style.display = 'none';
        }
        checkAllFields();
    });
});





var modal = document.getElementById("modal");

var imga = document.getElementById("Imga");
// var imgb = document.getElementById("Imgb");
// var imgc = document.getElementById("Imgc");
// var imgd = document.getElementById("Imgd");
// var imge = document.getElementById("Imge");
// var imgf = document.getElementById("Imgf");

// var imgg = document.getElementById("Imgg");
// var imgh = document.getElementById("Imgh");
// var imgi = document.getElementById("Imgi");
// var imgj = document.getElementById("Imgj");
// var imgk = document.getElementById("Imgk");
// var imgl = document.getElementById("Imgl");

// var imgm = document.getElementById("Imgm");
// var imgn = document.getElementById("Imgn");
// var imgo = document.getElementById("Imgo");
// var imgp = document.getElementById("Imgp");
// var imgq = document.getElementById("Imgq");
// var imgr = document.getElementById("Imgr");

// var imgs = document.getElementById("Imgs");
// var imgt = document.getElementById("Imgt");
// var imgu = document.getElementById("Imgu");
// var imgv = document.getElementById("Imgv");
// var imgw = document.getElementById("Imgw");
// var imgx = document.getElementById("Imgx");


var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");


imga.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// imgb.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgc.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgd.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imge.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgf.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }


// imgg.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgh.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgi.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgj.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgk.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgl.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }


// imgm.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgn.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgo.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgp.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgq.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgr.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }


// imgs.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgt.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgu.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgv.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgw.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgx.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}