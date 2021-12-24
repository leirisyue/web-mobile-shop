const address = "http://localhost:8085";
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