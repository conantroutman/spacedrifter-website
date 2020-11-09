const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');

emailjs.init('user_fCTH9aMY7vGCzXlFmXEOH');

const form = document.querySelector('.form-contact');
form.addEventListener("submit", (event) => {sendEmail(event, form)})

const sendEmail = (event, form) => {
    console.log(form);
    event.preventDefault();
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