import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from "https://cdn.skypack.dev/animejs@3.2.1";

window.addEventListener("load", async function() {

    var load = document.getElementById("loading");


    const test = new Letterize({
        targets: ".animate-me"
        });

    const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
            grid: [test.list[0].length, test.list.length],
            from: "center"
        }),
        loop: true
    });
    
    animation
    .add({
        scale: 0.5
    })
    .add({
        letterSpacing: "10px"
    })
    .add({
        scale: 1
    })
    .add({
        letterSpacing: "6px"
    });
    setTimeout(function() {
        load.style.display = "none";
    }, 7000);
});