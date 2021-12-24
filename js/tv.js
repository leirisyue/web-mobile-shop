const expoxt_html_list_tv = (listmobile) => {
    let html = ``;
    listmobile.forEach(item => {
        html += `              
                <div class="col-lg-3 col-md-4 col-sm-6 mobile_card">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src="${item.image}" class="img_mobile"/>
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