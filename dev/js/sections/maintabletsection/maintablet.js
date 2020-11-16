import {
    gsap
} from "gsap";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export function MaintabletAnimation() {
    var maintablettl = gsap.timeline();

    maintablettl.from("#innerline, #triangleright2outline, #triangleright3outline, #triangleright4outline, #triangleright5outline, #triangleright6outline, #triangleright7outline, #triangleright8outline, #triangleright9outline,#triangleleft9outline,#triangleleft8outline,#triangleleft7outline, #triangleleft6outline, #triangleleft5outline, #triangleleft4outline, #triangleleft3outline, #triangeleft2outline", {
        duration: 1,
        drawSVG: "50% 50%"

    });



    return maintablettl;
}