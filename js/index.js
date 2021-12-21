const expoxt_html_banner_1 = (banner) => {
    let html = ``;
    console.log(banner.img_index_1)
    html += `<a href="#"><img src="${banner.index.img_index_1}" alt=""></a>`
    return html;
}
const expoxt_html_banner_2 = (banner) => {
    let html = ``;
    html += `<a href="#"><img src="${banner.index.img_index_2}" alt=""  style="height: 242px;"></a>`
    return html;
}
const expoxt_html_banner_3 = (banner) => {
    let html = ``;
    html += `<a href="#"><img src="${banner.index.img_index_3}" alt="" style="width:100%"></a>`
    return html;
}