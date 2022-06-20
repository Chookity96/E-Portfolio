
tsParticles.load("tsparticles", "./assets/particles.json");
// template_dtjo4q6
// service_3m27o9f
// lupi1Z4iT9aNPddYs
let isModalOpen = false;
let contrastToggle = false;
const scalefactor = 1 / 20;



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    
    emailjs
        .sendForm(
            "service_3m27o9f",
            "template_dtjo4q6",
            event.target,
            "lupi1Z4iT9aNPddYs"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at my email: jegathees35@gmail.com"
            );
        })
}



function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle)
    {
        document.body.classList += " dark-theme";
    }
    else
    {
        document.body.classList.remove("dark-theme");
    }
}

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scalefactor;
    const y = event.clientY * scalefactor;
    
    for(let i = 0; i < shapes.length; i++)
    {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

