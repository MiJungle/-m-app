import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Landing");
  }

  async getHtml() {
    return `
<body>
        <div id="header">
        <div class="gnb">
            <div class="wrap-inner">
                <h1 class="logo"><img src="https://mall.seconddoctor.co.kr/_skin/mediplus_220929/img/logo/sd_logo.png" alt="세컨드닥터몰"></h1>
                <img src="https://img.mall.seconddoctor.co.kr/_data/banner/ce3a5ef429888641c30fdfbe4b9c8325.jpg">
                    <div class="menu">
                        <input id="name" placeholder="name" type="text">
                        <input id="email" placeholder="email" type="email">
                        <button class="login" onclick="sendEmail()">로그인</button>
                        <a href="/login" class="nav__link" data-link><button class="login" onclick="sendEmail()">로그인 페이지로 이동</button></a>
                    </div>
                    <div class="menu">
                        <input id="search" type="text" placeholder="검색어를 입력해주세요">
                        <button class="search"  onclick="handleSearch()">검색</button>
                    </div>
            </div>
        </div>
    </div>
        <div class="items">
            <div class="info">
                <img class="item" src="https://img.mall.seconddoctor.co.kr/_data/product/202212/30/cabdbe73222e3562b30e9162cdf604dd.png">
                <p class="name"> <a href="/dp">[단품] 한입 클렌즈 주스 &amp; 단백...</a></p>
                <div class="summary">한입 올바른스무디를 단품으로 구매할 수 있습니다.</div>
                <div class="price">
                    <span class="consumer">5,000원</span>
                    <span class="sell"><strong>4,500원 </strong></span>
                </div>
                <div class="icon"><img src="https://img.mall.seconddoctor.co.kr/_data/icon/18a806eb3911e0faae32300d236a5728.png" align="absmiddle"></div>
            </div>
            <div class="info">
                <img class="item" src="https://img.mall.seconddoctor.co.kr/_data/product/202207/14/fc5bf2b502a84db9d83d38235fc3bcd8.jpg"/>
                <p class="name"> <a href="https://mall.seconddoctor.co.kr/shop/detail.php?pno=5D2C2CEE8AB0B9A36BD1ED7196BD6C4A&amp;rURL=https%3A%2F%2Fmall.seconddoctor.co.kr%2F&amp;ctype=1&amp;cno1=1042">[풀무원]디자인밀 밸런스핏in소스...</a></p>
                <div class="summary">촉촉한 닭가슴살과 풍미 가득 소스!<br>
                    두 가지의 특별한 만남의 단백질 보충 간식!</div>
                <div class="price"><span class="sell sell"><strong>40,000원 </strong></span></div>
                <div class="icon"><img src="https://img.mall.seconddoctor.co.kr/_data/icon/18a806eb3911e0faae32300d236a5728.png" align="absmiddle"></div>
            </div>
            <div class="info">
                <img class="item" src="https://img.mall.seconddoctor.co.kr/_data/product/202207/14/01cbb1727829cf7c60071b1a9c8cdbff.jpg">
                <p class="name"> <a href="https://mall.seconddoctor.co.kr/shop/detail.php?pno=471C50AD1A156D7256EDDFD747D77931&amp;rURL=https%3A%2F%2Fmall.seconddoctor.co.kr%2F&amp;ctype=1&amp;cno1=1042">[풀무원]디자인밀 매일배송 칼로...</a></p>
                <div class="summary">신선한 채소, 영양 가득한 토핑을 곁들인<br>
                    요리형 샐러드Meal!</div>
                <div class="price"><span class="sell sell"><strong>37,500원 </strong></span></div>
                <div class="icon"><img src="https://img.mall.seconddoctor.co.kr/_data/icon/18a806eb3911e0faae32300d236a5728.png" align="absmiddle"></div>
            </div>
            <div class="info">
                <img class="item" src="https://img.mall.seconddoctor.co.kr/_data/product/202207/14/d5e40d223e58374af0a539cb288a8715.jpg">
                <p class="name"> <a href="https://mall.seconddoctor.co.kr/shop/detail.php?pno=3D324C2883882B15FA8FBE8F025A3A99&amp;rURL=https%3A%2F%2Fmall.seconddoctor.co.kr%2F&amp;ctype=1&amp;cno1=1042">[풀무원]디자인밀 밸런스도시락 ...</a></p>
                <div class="summary">일상 속 한끼 밸런스,<br>
                    간편하게 즐길 수 있는 밸런스 도시락</div>
                <div class="price"><span class="sell sell"><strong>37,500원 </strong></span></div>
                <div class="icon"><img src="https://img.mall.seconddoctor.co.kr/_data/icon/18a806eb3911e0faae32300d236a5728.png" align="absmiddle"></div>
            </div>
</div>

    </div>
    </div>
    </body>
      `;
  }
}
