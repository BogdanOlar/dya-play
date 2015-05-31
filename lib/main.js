var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*.youtube.com",
    contentScriptFile: data.url("clearAutorun.js")
});