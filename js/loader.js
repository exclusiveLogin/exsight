import gl from "./global.js";
import Integrator from "./integrator.js";
import reloadProg from "./progresslogic.js";
import reloadProgPort from "./port_progresslogic.js";
import UtilClass from "./logic.js";
import Renderer from "./renderer";
import Loading from "./loading_pg";
import tbl2log from "./tbl2log";
import AN from "./nodes";

window.ProgressBar = require("progressbar.js");
//CSS loader section
require("../style/main.css");
require("../style/port.css");
require("../style/nodes.css");
require("../style/respark.css");
require("../style/animation.css");
require("../style/progress.css");
require("../style/gas.css");
require("../style/railgas.css");
require("../style/about.css");
//--------------------------

window.Highcharts = require("highcharts");
window.Utility = new UtilClass();
window.Utility.Renderer = Renderer;

//temporary adapter
window.panelStateToggle = window.Utility.panelStateToggle;
window.trendToggle = window.Utility.trendToggle;
window.loginToggle = window.Utility.loginToggle;
window.resultToggle = window.Utility.resultToggle;
window.refreshLog = window.Utility.refreshLog;
window.connectionState = window.Utility.connectionState;
window.renderFancy = window.Utility.renderFancy;
window.toggleFancy = window.Utility.toggleFancy;
window.refreshTooltips = window.Utility.refreshTooltips;
window.nativeTooltipHandler = window.Utility.nativeTooltipHandler;
window.visit = window.Utility.visit;
window.adaptWin = window.Utility.adaptWin;
window.getNode = window.Utility.getNode;

window.userEnter = window.Utility.userEnter;
window.showSysMsg = window.Utility.showSysMsg;
window.stateRefresher = window.Utility.stateRefresher;

window.LoadingPGClass = Loading;
window.Tbl2log = tbl2log;
//-----------------------------------
window.Global = gl;
window.reloadProgressBar = reloadProg;
window.reloadProgressBarPort = reloadProgPort;

if(Integrator && gl){
    window.Integrator = Integrator;

    window.Global.IntegratorForArrows1 = new Integrator();
    window.Global.IntegratorForArrows2 = new Integrator();
    window.Global.IntegratorForArrows3 = new Integrator();
    window.Global.IntegratorForArrows4 = new Integrator();
    window.Global.IntegratorForArrows5 = new Integrator();
    window.Global.IntegratorForArrows6 = new Integrator();
    window.Global.IntegratorForArrows7 = new Integrator();
    window.Global.IntegratorForArrows8 = new Integrator();
    window.Global.IntegratorForArrows9 = new Integrator();
    window.Global.IntegratorForArrows10 = new Integrator();
    window.Global.IntegratorForArrows11 = new Integrator();
    window.Global.IntegratorForArrows12 = new Integrator();
    window.Global.IntegratorForArrows13 = new Integrator();
    window.Global.IntegratorForArrows14 = new Integrator();
    window.Global.IntegratorForArrows15 = new Integrator();
    window.Global.IntegratorForArrows16 = new Integrator();
    window.Global.IntegratorForArrows17 = new Integrator();
    window.Global.IntegratorForArrows18 = new Integrator();
    window.Global.IntegratorForArrows19 = new Integrator();
    window.Global.IntegratorForArrows20 = new Integrator();

    window.Global.IntegratorForArrows51 = new Integrator();
    window.Global.IntegratorForArrows52 = new Integrator();
    window.Global.IntegratorForArrows53 = new Integrator();
    window.Global.IntegratorForArrows54 = new Integrator();
    window.Global.IntegratorForArrows55 = new Integrator();
    window.Global.IntegratorForArrows56 = new Integrator();

    window.Global.IntegratorForArrows69 = new Integrator();
    window.Global.IntegratorForArrows70 = new Integrator();
    window.Global.IntegratorForArrows71 = new Integrator();
    window.Global.IntegratorForArrows72 = new Integrator();
    window.Global.IntegratorForArrows73 = new Integrator();

    window.Global.IntegratorForArrows1.setFilter(5,5);
    window.Global.IntegratorForArrows2.setFilter(5,5);
    window.Global.IntegratorForArrows3.setFilter(5,5);
    window.Global.IntegratorForArrows4.setFilter(5,5);
    window.Global.IntegratorForArrows5.setFilter(5,5);
    window.Global.IntegratorForArrows6.setFilter(5,5);
    window.Global.IntegratorForArrows7.setFilter(5,5);
    window.Global.IntegratorForArrows8.setFilter(5,5);
    window.Global.IntegratorForArrows9.setFilter(5,5);
    window.Global.IntegratorForArrows10.setFilter(5,5);
    window.Global.IntegratorForArrows11.setFilter(5,5);
    window.Global.IntegratorForArrows12.setFilter(5,5);
    window.Global.IntegratorForArrows13.setFilter(5,5);
    window.Global.IntegratorForArrows14.setFilter(5,5);
    window.Global.IntegratorForArrows15.setFilter(5,5);
    window.Global.IntegratorForArrows16.setFilter(5,5);
    window.Global.IntegratorForArrows17.setFilter(5,5);
    window.Global.IntegratorForArrows18.setFilter(5,5);
    window.Global.IntegratorForArrows19.setFilter(5,5);
    window.Global.IntegratorForArrows20.setFilter(5,5);

    window.Global.IntegratorForArrows51.setFilter(5,5);
    window.Global.IntegratorForArrows52.setFilter(5,5);
    window.Global.IntegratorForArrows53.setFilter(5,5);
    window.Global.IntegratorForArrows54.setFilter(5,5);
    window.Global.IntegratorForArrows55.setFilter(5,5);
    window.Global.IntegratorForArrows56.setFilter(5,5);

    window.Global.IntegratorForArrows69.setFilter(5,5);
    window.Global.IntegratorForArrows70.setFilter(5,5);
    window.Global.IntegratorForArrows71.setFilter(5,5);
    window.Global.IntegratorForArrows72.setFilter(5,5);
    window.Global.IntegratorForArrows73.setFilter(5,5);

    window.Global.IntegratorCon = true;
}
window.AstridNode = AN;