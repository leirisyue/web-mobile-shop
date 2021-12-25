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
    Th_Thong_bao.innerHTML = `Không có sản phẩm phù hợp `
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
                            <h6>${Dien_thoai.Ten}</h6>
                            <h5>Giá: ${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)} đồng</h5>
                        </div>
                    </div>
                
                `
        The_hien.innerHTML = Noi_dung_HTML
        Th_Cha.appendChild(The_hien)

        The_hien.onclick = () => {
            The_hien.classList.toggle("CHON")

        }

        Th_Thong_bao.innerHTML = `Tổng số sản phẩm: ${Danh_sach.length} `
    })
}

function Tao_Chuoi_The_hien_So_nguyen_duong(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}