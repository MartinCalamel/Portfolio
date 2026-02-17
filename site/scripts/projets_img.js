function over(id){
    image = document.getElementById(id);
    image.src = "../images/projet/color_"+id;
}

function off(id){
    image = document.getElementById(id);
    image.src = "../images/projet/"+id;
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        initAnimations();
    }, 500); // 50ms suffit
});

function initAnimations() {
    const elements = document.querySelectorAll('.div-projet');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animate', entry.isIntersecting);
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
}


