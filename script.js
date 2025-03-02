
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-times');
});

const header = document.querySelector('.header');

window.onscroll = () => {
    
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    navbar.classList.remove('active');
    menu.classList.remove('fa-times');

};


const nameElement = document.getElementById('name');
const fullName = "ALI Tchagnim Grégoire";
let index = 0;

function typeName() {
    if (index < fullName.length) {
        nameElement.textContent += fullName.charAt(index);
        index++;
        setTimeout(typeName, 200);
    }
}

typeName();

document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    events.forEach(event => {
        observer.observe(event);
    });
});


window.addEventListener('scroll', function() {
    const box = document.querySelector('.content-contact');
    const boxPosition = box.getBoundingClientRect().top; 
    const windowHeight = window.innerHeight; 
    
    if (boxPosition < windowHeight) {
        box.classList.add('start-animation');
    }
});


