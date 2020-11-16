import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

gsap.set("#quotations",{transformOrigin: "center"});
gsap.set("#quotation1",{transformOrigin: "center"});

export function Section3Animation() {
    var section3tl = gsap.timeline();

    section3tl.from("#quotation1", {
        x:20,
        scale: -20,
        duration: 3
        

    },"hey");

    // section3tl.from("#quotations", {
    //     rotate:360,
    //     duration: 0.3

    // });

    section3tl.from("#quotes", {
        duration: 0.3,
        alpha: -1

    }, "hey");


    return section3tl;
}
