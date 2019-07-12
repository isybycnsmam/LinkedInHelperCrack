var _ = JSON.stringify(e);
var t = btoa(_);

return t = btoa(function (e) {
    for (var _ = "", t = e.length - 1; t >= 0; t--) 
        _ += e[t];
        return _
}(t));

t = t.substring(0, 10) + "X" + t.substring(10)


//RESULT IS BREAKED
//BY INSERTING 'X'
//INSIDE STRING
//AFTER 9 TH CHARACTER