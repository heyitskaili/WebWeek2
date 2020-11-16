import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#Everything",{transformOrigin: "center"});

export function LogoAnimation() {
    var logotl = gsap.timeline();
    logotl.from("#triangle1outline,#triangle2outline, #triangle3outline,#triangle4outline", {
        duration: 1,
        drawSVG: "50% 50%"
        
    });



    return logotl;
}