import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("DetailPage");
  }

  async getHtml() {
    return `
<body>
    <div class="prd-container">
      <div class="prd-img">
        <img id="main-img"
        src="https://img.mall.seconddoctor.co.kr/_data/product/202212/30/cabdbe73222e3562b30e9162cdf604dd.png"
        upfile1="https://img.mall.seconddoctor.co.kr/_data/product/202212/30/ac5f5fb35d2ae065372c222318254bfe.png"
        ">
      </div>
      <div class="info">
        <h3 class="name">
          [단품] 한입 클렌즈 주스 &amp; 단백질 스무디 주스 6종 선택
          <img
            src="https://img.mall.seconddoctor.co.kr/_data/icon/18a806eb3911e0faae32300d236a5728.png"
            align="absmiddle"
          />
        </h3>
        <p class="summary">한입 올바른스무디를 단품으로 구매할 수 있습니다.</p>
        <div class="price"></div>

        <table class="list">
          <colgroup>
            <col style="width: 30%" />
            <col />
          </colgroup>
          <tbody>
            <tr class="con-tr active">
              <th scope="row" class="price-name">판매가</th>
              <td class="consumer">
                <del><strong>5,000</strong>원</del>

                <span class="per style2">10%</span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="vtop price-name">할인가</th>
              <td>
                <div class="sell"><strong>4,500</strong>원</div>

                <div id="event-layer" class="event-layer">
                  <h2>할인내역</h2>
                  <div class="discount-info">
                    적립금, 할인쿠폰을 모두 적용한
                    <strong>최대 할인금액</strong>입니다.
                  </div>
                  <div class="discount-info2">
                    (쿠폰 다운로드 시 혜택적용을 받을 수 있습니다.)
                  </div>
                  <div style="padding-top: 10px">
                    <span class="subtitle first">총 할인액</span>
                    <span class="price-wrap first">
                      <span class="color price">0</span>원
                    </span>
                  </div>
                  <div>
                    <span class="subtitle">적립금</span>
                    <span class="price-wrap">
                      <span class="price">0</span>원
                    </span>
                  </div>

                  <div>
                    <span class="subtitle last">잔여 할인금액</span>
                    <span class="price-wrap">
                      <span class="price">0</span>원
                    </span>
                  </div>
                  <div class="close">
                    <a onclick="toggle_view('event_layer', this)"></a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">배송비</th>
              <td>4,000원</td>
            </tr>

            <tr>
              <th>고객 선호도</th>
              <td>
                <img
                  src="https://mall.seconddoctor.co.kr/_skin/mediplus_220929/img/common/detail_star_gray.png"
                /><img
                  src="https://mall.seconddoctor.co.kr/_skin/mediplus_220929/img/common/detail_star_gray.png"
                /><img
                  src="https://mall.seconddoctor.co.kr/_skin/mediplus_220929/img/common/detail_star_gray.png"
                /><img
                  src="https://mall.seconddoctor.co.kr/_skin/mediplus_220929/img/common/detail_star_gray.png"
                /><img
                  src="https://mall.seconddoctor.co.kr/_skin/mediplus_220929/img/common/detail_star_gray.png"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">수량</th>
              <td>
                <div class="box-qty">
                  <input
                    type="text"
                    name="buy_ea"
                    value="1"
                    class="form-input"
                    onkeyup="javascript:eaChg2();"
                    id="form_input"
                    isplaceholderinited="true"
                  />
                  <div class="btn-ea">
                    <a href="javascript:eaChg(1);" class="ea-up"></a>
                    <a href="javascript:eaChg(2);" class="ea-down"></a>
                  </div>
                </div>
              </td>
            </tr>
            <input type="hidden" name="option-necessary1" value="Y" />
            <input type="hidden" name="option-type1" value="2" />
            <input type="hidden" name="option-name1" value="스무디 단품" />
            <input type="hidden" name="option-prc1" value="0" />
            <input type="hidden" name="option-how-cal1" value="1" />
            <input type="hidden" name="option-sel-item1" value="" />
            <input type="hidden" name="option-ea-ck1" value="N" />
            <input type="hidden" name="option-ea-num1" value="" />
            <tr>
              <th scope="row">스무디 단품</th>
              <td>
                <select
                  name="option1"
                  onchange="optionCal(this.form,'1',this.value, this, '')"
                  data-necessary="Y"
                  data-type="2A"
                  data-name="스무디 단품"
                  class="wing-multi-option pno3965 necessary-Y"
                  data-pno="3965"
                >
                  <option value="">::스무디 단품::</option>
                  <option value="1. 빨간 스무디::0.00::0::4481::cpx0::">
                    1. 빨간 스무디
                  </option>
                  <option value="2. 노란 스무디::0.00::0::4483::cpx0::">
                    2. 노란 스무디
                  </option>
                  <option value="3. 그린 스무디::0.00::0::4485::cpx0::">
                    3. 그린 스무디
                  </option>
                  <option
                    value="4. 딸기 단백질 스무디::1000.00::0::4487::cpx0::"
                  >
                    4. 딸기 단백질 스무디(+1,000)
                  </option>
                  <option
                    value="5. 망고 단백질 스무디::1000.00::0::4489::cpx0::"
                  >
                    5. 망고 단백질 스무디(+1,000)
                  </option>
                  <option
                    value="6. 바나나샐러리 단백질 스무디::1000.00::0::4491::cpx0::"
                  >
                    6. 바나나샐러리 단백질 스무디(+1,000)
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btn">
          <button class="btn-add-cart" onclick="handleAddCart()">
            장바구니
          </button>
          <button class="btn-buy-now" onclick="handleBuyNow()">바로구매</button>
        </div>
      </div>
    </div>
    <img
      class="detail-img"
      src="https://img.mall.seconddoctor.co.kr/_data/attach/202212/30/f162731ead421aac180008b00cb7402e.png"
      alt="제품 이미지"
    />

    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script>
      function handleAddCart() {
        const addCartMessage = "장바구니에 추가되었습니다.";
        confirm(addCartMessage);
      }

      function handleBuyNow() {
        const buyNowMessage = "구매 페이지로 이동합니다.";
        confirm(buyNowMessage);
      }
    </script>
  </body>
      `;
  }
}