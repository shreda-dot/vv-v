let OpenNavBar = document.querySelector('.toggle')
let navMenu = document.querySelector('.nav-list')


OpenNavBar.onclick = function () {
    navMenu.classList.toggle('active')
}
document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animated-letter');

    const animationCompleted = sessionStorage.getItem('animatedCompleted');

    if (!animationCompleted) {
        letterElement.textContent = ' Shreða by name';
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animatedCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const letterElement = document.getElementById('animation-letter');

    const animationCompleted = sessionStorage.getItem('animationCompleted');

    if (!animationCompleted) {
        letterElement.textContent = ' a front end wizard ';
        letterElement.addEventListener('animationend', function () {
            letterElement.classList.add('complete');
            sessionStorage.setItem('animationCompleted', 'true');
        })
    }
    else {
        letterElement.classList.add('complete');
    }

});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll)
    })
    function smoothScroll(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });

    }

});

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = event.target.querySelector('#name').value;
        var email = event.target.querySelector('#email').value;
        var subject = event.target.querySelector('#subject').value;
        var message = event.target.querySelector('#message').value;
        
        var templateParams = {
            to_name: 'SHREDA',
            from_name: name,
            email,
            subject,
            message,
        };

        emailjs.send('service_ck7gvex', 'template_rpmyoxq', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully');
                document.getElementById('contact-form').reset();
            }, function (error) {
                console.log('FAILED...', error);
            });
       
    });
}
       
       const modals = document.querySelectorAll('.services-modal'),
             modalButtons = document.querySelectorAll('.services-button'),
             modalClose = document.querySelectorAll('.services-modal_close')

             let activateModal = (modalIndex) => {
                modals [modalIndex].classList.add ('active-modal');


             }
             modalButtons.forEach((modalButton, index) => {
                modalButton.addEventListener('click', () => {
                    activateModal(index);
                });

             });
             modalClose.forEach((modalClose) =>{
                modalClose.addEventListener('click', () =>{
                    modals.forEach((modalRemove) =>{
                        modalRemove.classList.remove('active-modal')
                    })

                })
             })