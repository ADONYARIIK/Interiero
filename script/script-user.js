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
const fw = document.getElementById("field-what");
const what = document.getElementById("what");
const log = document.getElementById("login");
const sign = document.getElementById("signup");
const fieldsign = document.getElementById("sign-up");
const legendsign = document.getElementById("SignUp");
const inp1 = document.getElementById("name");
const inp2 = document.getElementById("surname");
const inp3 = document.getElementById("pass");
const mes = document.getElementById("message");
const h3 = document.getElementById("h3");
const inp4 = document.getElementById("rep-pass");
const inp5 = document.getElementById("email");
const inp6 = document.getElementById("phone");
const inp7 = document.getElementById("country");
const fi = document.getElementById("sign-img");
const li = document.getElementById("leg-img");
const fgi = document.getElementById("Image");
const tpcheck = document.getElementById("tp");
const tptext = document.getElementById("tp-text");
const signup = document.getElementById("sign-sub");

const toggleSwitch = document.querySelector(
    '.switch input[type="checkbox"]'
);

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add("dark");
        toTop.classList.add("dark");
        fw.classList.add("dark");
        what.classList.add("dark");
        sign.classList.add("dark");
        log.classList.add("dark");
        fieldsign.classList.add("dark");
        legendsign.classList.add("dark");
        inp1.classList.add("dark");
        inp2.classList.add("dark");
        inp3.classList.add("dark");
        mes.classList.add("dark");
        h3.classList.add("dark");
        inp4.classList.add("dark");
        inp5.classList.add("dark");
        inp6.classList.add("dark");
        inp7.classList.add("dark");
        fi.classList.add("dark");
        li.classList.add("dark");
        fgi.classList.add("dark");
        tpcheck.classList.add("dark");
        tptext.classList.add("dark");
        signup.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        toTop.classList.remove("dark");
        fw.classList.remove("dark");
        what.classList.remove("dark");
        sign.classList.remove("dark");
        log.classList.remove("dark");
        fieldsign.classList.remove("dark");
        legendsign.classList.remove("dark");
        inp1.classList.remove("dark");
        inp2.classList.remove("dark");
        inp3.classList.remove("dark");
        mes.classList.remove("dark");
        h3.classList.remove("dark");
        inp4.classList.remove("dark");
        inp5.classList.remove("dark");
        inp5.classList.remove("dark");
        inp6.classList.remove("dark");
        inp7.classList.remove("dark");
        fi.classList.remove("dark");
        li.classList.remove("dark");
        fgi.classList.remove("dark");
        tpcheck.classList.remove("dark");
        tptext.classList.remove("dark");
        signup.classList.remove("dark");
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



function SignUp(button) {
    const form = document.getElementById("sign-up");
    const anim = document.querySelectorAll('.anim');

    button.addEventListener("click", () => {
        form.style.display = 'block';
        anim.classlist.remove(active);

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
    });
}


function handleFocus(input) {
    input.style.width = "500px";
}

function adjustWidth(input) {
    message.style.display = "none"

    const span = document.createElement("span");
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.style.whiteSpace = "pre";
    span.style.font = window.getComputedStyle(input).font;
    span.textContent = input.value || "";

    document.body.appendChild(span);

    const newWidth = `${span.offsetWidth}px`;
    document.body.removeChild(span);

    input.style.width = newWidth;
}

function validatePassword() {
    const input = document.getElementById("pass");
    const letter = document.getElementById("letter");
    const capital = document.getElementById("capital");
    const number = document.getElementById("number");
    const length = document.getElementById("length");


    const lowerCaseLetters = /[a-z]/g;
    if (input.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    const upperCaseLetters = /[A-Z]/g;
    if (input.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    const numbers = /[0-9]/g;
    if (input.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (input.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}


const passwordInput = document.getElementById("pass");
const message = document.getElementById("message");
const repeatPasswordInput = document.getElementById("rep-pass");
const passwordError = document.getElementById("rep-pass-cor-error");

passwordInput.addEventListener('focus', () => {
    message.style.display = 'block';
});

passwordInput.addEventListener('blur', () => {
    if (!passwordInput.value) {
        message.style.display = 'none';
    }
});


function validatePasswords() {
    if (repeatPasswordInput.value !== passwordInput.value) {
        passwordError.style.display = 'block';
        Error = true;
    } else {
        passwordError.style.display = 'none';
        Error = false;
    }
}


const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia",
    "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic",
    "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia",
    "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam",
    "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
    "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda",
    "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia",
    "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)",
    "Yemen", "Zambia", "Zimbabwe"];

function autocomplete(inp, arr) {

    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
autocomplete(document.getElementById("country"), countries);




var loadFile = function (event) {
    var input = event.target;
    var file = input.files[0];
    var output = document.getElementById('preview_img');

    if (file) {
        output.src = URL.createObjectURL(file);
        output.onload = function () {
            URL.revokeObjectURL(output.src);
        };
    }
};


// function TermPrivacy(){
    
// }


let Error = false;

function change(button, event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const password = document.getElementById("pass");
    const repeatPassword = document.getElementById("rep-pass");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone");
    const country = document.getElementById("country");
    const check = document.getElementById("tp");
    const generalError = document.getElementById("general-error");
    const imgInput = document.getElementById("image");
    const previewImg = document.getElementById("preview_img");
    const checkbox = document.getElementById("tp");
    const checkboxError = document.getElementById("check-error");


    if (name.value.trim() === "") {
        document.getElementById("name-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("name-error").style.display = 'none';
    }

    if (surname.value.trim() === "") {
        document.getElementById("surname-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("surname-error").style.display = 'none';
    }

    if (password.value.trim() === "") {
        document.getElementById("pass-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("pass-error").style.display = 'none';
    }

    if (repeatPassword.value.trim() === "") {
        document.getElementById("rep-pass-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("rep-pass-error").style.display = 'none';
    }

    if (email.value.trim() === "") {
        document.getElementById("email-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("email-error").style.display = 'none';
    }

    if (phoneNumber.value.trim() === "") {
        document.getElementById("phone-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("phone-error").style.display = 'none';
    }

    if (country.value.trim() === "") {
        document.getElementById("country-error").style.display = 'block';
        Error = true;
    } else {
        document.getElementById("country-error").style.display = 'none';
    }

    if (!checkbox.checked) {
        checkboxError.style.display = "block";
        Error = true;
    } else {
        checkboxError.style.display = "none";
    }

    if (Error) {
        if (generalError) generalError.style.display = 'block';
        return;
    }

    if (generalError) generalError.style.display = 'none';

    const origin = button.innerHTML;
    button.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

    setTimeout(() => {
        button.innerHTML = origin;

        clear();

        window.location.href = "user-profile.html";
    }, 2000);

    function clear() {
        name.value = "";
        surname.value = "";
        password.value = "";
        repeatPassword.value = "";
        email.value = "";
        phoneNumber.value = "";
        country.value = "";
        imgInput.value = "";
        previewImg.src = "../img/upload-files.svg";

        document.getElementById("name-error").style.display = 'none';
        document.getElementById("surname-error").style.display = 'none';
        document.getElementById("pass-error").style.display = 'none';
        document.getElementById("rep-pass-error").style.display = 'none';
        document.getElementById("email-error").style.display = 'none';
        document.getElementById("phone-error").style.display = 'none';
        document.getElementById("country-error").style.display = 'none';
        if (generalError) generalError.style.display = 'none';

        check.checked = false;

    }
}


function checkAllFields() {
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const password = document.getElementById("pass");
    const repeatPassword = document.getElementById("rep-pass");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone");
    const country = document.getElementById("country");
    const check = document.getElementById("tp");
    const generalError = document.getElementById("general-error");

    if (
        name.value.trim() !== "" &&
        surname.value.trim() !== "" &&
        password.value.trim() !== "" &&
        repeatPassword.value.trim() !== "" &&
        email.value.trim() !== "" &&
        phoneNumber.value.trim() !== "" &&
        country.value.trim() !== "" &&
        check.checked
    ) {
        if (generalError) generalError.style.display = 'none';
    }
}

document.getElementById("name").addEventListener('input', () => {
    const nameError = document.getElementById("name-error");
    if (nameError && document.getElementById("name").value.trim() !== "") {
        nameError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("surname").addEventListener('input', () => {
    const surnameError = document.getElementById("surname-error");
    if (surnameError && document.getElementById("surname").value.trim() !== "") {
        surnameError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("pass").addEventListener('input', () => {
    const passwordError = document.getElementById("pass-error");
    if (passwordError && document.getElementById("pass").value.trim() !== "") {
        passwordError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("rep-pass").addEventListener('input', () => {
    const repeatPasswordError = document.getElementById("rep-pass-error");
    if (repeatPasswordError && document.getElementById("rep-pass").value.trim() !== "") {
        repeatPasswordError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("email").addEventListener('input', () => {
    const emailError = document.getElementById("email-error");
    if (emailError && document.getElementById("email").value.trim() !== "") {
        emailError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("phone").addEventListener('input', () => {
    const phoneError = document.getElementById("phone-error");
    if (phoneError && document.getElementById("phone").value.trim() !== "") {
        phoneError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("country").addEventListener('input', () => {
    const countryError = document.getElementById("country-error");
    if (countryError && document.getElementById("country").value.trim() !== "") {
        countryError.style.display = 'none';
    }
    checkAllFields();
});

document.getElementById("tp").addEventListener('change', () => {
    const checkboxError = document.getElementById("check-error");
    const checkbox = document.getElementById("tp");

    if (checkboxError && checkbox) {
        if (checkbox.checked) {
            checkboxError.style.display = 'none';
        } else {
            checkboxError.style.display = 'block';
        }
    }
    checkAllFields();
});