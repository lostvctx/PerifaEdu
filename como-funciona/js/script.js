// Animação para botão
function Pulso() {
 
    const pulso = document.getElementById("baixar-app");
 
    pulso.addEventListener("click", () => {
        pulso.classList.add("pulsar");  
 
        pulso.addEventListener("animationend", () => {
            pulso.classList.remove("pulsar");
        });
    });
}
Pulso();

//Menu Hamburger
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Impede a rolagem da página quando o menu está aberto
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Fechar o menu quando um link for clicado
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fechar o menu ao redimensionar a tela (se voltar para desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});