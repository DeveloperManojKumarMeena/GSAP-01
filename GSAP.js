function section1(){
    var tml=  gsap.timeline();
tml.from("nav h1 , nav li, nav button",{
    y:-100,
    opacity:0,
    duration:0.6,
    delay:0.3,
    stagger:0.3
})
tml.from(".part1 h1 , .part1 p,.part1 button",{
    x:-200,
    opacity:0,
    delay:0.3,
    stagger:0.3
})
tml.from(".part2 img",{
    x:200,
    opacity:0,
    delay:0.3,
    stagger:0.3
},"-=1")
tml.from("#brandlogo img",{
    scale:0,
     delay:0.3,
    stagger:0.1,
     duration:0.6,
})
}
section1()
var tml2 = gsap.timeline({
    scrollTrigger:{ 
        trigger:"#section2",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 20%", 
        scrub:3
    }
});

tml2.from("#section2 .headline",{
    x:-200,
    opacity:0,
    duration:0.6
});

tml2.from("#card1",{
    x:-200,
    opacity:0,
    duration:0.6
},"ani");
tml2.from("#card2",{
    x:200,
    opacity:0,
    duration:0.6
},"ani");

tml2.from("#card3",{
    x:-200,
    opacity:0,
    duration:0.6
},"manoj");tml2.from("#card4",{
    x:200,
    opacity:0,
    duration:0.6
},"manoj");