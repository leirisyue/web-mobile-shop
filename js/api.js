const address = "http://localhost:8085";
const api_listmobile = () => {
    let url = "mobile";
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", `${address}/${url}`, false);
    xmlhttp.send();
    return JSON.parse(xmlhttp.responseText.trim());
}