$('.owl-carousel').owlCarousel({
    loop:true,//Carrosel infinito
    margin:10,
    nav:false,//Botãozinho de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})