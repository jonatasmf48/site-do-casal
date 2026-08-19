document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Menu Responsivo Mobile
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "<span></span><span></span><span></span>";
    
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    
    if (navbar && menu) {
        navbar.appendChild(menuToggle);
        
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
            menuToggle.classList.toggle("open");
        });
    }

    // 2. Animação de Revelação de Elementos ao Rolar (Scroll Reveal)
    const elementsToReveal = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        elementsToReveal.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100; // margem de ativação
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Executa uma vez no início para checar elementos no topo
});
