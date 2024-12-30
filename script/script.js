document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.querySelector('.scroll-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            scrollButton.style.display = 'block';
            document.getElementById("navbar").style.padding = "10px 10px";
            document.getElementById("logo").style.height = "8%";
            document.getElementById("logo").style.width = "8%";
        } else {
            scrollButton.style.display = 'none';
            document.getElementById("navbar").style.padding = "25px 25px";
            document.getElementById("logo").style.height = "10%";
            document.getElementById("logo").style.width = "10%";
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (!targetElement) return;

            if (this.classList.contains('button')) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                });
                return;
            }

            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
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


const searchField = document.getElementById("search-t");
const searchButton = document.getElementById("sb");

searchField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});

searchButton.addEventListener("click", function() {
    alert("Button clicked! Input value: " + searchField.value);
});

document.querySelector('.closebtn').addEventListener('click', closeSearch);




let options = {
    root: null,
    rootMargin: '25px',
    threshold: 0.1
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





document.getElementById('overlay').addEventListener('click', function () {
    this.style.display = 'none';


    const targetElements = document.querySelectorAll('.target');

    targetElements.forEach(element => {
        element.classList.add('action');
    });

    const anim = document.querySelectorAll('.UpText');

    anim.forEach(element => {
        element.classList.add('animate__animated', 'animate__bounceInDown', 'animate__delay-1s')
        element.classList.add('action')
    });

    const animm = document.querySelectorAll('.navbarl');

    animm.forEach(element => {
        element.classList.add('animate__animated', 'animate__bounceInDown', 'animate__delay-1s')
        element.classList.add('action')
    });

    const animmm = document.querySelectorAll('.search-field');
    const search = document.querySelectorAll('.ico2');

    animmm.forEach(element => {
        element.classList.add('animate__animated', 'animate__bounceInRight', 'animate__delay-1s')
    });
    search.forEach(element => {
        element.classList.add('action')
    });

    const animmmm = document.querySelectorAll('.ab1');

    animmmm.forEach(element => {
        element.classList.add('animate__animated', 'animate__bounceInRight', 'animate__delay-1s')
        element.classList.add('action')
    });

    const vis = document.querySelectorAll('.b1');

    vis.forEach(element => {
        element.classList.add('action')
    });
});