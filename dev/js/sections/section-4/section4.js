import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

gsap.set("#quotations",{transformOrigin: "center"});

export function Section4Animation() {
    var section4tl = gsap.timeline();

    
    section4tl.to("#Fill-2", {
        duration: 3,
        morphSVG:"section4quotationmark"

    },"hey");

    section4tl.to("#titleoutline", {
        duration: 3,
        drawSVG: "50% 50%"

    },"hey");



    return section4tl;
}
