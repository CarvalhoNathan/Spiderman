document.addEventListener('DOMContentLoaded', () => {
    
    let tl1 = new TimelineMax();

    tl1
        // Tela de carregamento
    
        .fromTo('.bg-loader', 1, {width: '100%'},{
            width: '0%', delay: 5, ease: Expo.easeInOut
        })

        // Video de fundo
        
        .fromTo('.bg-video', 2, 
        {width: '0%', opacity: 0},
        {width: '100%', opacity: 1, ease: Power3.easeInOut
        }, '-=1')

        // Logo Spiderman
        
        .fromTo('.logo', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Navlist

        .fromTo('.nav-list', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Redes sociais

        .fromTo('.nav-social', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Spiderman texto

        .fromTo('.item-1', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Descrição

        .fromTo('.item-2', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Botões

        .fromTo('.item-3', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Playstation & Marvel logo

        .fromTo('.item-4', 0.7, 
        { y: 50, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=0.5')

        // Spiderman

        .fromTo('.item-5', 0.7, 
        { y: 70, opacity: 0,},
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
        }, '-=1.5')
})