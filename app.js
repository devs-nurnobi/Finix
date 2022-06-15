$('.owl-company').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


// owl founder seciton slider
$('.owl-founder').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.owl-project').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

const playbtn=document.querySelector('.play-btn');
const playvdo=document.querySelector('.play-video');
const closebtn=document.querySelector('.close-btn');

playbtn.addEventListener('click', function(e){
    playvdo.classList.add('active');
});

closebtn.addEventListener('click', function(e){
    playvdo.classList.add('close');
    playvdo.pause();
    $('play-video play-vdo').attr("src", '');
});



