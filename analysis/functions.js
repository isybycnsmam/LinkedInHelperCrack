function _generate_nude_str () {
    var e = {};
    e.dc = (new Date).getTime();
    e.ua = navigator.userAgent;
    e.rv = getRandomInt(0, Number.MAX_SAFE_INTEGER); 
    console.log(e);
    return this._encode_object(e);
    
}


function generate_public_key () {
    var e = this._generate_nude_str();
    this._save_nude(e), this.public_key = e;
    var _ = document.createEvent("CustomEvent");
    _.initCustomEvent(this.EVENT_PUBLIC_KEY_GENERATED, !0, !0, e), window.dispatchEvent(_)
}


function getRandomInt (from, to) {
    return Math.floor(Math.random() * (to - from)) + from
}