import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

gsap.set("#quotationmarkbig",{transformOrigin: "center"});

export function Section4Animation() {
    var section4tl = gsap.timeline();


    section4tl.from("#backgrlund", {
        duration: 0.2,
        alpha:-1
    
    });

    section4tl.from("#quotationmarksmall", {
        duration: 1,
        alpha:-1,
        scale: 10,
        ease: "back.out(1.7)"    
    
    });

    section4tl.from("#quotationmarkbig1", {
        duration: 1,
        alpha:-1,
        scale: 5,
        ease: "back.out(1.7)"    
    
    });

    section4tl.from("#Letter-A", {
        duration: 1,
        alpha:-1,
        x:200
    
    });

    
    // section4tl.to("#quotationmarkbig1", {
    //     duration: 1.5,
    //     morphSVG:"#Letter-A",
    //     rotate:1,
    //     x:350,
    //     y:-50
        

    // });

    section4tl.from("#titleoutline", {
        duration: 1,
        drawSVG: "50% 50%"

    }, "speed");

    section4tl.from("#titleinside", {
        duration: 1,
        alpha: -1

    });

    section4tl.from("#nameoutside", {
        duration: 1,
        drawSVG: "50% 50%"

    },"speed");

    section4tl.from("#nameinside", {
        duration: 1,
        alpha: -1

    });

 


    return section4tl;
}
