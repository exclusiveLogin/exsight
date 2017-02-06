import gl from "./global.js";
import Integrator from "./integrator.js";
import reloadProg from "./progresslogic.js";
import detect from "./detect.js";
import {trendToggle,loginToggle,resultToggle,refreshLog,connectionState,renderFancy,toggleFancy,refreshTooltips} from "./logic.js";

window.trendToggle = trendToggle;
window.loginToggle = loginToggle;
window.resultToggle = resultToggle;
window.refreshLog = refreshLog;
window.connectionState = connectionState;
window.renderFancy = renderFancy;
window.toggleFancy = toggleFancy;
window.refreshTooltips = refreshTooltips;

window.Global = gl;
window.reloadProgressBar = reloadProg;
if(Integrator && gl){
    window.Integrator = Integrator;

    Global.IntegratorForArrows1 = new Integrator();
    Global.IntegratorForArrows2 = new Integrator();
    Global.IntegratorForArrows3 = new Integrator();
    Global.IntegratorForArrows4 = new Integrator();
    Global.IntegratorForArrows5 = new Integrator();
    Global.IntegratorForArrows6 = new Integrator();
    Global.IntegratorForArrows7 = new Integrator();
    Global.IntegratorForArrows8 = new Integrator();
    Global.IntegratorForArrows9 = new Integrator();
    Global.IntegratorForArrows10 = new Integrator();
    Global.IntegratorForArrows11 = new Integrator();
    Global.IntegratorForArrows12 = new Integrator();
    Global.IntegratorForArrows13 = new Integrator();
    Global.IntegratorForArrows14 = new Integrator();
    Global.IntegratorForArrows15 = new Integrator();
    Global.IntegratorForArrows16 = new Integrator();
    Global.IntegratorForArrows17 = new Integrator();
    Global.IntegratorForArrows18 = new Integrator();
    Global.IntegratorForArrows19 = new Integrator();
    Global.IntegratorForArrows20 = new Integrator();

    Global.IntegratorForArrows51 = new Integrator();
    Global.IntegratorForArrows52 = new Integrator();
    Global.IntegratorForArrows53 = new Integrator();
    Global.IntegratorForArrows54 = new Integrator();
    Global.IntegratorForArrows55 = new Integrator();
    Global.IntegratorForArrows56 = new Integrator();

    Global.IntegratorForArrows69 = new Integrator();
    Global.IntegratorForArrows70 = new Integrator();
    Global.IntegratorForArrows71 = new Integrator();
    Global.IntegratorForArrows72 = new Integrator();
    Global.IntegratorForArrows73 = new Integrator();

    Global.IntegratorForArrows1.setFilter(2,2);
    Global.IntegratorForArrows2.setFilter(2,2);
    Global.IntegratorForArrows3.setFilter(2,2);
    Global.IntegratorForArrows4.setFilter(2,2);
    Global.IntegratorForArrows5.setFilter(2,2);
    Global.IntegratorForArrows6.setFilter(2,2);
    Global.IntegratorForArrows7.setFilter(2,2);
    Global.IntegratorForArrows8.setFilter(2,2);
    Global.IntegratorForArrows9.setFilter(2,2);
    Global.IntegratorForArrows10.setFilter(2,2);
    Global.IntegratorForArrows11.setFilter(2,2);
    Global.IntegratorForArrows12.setFilter(2,2);
    Global.IntegratorForArrows13.setFilter(2,2);
    Global.IntegratorForArrows14.setFilter(2,2);
    Global.IntegratorForArrows15.setFilter(2,2);
    Global.IntegratorForArrows16.setFilter(2,2);
    Global.IntegratorForArrows17.setFilter(2,2);
    Global.IntegratorForArrows18.setFilter(2,2);
    Global.IntegratorForArrows19.setFilter(2,2);
    Global.IntegratorForArrows20.setFilter(2,2);

    Global.IntegratorForArrows51.setFilter(2,2);
    Global.IntegratorForArrows52.setFilter(2,2);
    Global.IntegratorForArrows53.setFilter(2,2);
    Global.IntegratorForArrows54.setFilter(2,2);
    Global.IntegratorForArrows55.setFilter(2,2);
    Global.IntegratorForArrows56.setFilter(2,2);

    Global.IntegratorForArrows69.setFilter(2,2);
    Global.IntegratorForArrows70.setFilter(2,2);
    Global.IntegratorForArrows71.setFilter(2,2);
    Global.IntegratorForArrows72.setFilter(2,2);
    Global.IntegratorForArrows73.setFilter(2,2);

    Global.IntegratorCon = true;
}
if(navigator)Global.UA = detect.parse(navigator.userAgent);