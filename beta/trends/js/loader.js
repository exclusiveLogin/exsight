import gl from "./global.js";
import UtilClass from "./logic.js";
import Blink from "./blink.js"

require("../style/style.css");

window.Highcharts = require("highcharts");

window.Utility = new UtilClass();

window.Global = gl;
window.Blink = Blink;