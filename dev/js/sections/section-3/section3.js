import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

gsap.set("#demo-1",{transformOrigin: "center", xPercent: -50, yPercent: -50});

const section3tl = gsap.timeline();

export function Section3Animation() {
    

    section3tl.from("#demo-1", {
        duration: 1,
        scale: 3,
        motionPath: {
            path:"#Path20section3path",
            align:"#Path20section3path"
        } 

    });




    return section3tl;
}
