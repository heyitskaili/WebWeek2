import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

// gsap.set("#quotations",{transformOrigin: "center"});
// gsap.set("#quotation1",{transformOrigin: "center"});

export function Section2Animation() {
    var section2tl = gsap.timeline();

    section2tl.from("#section2quotations", {
        x:20,
        scale: -20,
        duration: 3
        

    },"hey");



    return section2tl;
}
