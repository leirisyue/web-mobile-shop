const expoxt_html_list_mobile = (listmobile) => {
    let html = ``;
    listmobile.forEach(item => {
        html += `              
                <div class="col-lg-3 col-md-4 col-sm-6 mobile_card">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src="${item.image_mini}" class="img_mobile"/>
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${item.Ten}</a></h6>
                            <h5>${item.Don_gia_Ban}</h5>
                        </div>
                    </div>
                </div>
                
                `
    })
    return html;
}



function Xuat_Danh_sach_Dien_thoai(Danh_sach, Th_Cha) {
    Th_Cha.innerHTML = ""
    Danh_sach.forEach(Dien_thoai => {
        var The_hien = document.createElement("div")
        The_hien.className = "col-lg-3 col-md-4 col-sm-6 mobile_card"

        var Noi_dung_HTML =
            // `
            // <img class="card-img-top" src="${Dien_thoai.image_mini}" alt="">
            // <div class="card-body">
            //     <p class="card-title text-primary">${Dien_thoai.Ten}</p>
            //     <p class="card-text text-danger">Giá:${Dien_thoai.Don_gia_Ban} đồng </p>
            //     Hệ điều hành: ${Dien_thoai.Nhom_Dien_thoai.Ma_so}
            // </div>
            // `

            `              
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src="${Dien_thoai.image_mini}" class="img_mobile"/>
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${Dien_thoai.Ten}</a></h6>
                            <h5>${Dien_thoai.Don_gia_Ban}</h5>
                        </div>
                    </div>
                
                `
        The_hien.innerHTML = Noi_dung_HTML
        Th_Cha.appendChild(The_hien)

        The_hien.onclick = () => {
            The_hien.classList.toggle("CHON")

        }

        Th_Thong_bao.innerHTML = `Tổng số sản phẩm ${Danh_sach.length} `
    })
}