import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";
import anime from "https://cdn.skypack.dev/animejs@3.2.1";


window.addEventListener("load", function() {
    var loading = document.getElementById("loading");

    const test = new Letterize({
        targets: ".animate-me"
    });
    
    const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
            grid: [test.list[0].length, test.list.length],
            from: "center"
        }),
        loop: true,
        duratiom: 3000
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
        loading.style.display = "none"; // 3초 후에 애니메이션 정지
    }, 10000);
});