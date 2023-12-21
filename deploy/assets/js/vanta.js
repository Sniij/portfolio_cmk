window.onload = function() {

    VANTA.BIRDS({
        el: "#birds",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0xf00ff,
        color2: 0xf50000,
        birdSize: 1.10,
        cohesion: 28.00,
        quantity: 4.50,
        backgroundAlpha: 1
    })

    VANTA.BIRDS({
        el: "#birds2",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0xf00ff,
        color2: 0xf50000,
        birdSize: 1.50,
        cohesion: 28.00,
        quantity: 4.00,
        backgroundAlpha: 0
    })
}



