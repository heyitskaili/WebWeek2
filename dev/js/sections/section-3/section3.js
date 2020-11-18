import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathHelper,MotionPathPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

// gsap.set("#section3quotations",{transformOrigin: "center"});

export function Section3Animation() {
    var section3tl = gsap.timeline();

    section3tl.from("#Fill-26", {
        duration: 1,
        scale: 10
        // motionPath:{
        //     Path:"#Path6section3path",
        //     align:"#Path6section3path"
        // } 

    },"speed1");

    // section3tl.from("#Fill-14", {
    //     duration: 1,
    //     scale: 10
    //     // y:1000,
    //     // startAt:{y:200}
    //     // // x:500,
    //     // // startAt:{X:-20}
    //     // // ease: "back.out(1.7)",
    //     // // stagger:1
        

    // },"speed1");




    return section3tl;
}
