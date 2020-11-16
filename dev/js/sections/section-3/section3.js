import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

// gsap.set("#access-granted-bar",{transformOrigin: "center"});
// gsap.set("#disappear",{transformOrigin: "center"});

export function Section3Animation() {
    var section3tl = gsap.timeline();

    section3tl.from("#quotations", {
        duration: 0.3,
        alpha: -1

    });

    section3tl.from("#quotes", {
        duration: 0.3,
        alpha: -1

    });


    return section3tl;
}
