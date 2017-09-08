/**
 * Created by Yy on 2017/7/10.
 */
var autoSetRem = (function (doc, win) {
    var docEl = doc.documentElement,
        done = false,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        set = function (paper) {
            if (paper == null) {
                paper = 375;
            }
            var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
            if(clientWidth <= 160){
                clientWidth = 160;
            }
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / paper) + 'px';
            done = true;
            return done;
        };
    return {
        set: set
    };
    //AbortifbrowserdoesnotsupportaddEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, set, false);
    doc.addEventListener('DOMContentLoaded', set, false);
})(document, window);

autoSetRem.set(375);