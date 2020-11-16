import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

// import { DrawSVGPlugin } from "./sections/logosection/logo.js";
// gsap.registerPlugin(DrawSVGPlugin);

// import {LogoAnimation} from "./sections/logosection/logo.js"
import {Section3Animation} from "./sections/section-3/section3.js"
// import {MaintabletAnimation} from "./sections/maintabletsection/maintablet.js"



const mainTL = gsap.timeline();
// mainTL.add(LogoAnimation());
mainTL.add(Section3Animation());
// mainTL.add(MaintabletAnimation());



GSDevTools.create();