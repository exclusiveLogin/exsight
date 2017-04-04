import gl from "./global.js";
import Integrator from "./integrator.js";
import reloadProg from "./progresslogic.js";
import UtilClass from "./logic.js";
import Blink from "./blink.js"
window.ProgressBar = require("progressbar.js");

require("../style/dark.css");
require("../style/progress.css");
window.Highcharts = require("highcharts");

window.Utility = new UtilClass();

//temporary adapter
window.panelStateToggle = Utility.panelStateToggle;
window.trendToggle = Utility.trendToggle;
window.loginToggle = Utility.loginToggle;
window.resultToggle = Utility.resultToggle;
window.refreshLog = Utility.refreshLog;
window.connectionState = Utility.connectionState;
window.renderFancy = Utility.renderFancy;
window.toggleFancy = Utility.toggleFancy;
window.refreshTooltips = Utility.refreshTooltips;

window.userEnter = Utility.userEnter;
window.showSysMsg = Utility.showSysMsg;
window.stateRefresher = Utility.stateRefresher;
//-----------------------------------
window.Global = gl;
window.reloadProgressBar = reloadProg;
window.Blink = Blink;

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

    Global.IntegratorForArrows1.setFilter(5,5);
    Global.IntegratorForArrows2.setFilter(5,5);
    Global.IntegratorForArrows3.setFilter(5,5);
    Global.IntegratorForArrows4.setFilter(5,5);
    Global.IntegratorForArrows5.setFilter(5,5);
    Global.IntegratorForArrows6.setFilter(5,5);
    Global.IntegratorForArrows7.setFilter(5,5);
    Global.IntegratorForArrows8.setFilter(5,5);
    Global.IntegratorForArrows9.setFilter(5,5);
    Global.IntegratorForArrows10.setFilter(5,5);
    Global.IntegratorForArrows11.setFilter(5,5);
    Global.IntegratorForArrows12.setFilter(5,5);
    Global.IntegratorForArrows13.setFilter(5,5);
    Global.IntegratorForArrows14.setFilter(5,5);
    Global.IntegratorForArrows15.setFilter(5,5);
    Global.IntegratorForArrows16.setFilter(5,5);
    Global.IntegratorForArrows17.setFilter(5,5);
    Global.IntegratorForArrows18.setFilter(5,5);
    Global.IntegratorForArrows19.setFilter(5,5);
    Global.IntegratorForArrows20.setFilter(5,5);

    Global.IntegratorForArrows51.setFilter(5,5);
    Global.IntegratorForArrows52.setFilter(5,5);
    Global.IntegratorForArrows53.setFilter(5,5);
    Global.IntegratorForArrows54.setFilter(5,5);
    Global.IntegratorForArrows55.setFilter(5,5);
    Global.IntegratorForArrows56.setFilter(5,5);

    Global.IntegratorForArrows69.setFilter(5,5);
    Global.IntegratorForArrows70.setFilter(5,5);
    Global.IntegratorForArrows71.setFilter(5,5);
    Global.IntegratorForArrows72.setFilter(5,5);
    Global.IntegratorForArrows73.setFilter(5,5);

    Global.IntegratorCon = true;
}