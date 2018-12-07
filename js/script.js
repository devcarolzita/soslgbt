const botao = document.querySelector(".login__button")
const botaoFechar = document.querySelector(".login-modal__button-close")
const botaoEnviar= document.querySelector(".login-modal__button")
const botaoVolunters = document.querySelector(".button_volunters")
// let form = $ (".contato__form")
botao.addEventListener("click", function (evento1) {
    evento1.preventDefault()
    
    
    document.querySelector(".login-modal").classList.toggle('login-modal--active')
})


botaoFechar.addEventListener("click", function (evento1) {
    evento1.preventDefault()
    document.querySelector(".login-modal").classList.toggle('login-modal--active')
    
})

botaoEnviar.addEventListener("click", function(evento1){
    evento1.preventDefault()
    alert ("Enviado com sucesso")
        document.querySelector(".login-modal").style.display = "none"

})

document.addEventListener('scroll', function(e) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
        var navbar = document.getElementById('nav');
        navbar.className = "navbar bg-nav";
    } else {
        var navbar = document.getElementById('nav');
        navbar.className = "navbar";
    }

    if(window.pageYOffset > 500) {
        var gradient = document.getElementById('gradient4');
        gradient.className = 'gradient';
    }

    if(window.pageYOffset > 1041) {
        var gradient = document.getElementById('gradient1');
        gradient.className = 'gradient';
    }

    if(window.pageYOffset > 1829){
        var gradient = document.getElementById('gradient2');
        gradient.className = 'gradient';
    }
    if(window.pageYOffset > 2564){
        var gradient = document.getElementById('gradient3');
        gradient.className = 'gradient';
    }
})



botaoVolunters.addEventListener("click", function (evento1) {
    evento1.preventDefault()
    document.querySelector(".login-modal1").classList.toggle('login-modal--active')
})


botaoFechar.addEventListener("click", function (evento1) {
    evento1.preventDefault()
    document.querySelector(".login-modal1").classList.toggle('login-modal--active')
    
})

botaoEnviar.addEventListener("click", function(evento1){
    evento1.preventDefault()
    alert ("Enviado com sucesso")
        document.querySelector(".login-modal").style.display = "none"

})
// form.validate({
//     rules:{
//         name:"required",

//     }
// })

const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

button.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(sidebar.classList)
    if(sidebar.classList.contains("sidebar-menu__hidden")){
      sidebar.classList.remove("sidebar-menu__hidden");
      sidebar.classList.add("sidebar-menu__visible");
    }else{
      sidebar.classList.remove("sidebar-menu__visible");
      sidebar.classList.add("sidebar-menu__hidden")
    }
})

// const button = document.querySelector(".sidebar-menu__button");
// const sidebar = document.querySelector(".sidebar-menu");

// button.addEventListener("click", function(event) {
//     event.preventDefault();

//     console.log(sidebar.classList)
//     if(sidebar.classList.contains("sidebar-menu__visible")){
//       sidebar.classList.remove("sidebar-menu__visible");
//       sidebar.classList.add("sidebar-menu__hidden");
//     }else{
//       sidebar.classList.remove("sidebar-menu__hidden");
//       sidebar.classList.add("sidebar-menu__visible")
//     }
// })