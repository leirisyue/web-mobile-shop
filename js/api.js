const address = "https://app-js-thuy.herokuapp.com";
const api_listmobile = () => {
    let url = "mobile";
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `${address}/${url}`, false);
    xmlhttp.send();
    return JSON.parse(xmlhttp.responseText.trim());
}
const api_getbanner = () => {
    let url = "banner";
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `${address}/${url}`, false);
    xmlhttp.send();
    return JSON.parse(xmlhttp.responseText.trim());
}
const api_gettv = () => {
    let url = "television";
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `${address}/${url}`, false);
    xmlhttp.send();
    return JSON.parse(xmlhttp.responseText.trim());
}

function apiDanhsachDienthoaiCallback(Ham_sau_khi_Xu_ly) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
        var Chuoi_JSON = Xu_ly_HTTP.responseText
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON)
        Ham_sau_khi_Xu_ly(Du_lieu)
    }
    let url = "mobile";
    var Dia_chi_Xu_ly = `${address}/${url}`
    Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
    Xu_ly_HTTP.send()
}

function apiDanhsachTVCallback(Ham_sau_khi_Xu_ly) {
    var Du_lieu = {};
    var Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.onload = () => {
        var Chuoi_JSON = Xu_ly_HTTP.responseText
        if (Chuoi_JSON != "")
            Du_lieu = JSON.parse(Chuoi_JSON)
        Ham_sau_khi_Xu_ly(Du_lieu)
    }
    let url = "television";
    var Dia_chi_Xu_ly = `${address}/${url}`
    Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
    Xu_ly_HTTP.send()
}