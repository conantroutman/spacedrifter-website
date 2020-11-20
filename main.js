const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');

emailjs.init('user_fCTH9aMY7vGCzXlFmXEOH');

const form = document.querySelector('.form-contact');
//form.addEventListener("submit", (event) => {sendEmail(event, form)})
form.addEventListener("submit", (event) => {validateForm(event)});

const sendEmail = (form) => {
    // generate a five digit number for the contact_number variable
    form.contact_number.value = Math.random() * 100000 | 0;

    emailjs.sendForm('gmail', 'contact_form', form)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });

    form.reset();
}


const inputFirstName = document.querySelector('#first_name');
const inputLastName = document.querySelector('#last_name');
const inputEmail = document.querySelector('#user_email');
const inputMessage = document.querySelector('#message');

// Contact form validation for first name input
const validateFirstName = () => {
    if (inputFirstName.value.length > 0) {
        setValidationMessage(inputFirstName, true);
        return true;
    } else {
        setValidationMessage(inputFirstName, false);
        return false;
    }
}

const validateLastName = () => {
    if (inputLastName.value.length > 0) {
        setValidationMessage(inputLastName, true);
        return true;
    } else {
        setValidationMessage(inputLastName, false);
        return false;
    }
}

const validateEmail = () => {
    // Regex from https://emailregex.com/
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (regex.exec(inputEmail.value)) {
        setValidationMessage(inputEmail, true);
        return true;
    } else {
        setValidationMessage(inputEmail, false);
        return false;
    }
}

const validateMessage = () => {
    if (inputMessage.value.length > 0) {
        setValidationMessage(inputMessage, true);
        return true;
    } else {
        setValidationMessage(inputMessage, false);
        return false;
    }
}

const validateForm = (event) => {
    event.preventDefault();
    if (validateFirstName() && validateLastName() && validateEmail() && validateMessage()) {
        sendEmail(form)
    }
}

const setValidationMessage = (element, isValid) => {
    if (!isValid) {
        element.parentElement.querySelector('.validation').classList.remove('validation-valid');
        element.parentElement.querySelector('.validation').classList.add('validation-invalid');
    } else {
        element.parentElement.querySelector('.validation').classList.remove('validation-invalid');
        element.parentElement.querySelector('.validation').classList.add('validation-valid');
    }
}

const getSpotifyReleases = () => {
    const test = document.querySelector(".releases");
    fetch('./releases.json')
        .then(response => response.json())
        .then(data => {
            data.releases.forEach(release => {
                console.log(release.title);
                const html = `
                <div class="release">
                    <div class="cover-image">
                        <img src="${release.cover}"></img>
                    </div>
                    <iframe src="https://open.spotify.com/embed/album/${release.spotifyId}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <h3>${release.title}</h3>
                    <div>${new Date(release.date).getFullYear()}</div>
                    <div>${release.type}</div>
                </div>
                `;
                test.innerHTML += html;
            });
        })
}

const setLatestRelease = () => {
    
}

getSpotifyReleases();