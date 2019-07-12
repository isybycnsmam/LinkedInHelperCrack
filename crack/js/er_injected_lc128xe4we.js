/**
 * Created by erinsasha on 12/11/17.
 */

var req = new XMLHttpRequest;
var js_code, css;

req.open("GET", chrome.extension.getURL("/js/er_inj_lc128xe4we.js"), !0);
req.onreadystatechange = function() {
    if(4 === req.readyState && (200 === req.status))
    {
        js_code = req.responseText;
    }
};
req.send();

var req_css = new XMLHttpRequest;
req_css.open("GET", chrome.extension.getURL("/styles/er_inj_lc128xe4we.css"), !0);
req_css.onreadystatechange = function() {
    if(4 === req_css.readyState && (200 === req_css.status))
    {
        css = req_css.responseText;
    }
};
req_css.send();

function er_init() {
    if(document.head && js_code && css) {
        var meta = document.createElement('meta');
        meta.setAttribute("er_lc128xe4we_id", chrome.runtime.id);
        document.head.appendChild(meta);

        var ergulpvvv = 'ael'+Math.floor((Math.random() * 1000) + 1);

        js_code = js_code.replace(new RegExp('ergulpvvv', 'g'), ergulpvvv);
        css = css.replace(new RegExp('ergulpvvv', 'g'), ergulpvvv);

        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));

        head.appendChild(style);

        var script = document.createElement('script');
        script.appendChild(document.createTextNode(js_code));
        script.id = 'radar-cedexis-'+ergulpvvv;
        head.appendChild(script);
    } else {
        setTimeout(er_init, 100);
    }
}
er_init();