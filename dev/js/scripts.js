import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

// import { DrawSVGPlugin } from "./sections/logosection/logo.js";
// gsap.registerPlugin(DrawSVGPlugin);

import {Section2Animation} from "./sections/section-2/section2.js"
import {Section3Animation} from "./sections/section-3/section3.js"
// import {MaintabletAnimation} from "./sections/maintabletsection/maintablet.js"



const mainTL = gsap.timeline();
mainTL.add(Section2Animation());
mainTL.add(Section3Animation());
// mainTL.add(MaintabletAnimation());



GSDevTools.create();