function LazerCheckout({email:e="",amount:t=0,name:n="",coin:i="",currency:o="",logo:a="",key:r="",reference:s="",acceptPartialPayment:l=!1,onSuccess:c,onClose:d,onError:p,paymentLinkId:m,paymentButtonId:h}){const f=r?.includes("test"),u="https://api.lazerpay.engineering/api/v1/coins",g="https://api.lazerpay.engineering/api/v1/transaction/initialize",x="https://api.lazerpay.engineering/api/v1/transaction/verify",y=e=>(.01*parseFloat(e||t)).toFixed(2);var z=parseFloat(t)+parseFloat(y());let C=null;const v=e=>parseFloat(Number(e))?(""+e).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):"0.00";let b=document.createElement("div"),w=document.createElement("section"),L=document.createElement("div");const E=`
    @font-face {
      font-family: "proxima";
      font-style: normal;
      font-weight: 400;
      font-stretch: normal;
      src: url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/lazer-font@main/fonts/proxima/ProximaNovaA-Regular.woff2') format('woff2'), 
           url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/lazer-font@main/fonts/proxima/ProximaNovaA-Regular.woff') format('woff');
    }
    
    @font-face {
      font-family: "proxima";
      font-style: normal;
      font-weight: 500;
      font-stretch: normal;
      src: url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/lazer-font@main/fonts/proxima/ProximaNovaA-Semibold.woff2') format('woff2'), 
           url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/lazer-font@main/fonts/proxima/ProximaNovaA-Semibold.woff') format('woff');
    }
    
    @font-face {
      font-family: "proxima";
      font-style: normal;
      font-weight: 700;
      font-stretch: normal;
      src: url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/lazer-font@main/fonts/proxima/ProximaNovaA-Bold.woff2') format('woff2'), 
           url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/lazer-font@main/fonts/proxima/ProximaNovaA-Bold.woff') format('woff');
    }
  `;function k(e){return function(){if(!document.querySelector('style[title="__LazerpayStyle__"]')){const e=document.createElement("style");e.title="__LazerpayStyle__",e.appendChild(document.createTextNode(E)),document.head.appendChild(e)}}(),`
      ${f?'<div class="Lazer-dev-env">TestNet</div>':""}
        <div class="LazerCheckout-body">
          <div class="LazerCheckout-container-header-wrapper">
              <div class="LazerCheckout-logo">
                ${e.logo?`<div class="vendor-cover-logo">
                        <img src=${e.logo} alt="wallet-img">
                      </div>`:`
                    <svg class="logo-svg" width="348" height="60" viewBox="0 0 348 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.1319 0H64.1946V47.4804H96.5214V38.8733H73.1319V0Z" fill="#125BC9"/>
                      <path d="M123.818 16.1122C123.209 15.5193 122.553 14.9759 121.857 14.4873C120.785 13.763 119.634 13.1629 118.426 12.6986C116.894 12.1173 115.266 11.8326 113.627 11.8599C111.394 11.8424 109.182 12.2882 107.13 13.1692C105.154 14.0277 103.374 15.2808 101.899 16.8516C100.362 18.5091 99.1703 20.4552 98.3918 22.577C96.7084 27.3817 96.7084 32.6161 98.3918 37.4208C99.171 39.5432 100.363 41.4901 101.899 43.1491C103.374 44.7187 105.154 45.9707 107.13 46.8286C109.182 47.7109 111.394 48.1568 113.627 48.1379C115.272 48.1645 116.906 47.8665 118.435 47.2612C119.656 46.7727 120.812 46.1356 121.878 45.3644C122.572 44.8444 123.221 44.2666 123.818 43.6371V47.4774H132.098V12.5174H123.818V16.1122ZM121.334 37.8709C119.674 39.6537 117.584 40.5187 114.945 40.5187C112.128 40.5187 109.942 39.642 108.258 37.868C106.575 36.0939 105.742 33.449 105.742 30.0004C105.742 26.5517 106.59 23.9009 108.258 22.1298C109.927 20.3587 112.128 19.479 114.945 19.479C117.576 19.479 119.674 20.3558 121.334 22.1298C122.994 23.9038 123.818 26.5488 123.818 30.0004C123.818 33.4519 122.982 36.0998 121.334 37.8709Z" fill="#125BC9"/>
                      <path d="M164.708 19.7158V12.5175H136.666V20.1366H153.877L136.006 40.282V47.4804H165.369V39.8612H146.84L164.708 19.7158Z" fill="#125BC9"/>
                      <path d="M197.748 17.1001C196.114 15.4735 194.186 14.1722 192.067 13.2656C189.865 12.3379 187.5 11.86 185.111 11.86C182.722 11.86 180.357 12.3379 178.155 13.2656C176.036 14.1716 174.109 15.4729 172.476 17.1001C170.842 18.7479 169.55 20.7039 168.677 22.8546C166.85 27.4422 166.85 32.5557 168.677 37.1432C169.55 39.2939 170.842 41.2499 172.476 42.8977C174.11 44.5253 176.038 45.8266 178.158 46.7322C180.351 47.6699 182.714 48.1483 185.099 48.1379C186.655 48.1493 188.208 47.9895 189.729 47.6616C191.051 47.3751 192.34 46.951 193.575 46.3961C194.655 45.9077 195.674 45.2936 196.611 44.5665C197.421 43.9297 198.193 43.2467 198.923 42.5207C200.478 40.8713 201.708 38.9439 202.55 36.8392L202.93 35.904H194.297L194.095 36.2138C193.546 37.0468 192.854 37.7752 192.049 38.3648C191.213 39.0127 190.277 39.52 189.278 39.867C187.935 40.3315 186.52 40.5522 185.099 40.5188C183.977 40.5221 182.862 40.3353 181.802 39.9664C179.671 39.2155 177.89 37.7072 176.799 35.7286C176.323 34.8654 175.964 33.9424 175.732 32.9843H202.912V30.0004C202.93 27.5517 202.465 25.1236 201.545 22.8546C200.672 20.7041 199.382 18.7481 197.748 17.1001ZM176.103 26.014C176.341 25.2094 176.684 24.4399 177.123 23.7256C177.677 22.8291 178.392 22.0424 179.231 21.405C180.065 20.773 181 20.285 181.995 19.9613C182.998 19.6384 184.046 19.4757 185.099 19.4791C187.468 19.4188 189.774 20.2394 191.573 21.7821C192.324 22.4355 192.939 23.2298 193.385 24.1201C193.693 24.7341 193.943 25.376 194.13 26.0373L176.103 26.014Z" fill="#125BC9"/>
                      <path d="M220.056 12.9354C218.995 13.5209 217.995 14.2122 217.072 14.9987C216.599 15.4225 216.163 15.886 215.769 16.384V12.5175H207.489V47.4804H215.769V28.4631C215.752 27.2281 215.97 26.0012 216.412 24.8478C216.805 23.832 217.414 22.9129 218.195 22.1532C218.978 21.4076 219.899 20.821 220.907 20.426C221.993 20.0074 223.148 19.7982 224.311 19.8093H229.28V11.8599H224.642C223.046 11.8158 221.466 12.1863 220.056 12.9354Z" fill="#125BC9"/>
                      <path d="M263.381 16.8487C261.909 15.2817 260.134 14.0299 258.164 13.1692C256.111 12.288 253.898 11.8422 251.664 11.8599C250.014 11.8267 248.372 12.1125 246.83 12.7016C245.634 13.1699 244.494 13.7698 243.431 14.4902C242.738 14.9803 242.083 15.5225 241.473 16.1122V12.5175H233.184V59.9978H241.461V43.9236C242.065 44.5311 242.722 45.0846 243.422 45.5778C244.484 46.2949 245.627 46.8835 246.827 47.3313C248.372 47.8952 250.008 48.1677 251.652 48.135C253.886 48.1542 256.1 47.7083 258.152 46.8257C260.127 45.967 261.906 44.7151 263.381 43.1462C264.919 41.4887 266.111 39.5413 266.888 37.4179C268.571 32.6132 268.571 27.3788 266.888 22.5741C266.108 20.4528 264.916 18.5069 263.381 16.8487ZM257.021 37.868C255.341 39.6508 253.152 40.5188 250.337 40.5188C247.707 40.5188 245.608 39.642 243.948 37.8709C242.288 36.0998 241.461 33.449 241.461 30.0004C241.461 26.5517 242.3 23.9009 243.948 22.1298C245.597 20.3588 247.698 19.4791 250.337 19.4791C253.152 19.4791 255.341 20.3558 257.021 22.1328C258.702 23.9097 259.537 26.5488 259.537 30.0004C259.537 33.452 258.693 36.0969 257.021 37.868Z" fill="#125BC9"/>
                      <path d="M297.42 16.1122C296.81 15.5193 296.155 14.976 295.459 14.4873C294.387 13.7629 293.236 13.1628 292.028 12.6987C290.497 12.1176 288.869 11.8329 287.232 11.8599C284.998 11.8422 282.785 12.288 280.732 13.1692C278.756 14.0292 276.977 15.2821 275.501 16.8517C273.963 18.5083 272.771 20.4546 271.993 22.577C270.306 27.3811 270.306 32.6168 271.993 37.4208C272.771 39.5438 273.963 41.4909 275.501 43.1491C276.976 44.7181 278.756 45.97 280.732 46.8286C282.784 47.7112 284.998 48.1571 287.232 48.1379C288.875 48.1642 290.508 47.8663 292.037 47.2612C293.257 46.7715 294.413 46.1346 295.479 45.3644C296.174 44.8445 296.823 44.2666 297.42 43.6372V47.4774H305.7V12.5175H297.42V16.1122ZM294.936 37.8709C293.276 39.6537 291.186 40.5188 288.547 40.5188C285.73 40.5188 283.544 39.642 281.86 37.868C280.177 36.094 279.347 33.449 279.347 30.0004C279.347 26.5517 280.191 23.9009 281.863 22.1328C283.535 20.3646 285.73 19.4791 288.547 19.4791C291.177 19.4791 293.276 20.3558 294.936 22.1298C296.596 23.9039 297.42 26.5488 297.42 30.0004C297.42 33.4519 296.584 36.0998 294.936 37.8709Z" fill="#125BC9"/>
                      <path d="M335.145 12.5175L327.239 39.5309H324.647L317.399 12.5175H308.739L318.334 47.4804H324.843L320.891 59.9978H329.571L343.816 12.5175H335.145Z" fill="#125BC9"/>
                      <path d="M343.503 55.6665V55.6139C344.041 55.4532 344.415 55.0762 344.415 54.591C344.421 54.4078 344.385 54.2257 344.311 54.0582C344.237 53.8908 344.125 53.7422 343.986 53.6236C343.664 53.4336 343.287 53.2992 342.454 53.2992C341.886 53.2909 341.319 53.3359 340.759 53.4337V57.8468H341.782V56.0698H342.264C342.831 56.0698 343.1 56.2861 343.179 56.7712C343.241 57.1454 343.359 57.508 343.53 57.8468H344.632C344.462 57.4998 344.353 57.126 344.31 56.742C344.187 56.1517 343.945 55.8243 343.503 55.6665ZM342.291 55.345H341.808V54.0708C341.994 54.0319 342.183 54.0142 342.372 54.0182C343.018 54.0182 343.313 54.2871 343.313 54.6904C343.325 55.1551 342.869 55.345 342.302 55.345H342.291Z" fill="#125BC9"/>
                      <path d="M342.492 51.1219C341.616 51.1375 340.765 51.4118 340.045 51.9102C339.324 52.4087 338.768 53.1091 338.445 53.9232C338.122 54.7373 338.047 55.6288 338.229 56.4855C338.412 57.3422 338.843 58.1257 339.47 58.7375C340.097 59.3493 340.891 59.762 341.752 59.9237C342.613 60.0854 343.502 59.9888 344.308 59.6461C345.114 59.3035 345.801 58.73 346.282 57.998C346.762 57.2659 347.016 56.4079 347.01 55.5321C347.004 54.9456 346.882 54.3662 346.651 53.827C346.421 53.2878 346.086 52.7994 345.666 52.3898C345.246 51.9802 344.75 51.6573 344.205 51.4397C343.661 51.2222 343.079 51.1142 342.492 51.1219ZM342.518 59.0567C341.601 59.0339 340.729 58.6545 340.087 57.999C339.446 57.3436 339.085 56.4637 339.081 55.5463C339.078 54.6289 339.432 53.7464 340.069 53.0861C340.706 52.4259 341.575 52.04 342.492 52.0104C344.456 52.0104 345.879 53.5973 345.879 55.5584C345.879 57.5194 344.456 59.0567 342.518 59.0567Z" fill="#125BC9"/>
                      <path d="M46.9134 29.3786L43.6605 21.5256L23.6642 29.8082L39.4257 14.0467L33.4169 8.0379L17.6554 23.7965L25.938 3.80307L18.085 0.550231L8.49889 23.6913V0.205368H0V38.9618V47.4636H8.49889H47.2582V38.9618H23.7723L46.9134 29.3786Z" fill="#125BC9"/>
                    </svg>
                  `}
              </div>

              <div class="LazerCheckout-header-right">
                <button title="Close modal" id="modal-closure-btn" class="modal-close-btn LazerCheckout-close-btn">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7M7 7L1 1L7 7Z" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <div class="LazerCheckout-header-right-email">
                  <span id="LazerCheckoutEmailInput">${e?.email||""}</span>
                </div>
                <div class="LazerCheckout-header-right-amount">
                  <span id="header-amount">${v(e.amount)} ${e.currency}</span>
                  <sub id="header--fee" class="header--fee">(${v(y())} fee)</sub>
                </div>
              </div>
          </div>

        <div class="LazerCheckout-container-body">
          <div class="initial-loader"></div>
          <div id="section1" class="lazer-section-one lazer-section-hide" >
          <div class="lazer-section-header-wrapper">
              <div class="mt-24">
              <h2 class="lazer-section-oneh2 ">
                  Please enter your details for payment
              </h2>
              <h2 class="lazer-section-oneh2">
                  notification & update
              </h2>
              </div>
          </div>

          <div class="form-wrapper">
            <div class="lazer-section-one-input-wrapper mt-28">
                <h2>Full name</h2>
                <input type="text" id="nameInput" class="form-control nameInput" placeholder="eg Taiwo Femi">
            </div>

            <div class="lazer-section-one-input-wrapper mt-20">
                <h2>Email address</h2>
                <input type="email" id="emailInput" class="form-control emailInput" placeholder="eg taiwo@example.com">
            </div>

            <div class="lazer-section-one-button-wrapper mt-16">
              <button disabled type='submit' class="lazer-section-one-button opacity">
                Continue
              </button>
            </div>
          </div>
        </div>

        <div id="section3" class="lazer-section-three lazer-section-hide" >
          <div id="lazer-section-three-spinner" class="lazer-section-three-heading">
              <h3>Select the coin you want to pay with:</h3>
          </div>
          <div id="coins-list" class="coins-list"></div>
        </div>

          <div id="section4" class="lazer-section-four lazer-section-hide" >
            <div class="lazer-section-four-heading">
              <h2>Scan the QR Code or copy and paste</h2>
              <h2> the payment details to your wallet</h2>
            </div>

            <div class="lazer-section-four-barcode">
              <figure id="lazerpay-qr-code" class="s"></figure>
              <p>Send payment within <span id="lazerSectionProgressBar">59:26<span></p>
              <button id="lazer-section-four-confrim-transferBtn" class="lazer-section-four-confrim-transfer" data-target="section9">
                <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633235822/Lazerpay/checkmark_jb9ppo.svg" alt="checkmark" > &nbsp; I’ve made the transfer
              </button>
              <div class="lazer-section-four-amount-to-pay">
                <p class="my-0">Amount to pay:</p>
                <h2 class="lazer-section-four-amount-to-payNOW lazer-section21232-amoun-coin-12332">${v(e.amount)} ${e.coin}</h2>
              </div>
            </div>

            <div class="padding-container">
              <div class="display-flex-center">
                <div class="lazer-section-four-address-input">
                  <div class="description">
                    <p class="lazer-section-coin-address">${e.coin} Address</p>
                    <h2 class="lazer-section-address my-0">3DehZyqfqRQHRuWkd5kHxSt...</h2>
                  </div>
                  <button class="copy-button lazer-copy-button">
                    <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633226142/Lazerpay/copy_hspcts.png" alt="clipboard">
                    <span class="lazer-copy-button-text">Copy</span>
                  </button>
                </div>
              </div>

              <div class="display-flex-center">
                <div class="lazer-section-four-address-input disabled">
                  <div class="description">
                    <p>Network </p>
                    <h2 class="lazer-section-network my-0">Binance Smart Chain (BEP20) </h2>
                  </div>
                </div>
              </div>
              <div class="display-flex-center">
                <div class="lazer-warning">
                  <div class="lazer-warning-icon">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5826 18.7134L15.1721 1.89237C13.8504 -0.630788 10.2459 -0.630788 8.80412 1.89237L0.393602 18.7134C-0.8079 21.1164 0.874203 24 3.63766 24H20.4587C23.2221 24 24.9042 21.1164 23.5826 18.7134ZM12.0482 21.597C10.7265 21.597 9.64517 20.5156 9.64517 19.194C9.64517 17.8723 10.7265 16.791 12.0482 16.791C13.3698 16.791 14.4512 17.8723 14.4512 19.194C14.4512 20.5156 13.3698 21.597 12.0482 21.597ZM13.2497 14.388H10.8467L9.64517 4.77597H14.4512L13.2497 14.388Z" fill="#D4AF06"/>
                    </svg>
                  </div>
                  <p class="text-warning"> Please make sure you’re sending tokens from a <b class="line-pre">BEP-20</b> Network. Sending from another network would lead to loss of tokens. </p>
                </div>
              </div>
              <button id="go-back-coin-selection" class="lazer-section-four-confrim-transfer go-back-button">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40218 8.85035C4.20868 9.04737 3.89211 9.05022 3.6951 8.85672L1.14965 6.35672C1.05392 6.26271 1 6.13417 1 6C1 5.86583 1.05392 5.73729 1.14965 5.64328L3.6951 3.14328C3.89211 2.94978 4.20868 2.95263 4.40218 3.14965C4.59567 3.34666 4.59282 3.66323 4.39581 3.85672L2.72265 5.5L10.5 5.5C10.7761 5.5 11 5.72386 11 6C11 6.27614 10.7761 6.5 10.5 6.5L2.72265 6.5L4.39581 8.14328C4.59282 8.33677 4.59567 8.65334 4.40218 8.85035Z" fill="#323232"/>
                </svg>
                &nbsp; Go back
              </button>
          </div>
        </div>

        <div id="section5" class="lazer-section-five lazer-section-hide" >
          <div class="lazer-section-five-heading lazer-section-six-heading">
            <svg class="waiting-spinner" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0C16.1498 0 0 16.1498 0 36C0 55.8502 16.1498 72 36 72C55.8502 72 72 55.8502 72 36C72 16.1498 55.8502 0 36 0ZM56.7692 31.526C56.7692 31.9216 56.612 32.3011 56.3323 32.5809C56.0525 32.8607 55.673 33.0179 55.2773 33.0179H44.9723C44.6771 33.0184 44.3885 32.9311 44.1429 32.7673C43.8974 32.6035 43.706 32.3705 43.5931 32.0977C43.4802 31.825 43.4508 31.5249 43.5087 31.2354C43.5666 30.946 43.7091 30.6802 43.9183 30.4719L47.7554 26.6348L46.7862 25.5081C45.0525 23.7083 42.8998 22.3661 40.5207 21.6016C38.1415 20.8371 35.6099 20.6741 33.1524 21.1271C30.6948 21.5802 28.3878 22.6351 26.4376 24.1977C24.4874 25.7603 22.9548 27.7817 21.9768 30.0814C20.9988 32.3811 20.6059 34.8873 20.8333 37.3759C21.0606 39.8645 21.9011 42.258 23.2796 44.3424C24.6581 46.4268 26.5316 48.1371 28.7327 49.3204C30.9337 50.5038 33.3937 51.1232 35.8927 51.1235C39.0202 51.1205 42.0701 50.15 44.6241 48.345C47.1781 46.5399 49.111 43.9889 50.1577 41.0417C50.2789 40.6985 50.4666 40.3826 50.71 40.1119C50.9534 39.8412 51.2477 39.6211 51.5761 39.4642C51.9045 39.3072 52.2606 39.2165 52.6241 39.1972C52.9876 39.1779 53.3513 39.2304 53.6945 39.3516C54.0377 39.4729 54.3537 39.6606 54.6244 39.9039C54.895 40.1473 55.1151 40.4416 55.2721 40.77C55.429 41.0984 55.5197 41.4546 55.539 41.8181C55.5583 42.1815 55.5059 42.5453 55.3846 42.8885C54.1224 46.4605 51.9026 49.6168 48.9677 52.0125C46.0329 54.4082 42.496 55.951 38.7435 56.4723C34.9911 56.9936 31.1675 56.4733 27.6908 54.9684C24.214 53.4635 21.2179 51.0318 19.0298 47.9391C16.8417 44.8464 15.5459 41.2117 15.2839 37.4323C15.022 33.6528 15.8041 29.8742 17.5446 26.5092C19.2851 23.1442 21.9172 20.3224 25.1531 18.3523C28.389 16.3821 32.1042 15.3394 35.8927 15.3381C38.6887 15.3274 41.4573 15.8893 44.0279 16.9891C46.5985 18.089 48.9166 19.7035 50.8396 21.7333L50.9365 21.8406L51.6825 22.706L54.2233 20.1652C54.3586 20.0268 54.5201 19.9166 54.6984 19.8411C54.8766 19.7657 55.0681 19.7264 55.2617 19.7256C55.4587 19.724 55.6541 19.7615 55.8365 19.8358C56.019 19.9102 56.1848 20.0201 56.3245 20.159C56.4642 20.2979 56.575 20.4631 56.6505 20.6451C56.7259 20.8271 56.7645 21.0222 56.764 21.2192L56.7692 31.526Z" fill="#2B2B2B"/>
            </svg>

          </div>
          <div class="lazer-section-five-content">
            <h2 class="lazer-section-five-content-eefdf">
              Confirming payment of <br> <b id="confirm-payment-amount">00</b>
            </h2>
            <div class="lazer-section-five-content-jefjhef">
              <p class="lazer-section-five-content-xxed">Your transaction is processing, <br> please hold on for payment confirmation.</p>
            </div>
            <p class="lazer-section-five-content-ppss">
              <b>Note:</b> If the amount paid is more than the required
              amount, contact <a class="text-primary" href="mailto:help@lazerpay.finance">help@lazerpay.finance</a> with your Name, Email and Wallet address for a refund.
            </p>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section21232-amoun-coin-12332">
              ${v(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>

        <div id="section6" class="lazer-section-six lazer-section-hide" >
          <div class="lazer-section-six-heading">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 0C16.1496 0 0 16.1496 0 36C0 55.8504 16.1496 72 36 72C55.8504 72 72 55.8504 72 36C72 16.1496 55.8504 0 36 0ZM36 14.76C36.9256 14.76 37.8304 15.0345 38.6001 15.5487C39.3697 16.063 39.9695 16.7939 40.3238 17.649C40.678 18.5042 40.7707 19.4452 40.5901 20.353C40.4095 21.2609 39.9638 22.0948 39.3093 22.7493C38.6548 23.4038 37.8209 23.8495 36.913 24.0301C36.0052 24.2107 35.0642 24.118 34.209 23.7638C33.3539 23.4095 32.623 22.8097 32.1087 22.0401C31.5945 21.2704 31.32 20.3656 31.32 19.44C31.32 18.1988 31.8131 17.0084 32.6907 16.1307C33.5684 15.2531 34.7588 14.76 36 14.76ZM47.52 55.44H25.92V49.68H33.84V33.84H28.08V28.08H39.6V49.68H47.52V55.44Z" fill="#003585"/>
            </svg>
          </div>

          <div class="lazer-section-five-content">
            <h2 class="lazer-section-sex-content-eefdf font-500">No Payment Received!</h2>
            <div class="lazer-section-six-content-jefjhef">
              <p class="lazer-section-five-content-xxed">No payment was detected from you  <br> for this transaction.</p>
            </div>
            <p class="lazer-section-five-content-ppss">
              If you already made the payment, you can leave
              this page and you will get notified once payment
              has been confirmed.
            </p>
            <button id="lazer-section-six-made-transfer-tryAgain" class="lazer-section-six-made-transfer">
              <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633237826/Lazerpay/reload_rlfwll.svg" alt="checkmark"> &nbsp; Try again
            </button>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section21232-amoun-coin-12332" >${v(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>

        <div id="section7" class="lazer-section-seven lazer-section-hide">
          <div class="lazer-section-five-heading lazer-section-six-heading">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 0C16.1498 0 0 16.1498 0 36C0 55.8502 16.1498 72 36 72C55.8502 72 72 55.8502 72 36C72 16.1498 55.8502 0 36 0ZM54.7356 23.9348L31.474 51.6271C31.2189 51.931 30.9014 52.1766 30.543 52.3471C30.1847 52.5176 29.7939 52.6091 29.3971 52.6154H29.3504C28.9622 52.6152 28.5785 52.5335 28.2239 52.3755C27.8694 52.2175 27.5521 51.9867 27.2925 51.6981L17.3233 40.6212C17.0701 40.3526 16.8731 40.0362 16.744 39.6904C16.6149 39.3447 16.5561 38.9766 16.5713 38.6079C16.5864 38.2391 16.6751 37.8771 16.8321 37.5431C16.9892 37.2091 17.2114 36.9099 17.4857 36.663C17.7601 36.4161 18.081 36.2266 18.4296 36.1055C18.7783 35.9844 19.1476 35.9342 19.5159 35.9579C19.8842 35.9816 20.2441 36.0787 20.5743 36.2435C20.9046 36.4082 21.1986 36.6373 21.439 36.9173L29.2777 45.6265L50.4952 20.3729C50.9711 19.8226 51.6445 19.4818 52.3697 19.424C53.0949 19.3662 53.8137 19.5961 54.3708 20.0641C54.9279 20.532 55.2784 21.2003 55.3467 21.9247C55.4149 22.649 55.1954 23.371 54.7356 23.9348Z" fill="url(#paint0_linear_3837:4285)"/>
              <defs>
                <linearGradient id="paint0_linear_3837:4285" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2AE4AC"/>
                  <stop offset="1" stop-color="#37C978"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="lazer-section-five-content">
            <h2 class="lazer-section-five-content-eefdf">Payment confirmed!</h2>
            <div class="lazer-section-five-content-jefjhef">
              <h3 data-id="confirmedAmount" id="confirmedAmount" class="lazer-section-seveen-content-xxed lazer-section-success-amount lazer-section21232-amoun-coin-12332">${v(e.amount)} ${e.coin} </h3>
              <p class="lazer-section-seveen-content-xxed lazer-section-PaidTODATA">Paid to Lazer Technologies</p>
            </div>
            <p class="lazer-section-five-content-ppss">
              <b>Note:</b> If the amount paid is more than the required
              amount, contact <a class="text-primary" href="mailto:help@lazerpay.finance">help@lazerpay.finance</a> with your Name, Email and Wallet address for a refund.
            </p>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 data-id="footer-amount" class="lazer-section-success-amount"> ${v(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>

        <div id="section8" class="lazer-section-eight lazer-section-hide" >
          <div class="lazer-section-six-heading">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.18668 53.0503L3.14043 50.7054C0.686877 45.2229 -0.355888 39.2136 0.107128 33.225C0.570145 27.2363 2.52423 21.4587 5.79135 16.4185C9.05848 11.3783 13.5348 7.2356 18.8125 4.36791C24.0903 1.50022 30.0017 -0.00134918 36.0082 9.09617e-07H38.5796V37.6667L4.18668 53.0503Z" fill="url(#paint0_linear_3837:4348)"/>
              <path d="M43.7227 5.53906V41.0007L10.0723 56.0549C13.0667 60.9261 17.259 64.9492 22.2493 67.7406C27.2397 70.532 32.8618 71.9987 38.5798 72.001C57.0122 72.001 72.0084 57.0047 72.0084 38.5723C72.0084 21.8886 59.7218 8.0205 43.7227 5.53906V5.53906Z" fill="url(#paint1_linear_3837:4348)"/>
              <defs>
                <linearGradient id="paint0_linear_3837:4348" x1="19.2898" y1="0" x2="19.2898" y2="53.0503" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#003585"/>
                  <stop offset="1" stop-color="#0048B6"/>
                </linearGradient>
                <linearGradient id="paint1_linear_3837:4348" x1="41.0404" y1="5.53906" x2="41.0404" y2="72.001" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#003585"/>
                  <stop offset="1" stop-color="#0048B6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="lazer-section-five-content">
            <h2 class="lazer-section-five-content-eefdf">Partial payment received!</h2>
            <div class="lazer-section-eight-content-jefjhef">
              <p class="lazer-section-eight-content-xxed lazer-section-partial-amount-amountPaid lazer-section21232-amoun-coin-12332">${v(e.amount)} ${e.coin}</p>
              <p class="lazer-section-eight-content-xxed2 lazer-section-PaidTODATA-Partial">Paid to Lazer Technologies </p>
            </div>

            <div class="lazer-section-request-refund-wrapper">
              <div class="lazer-section-six-content-jefjhef">
                <p class="lazer-section-eight-content-xxed">To complete this transaction, click on</p>
                <p class="lazer-section-eight-content-xxed">the button below.</p>
              </div>
              <div style="margin-bottom: 30px" class="display-flex-center">
                <button class="lazer-section-eight-made-transfer lazer-section-eight-complete-payment">
                  <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633226142/Lazerpay/right-arrow_ht0sth.png" alt="right-arrow"> &nbsp; Complete Payment
                </button>
              </div>

              <div class="display-flex-center mb-23">
                <p class="lazer-section-five-content-ppss">
                  <b>Alternatively,</b> contact <a class="text-primary" href="mailto:help@lazerpay.finance">help@lazerpay.finance</a> with your Name, Email and Wallet address if you do not wish to continue with the transaction.
                </p>
              </div>
            </div>

            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section-partial-amount lazer-section21232-amoun-coin-12332">${v(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>

        <div id="section9" class="lazer-section-nine lazer-section-hide" >
          <div class="lazer-section-six-heading">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 0C16.1498 0 0 16.1498 0 36C0 55.8502 16.1498 72 36 72C55.8502 72 72 55.8502 72 36C72 16.1498 55.8502 0 36 0ZM49.0344 45.1194C49.3024 45.374 49.5167 45.6797 49.6647 46.0184C49.8127 46.3571 49.8913 46.722 49.8961 47.0916C49.9008 47.4612 49.8315 47.828 49.6922 48.1704C49.553 48.5128 49.3466 48.8238 49.0852 49.0852C48.8238 49.3466 48.5128 49.553 48.1704 49.6922C47.828 49.8315 47.4612 49.9008 47.0916 49.8961C46.722 49.8913 46.3571 49.8127 46.0184 49.6647C45.6797 49.5167 45.374 49.3024 45.1194 49.0344L36 39.9167L26.8806 49.0344C26.357 49.5318 25.6599 49.805 24.9378 49.7958C24.2156 49.7866 23.5257 49.4956 23.0151 48.9849C22.5044 48.4743 22.2135 47.7844 22.2042 47.0622C22.195 46.3401 22.4682 45.643 22.9656 45.1194L32.0833 36L22.9656 26.8806C22.4682 26.357 22.195 25.6599 22.2042 24.9378C22.2135 24.2156 22.5044 23.5257 23.0151 23.0151C23.5257 22.5044 24.2156 22.2135 24.9378 22.2042C25.6599 22.195 26.357 22.4682 26.8806 22.9656L36 32.0833L45.1194 22.9656C45.643 22.4682 46.3401 22.195 47.0622 22.2042C47.7844 22.2135 48.4743 22.5044 48.9849 23.0151C49.4956 23.5257 49.7866 24.2156 49.7958 24.9378C49.805 25.6599 49.5318 26.357 49.0344 26.8806L39.9167 36L49.0344 45.1194Z" fill="url(#paint0_linear_3837:4343)"/>
              <defs>
                <linearGradient id="paint0_linear_3837:4343" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF5959"/>
                  <stop offset="1" stop-color="#DB1010"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="lazer-section-five-content">
            <h2 class="lazer-section-five-content-eefdf">Transaction cancelled!</h2>
            <div class="lazer-section-six-content-jefjhef">
              <p class="lazer-section-five-content-xxed">This transaction was cancelled by <br> the merchant.</p>
            </div>
            <p class="lazer-section-five-content-ppss">
              All money paid has been returned to <br> the originating wallet.
            </p>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section-failure-amount lazer-section21232-amoun-coin-12332">${v(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="LazerCheckout-footer">
        <p id="lz-footer-attribute">
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 5.13333H7.93333V2.8C7.93333 2.05739 7.63833 1.3452 7.11323 0.820101C6.58813 0.294999 5.87594 0 5.13333 0C4.39073 0 3.67854 0.294999 3.15343 0.820101C2.62833 1.3452 2.33333 2.05739 2.33333 2.8V5.13333H1.86667C1.37176 5.13387 0.897282 5.33071 0.547331 5.68066C0.19738 6.03061 0.000540416 6.5051 0 7V12.1333C0.000540416 12.6282 0.19738 13.1027 0.547331 13.4527C0.897282 13.8026 1.37176 13.9995 1.86667 14H8.4C8.89491 13.9995 9.36938 13.8026 9.71934 13.4527C10.0693 13.1027 10.2661 12.6282 10.2667 12.1333V7C10.2661 6.5051 10.0693 6.03061 9.71934 5.68066C9.36938 5.33071 8.89491 5.13387 8.4 5.13333ZM7 5.13333H3.26667V2.8C3.26667 2.30493 3.46333 1.83014 3.8134 1.48007C4.16347 1.13 4.63826 0.933333 5.13333 0.933333C5.6284 0.933333 6.1032 1.13 6.45327 1.48007C6.80333 1.83014 7 2.30493 7 2.8V5.13333Z" fill="black"/>
          </svg>
          <span> 
            Powered by <a target="_blank" href="https://lazerpay.finance">Lazerpay</a>
          <span>
        </p>
        <div id="confirm-close">
          <h3>Are you sure?</h3>
          <div class="btn-flex">
            <button data-action="abort" id="confirm-close-btn" class="mobile-modal-close-btn modal-close-btn">
              &times; &nbsp; No
            </button>
            <button data-action="proceed" id="confirm-close-btn" class="mobile-modal-close-btn modal-close-btn">
              &check; &nbsp; Yes
            </button>
          </div>
        <div>
    </div>

    <style>
      .LazerCheckout-body * {
        font-family: proxima !important;
        letter-spacing: 0px !important;
      }

      button {
        cursor: pointer;
      }

      img {
        max-width: 100%
      }

      .font-400 {
        font-weight: 400
      }
      
      .font-500 {
        font-weight: 500
      }

      .font-700 {
        font-weight: 700
      }

      .LazerCheckout-overlay ::-webkit-scrollbar {
        display: none
      }

      .padding-container {
        padding: 0px 20px;
      }

      .padding-container > * {
        width: 100%
      }

      .line-pre {
        white-space: pre
        font-weight: bold
      }

      .text-primary {
        color: #003585
      }

      .vendor-cover-logo {
        borde-radius: 100%;
        padding-bottom: 5px
      }

      .my-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      .vendor-cover-logo img {
        max-width: 100%;
        height: 60px;
        width: 60px;
        object-fit: cover;
        box-shadow: 0 0.6px 2.8px 0 rgb(0 0 0 / 12%);
        border-radius: 100%
      }

      #lz-footer-attribute {
        margin: 0;
        font-weight: 500;
        display: flex;
        align-items: baseline;
        font-size: 12px;
        color: #666666;
        text-align: center;
      }

      #lz-footer-attribute svg {
        margin-right: 8px;
        position: relative;
        top: 1px
      }
      
      #lz-footer-attribute a {
        color: #003585;
        text-decoration: none
      }

      .header--fee {

        font-size: 12px;
        color: #666666;
        display: contents;
      }

      input.form-control {

        height: 52px;
        background: #FFFFFF;
        border: 1px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 4px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 1;
        margin: 8px 0px;
        padding: 10px 16px;
      }

      input.form-control::placeholder{

        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #A5A5A5;
        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 16px;
      }

      .LazerCheckout-overlay {

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999999999;
        font-size: 11px;
        background: rgba(200, 200, 200, 0.9);
      }

      .LazerCheckout-container-wrapper {
        position: relative;
      }

      .LazerCheckout-container-wrapper .Lazer-dev-env {
        padding: 5px 10px;
        width: 30%;
        margin: 0 auto;
        min-width: 100px;
        position: absolute;
        bottom: 36px;
        z-index:9;
        left: 50%;
        color: #FFFFFF;
        text-align: center;
        transform: translateX(-50%);
        background: linear-gradient(90deg, #FF5A5A 0%, #FF4343 100%);
        border-radius: 8px 8px 0px 0px;
        font-size: 12px;
        font-weight: 500;
        font-family: proxima;
      }

      .LazerCheckout-body {

        position: relative;
        background: #ffffff;
        border-radius: 20px;
        padding-bottom: 2rem;
        box-shadow: 0 0 50px #ccc;
        position: relative;
        text-align: center;
        width: 370px;
        max-height: 80vh;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 300px;
      }

      .LazerCheckout-footer {
        display: flex;
        justify-content:center;
        margin-top: 18px;
      }

      .LazerCheckout-footer * {
        font-family: proxima
      }

      .LazerCheckoutButton {
        background: none;

        border: none;
        cursor: pointer;
      }

      .LazerCheckout-logo .logo-svg {
        max-width: 120px;
        height: 60px
      }

      .LazerCheckout-container-header-wrapper {
        position: relative;
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 2rem 2rem .5rem 2rem;
        border-bottom: 0.5px solid #dfdfdf;
      }

      .LazerCheckout-close-btn {
        font-size: 20px;

        padding-top: 3px !important;
        position: absolute;
        border: 1px solid #DFDFDF;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        min-width: 25px;
        max-width: 25px;
        width: 25px;
        height: 25px;
        min-height: 25px;
        right: 10px;
        top: 10px;
        background: transparent;
        z-index: 999999999;
        transition: .3s ease-in;
        color: #000000;
      }

      LazerCheckout-close-btn:hover {
        opacity: 1;
        transition: .3s ease-in;
      }

      .LazerCheckout-close-btn svg {
        width: 9.5px;
        height: 9.5px;
        stroke: #000
      }

      .LazerCheckout-header-right{
        text-align: right

      }

      .LazerCheckout-header-right-email span{
        font-weight: 500;

        font-size: 11px;
        color: #666666;
      }

      .LazerCheckout-header-right-amount {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-top:2px;
        color: #37C978;
      }

      /* SECTION ONE */
      .lazer-section-one h2{

        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #000000;
        margin: 0;
        padding: 0;
      }

      .mb-23{
        margin-bottom: 23px;
      }

      .mt-24{
        margin-top: 24px;
      }

      .mt-28{
        margin-top: 24px;
      }

      .mt-20{
        margin-top: 24px;
      }

      .mt-16{
        margin-top: 24px;
      }

      .form-wrapper {

        width: 100%;
        padding: 0 20px;
        margin: auto;
        box-sizing: border-box;
      }

      .lazer-section-one-input-wrapper {

        margin: auto;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
      }

      .lazer-section-PaidTODATA {
        margin: 2px;
        color: #323232
      }

      .lazer-section-one-input-wrapper h2 {
        justify-content: flex-start;
        text-align: start;

        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #323232;
        align-self: stretch;
        flex-grow: 0;
        margin: 8px 0px;
      }

      .opacity {
        opacity: 0.1;
      }

      .lazer-section-one-button{
        background: #003585;
        border: none;
        box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
        border-radius: 8px;
        height: 52px;
        width : 100%;
        margin:auto;
        justify-content: center;
        align-items: center;
        display: flex;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 135%;
        color: #FFFFFF;
      }

      .display-flex-center{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .display-flex-align-center{
        display: flex;
        align-items: center;
      }

      .lazer-section-hide{
        display: none !important;
      }

      .lazer-section-show {
        display: unset !important;
      }

      /* SECTION TWO STYLE */

      .lazer-section-two-paymentOption {
        display: flex;
        align-items: center;
        padding: 40px 20px;
        border-bottom: 0.5px solid #EEEEEE;;
        transition: .3s ease-in;
      }

      .lazer-section-two-paymentOption:hover {
        background: #FDFDFD;
        transition: .3s ease-in;
      }

      .display-flex-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .lazer-section-two-paymentOption-content-wrapper {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        margin: 0px auto 0px 20px;
      }

      .lazer-section-two-paymentOption-header {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        margin: 0;
        padding: 0;
        margin-bottom: 7px;
        color: #323232;
      }

      .lazer-section-two-paymentOption-info {

        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 16px;
        margin: 0;
        padding: 0;
        color: #666666;
        text-align: start;
      }

      .lazer-comming-soon img{
        width: 100%;
        height: 100%;
      }

      /* SECTION THREE */

      .lazer-section-three-coin-wrapper {
        padding: 16px 20px;
        cursor: pointer;

        border-bottom:  0.5px solid #EEEEEE;
        transition: .3s ease-in;
      }

      .lazer-section-three-coin-wrapper:hover {
        background: #FCFCFC;
        transition: .3s ease-in;
      }

      .lazer-section-three-coin-wrapper .coin-image {
        height: 36px;
        width: 36px;
      }

      .lazer-section-three-coin-container {
        align-items: center;
      }

      .lazer-section-three-coin-container h2 {
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #2B2B2B;
        margin-left: 10px;
        margin-bottom: 5px;
      }

      .lazer-section-three-heading {
        height: 71px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom:  0.5px solid #EEEEEE;
      }

      .lazer-section-three-heading h3 {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #2B2B2B;
        max-width: 85%;
        margin-right: auto;
        margin-left: auto;
      }

      /* SECTION 4 */

      .lazer-section-four-heading{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 32px;
      }

      .lazer-section-four-heading h2{
        margin: 0;
        padding: 0;

        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        /* or 143% */
        text-align: center;
        /* Wireframe/Grey 1 */
        color: #666666;
      }

      .lazer-section-four-barcode p {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: #323232;
        margin: 0;
        padding: 0;
        margin-bottom: 15px;
      }

      .lazer-section-four-barcode figure {
        margin: 10px auto;
      }

      .lazer-section-four-barcode button {
        width: 168px;
        height: 32px;
        background: #F7F9FE;
        cursor: pointer;
        border: 1px solid #CCD7E7;
        box-sizing: border-box;
        border-radius: 20px;

        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        color: #636363;
        margin-bottom: 17px;
      }

      button.go-back-button {
        width: max-content;
        height: 32px;
        background: #F7F9FE;
        cursor: pointer;
        border: 1px solid #CCD7E7;
        box-sizing: border-box;
        border-radius: 20px;

        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        margin-bottom: 17px;
        padding: 0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        color: #000;
        font-weight: 700;
      }

      .lazer-section-four-barcode {
        border-bottom:  0.5px solid #EEEEEE;
        margin-bottom: 20px
      }

      .lazer-section-four-amount-to-pay{
        margin: 5px 0;
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding: 0 29px;
      }

      .lazer-section-four-amount-to-pay p{

        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        color: #636363;
      }

      .lazer-section-four-amount-to-pay h2 {

        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        color: #323232;
      }

      .lazer-section-four-address-input {
        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        box-sizing: border-box;
        border-radius: 4px;
        width: 100%;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      .lazer-section-four-address-input.disabled {
        background: #F9F9F9
      }

      .lazer-section-four-address-input .description {
        padding: 10px 8px;
        color: #636363
      }

      .lazer-section-four-address-input p {

        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.03em;
        text-align: start;
        padding: 0;
        margin: 0;
        margin-bottom: 3px;
        color: #636363;
      }

      .lazer-section-four-address-input h2 {

        font-size: 13px;
        line-height: 12px;
        letter-spacing: 0.01em;
        color: #959595;
        font-weight: normal
      }

      .lazer-section-four-address-input .copy-button {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #37C978;
        cursor:pointer;
        width: 80px;
        height: 88%;
        background: #D7F4E4;
        box-sizing: border-box;
        border-radius: 2px;
        border: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 3px;
      }

      .lazer-section-four-address-input .copy-button > *:first-child {
        margin-right: 3px
      }

      .lazer-warning .lazer-warning-icon{
        padding-left:20px;
      }

      .lazer-warning .text-warning {
        text-align:left;
        font-size: 11px;
        line-height: 14px;
        padding: 10px 5px;
        letter-spacing: 0.01em;
      }

      .lazer-warning {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        padding:0 1px;
        margin: 8px 0;
        background: #FFFBEB;
        border-radius: 8px;
        border:0.5px solid #E7E7E7;
      }

      /* SECTION 5 */

      .lazer-section-five-heading .lazer-section-six-heading{
        height: 120px;
        justify-content: center;
        align-items: center;
        display: flex;
      }

      .lazer-section-six-heading{
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .lazer-section-five-content-eefdf {
        font-size: 18px;
        line-height: 30px;
        padding: 0px;
        margin: 0px;
        text-align: center;
        color: #323232;
        margin-bottom: 16px;
        font-weight: 500
      }

      .lazer-section-five-content-eefdf #confirm-payment-amount {
        color: #37C978;
        font-weight: 600
      }

      .lazer-section-six-content-eefdf{
        font-size: 20px;
        line-height: 24px;
        padding: 0px;
        margin: 0px;
        text-align: center;
        color: #323232;
        margin-bottom: 12px;
      }

      .lazer-section-five-content-xxed {

        padding: 0px;
        margin: 0px;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #666666;
        font-weight: 500
      }

      .lazer-section-five-content-ppss{

        max-width: 80%;
        padding: 0px;
        margin: auto;
        font-size: 11px;
        line-height: 18px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-five-content-sdefe{

        padding: 0px;
        margin: 0px;
        font-weight: 500;
        font-size: 11px;
        line-height: 18px;
        text-align: center;
        color: #000000;
      }

      #lazer---id--errr{
        color: #FF4747;
        font-size: 14px;
      }

      .lazer-section-five-content-jefjhef {
        margin-bottom: 51px;
        font-weight: 500;
      }

      .lazer-section-six-content-jefjhef{
        margin-bottom: 16px;
      }

      .lazer-section-footer-amount-ppss{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 0.5px solid #EEEEEE;
        padding: 0px 20px;
        padding-top: 17px;
        margin-top: 40px;
      }

      .lazer-section-footer-amount-ppss p{

        font-size: 12px;
        line-height: 12px;
        color: #666666;
        margin: 0px;
        padding: 0px;
        font-weight: 500;
      }

      .lazer-section-footer-amount-ppss h2{

        font-size: 12px;
        font-weight: 500;
        line-height: 12px;
        text-align: right;
        color: #323232;
        margin: 0px;
        padding: 0px;
      }

      .lazer-section-six-heading .waiting-spinner {
        animation: spin 3s linear infinite;
      }

      .lazer-section-six-made-transfer{
        background: #F7F9FE;
        border: 1px solid #CCD7E7;
        box-sizing: border-box;
        border-radius: 20px;
        width: 102px;
        height: 32px;
        margin-bottom: 16px;
      }

      #confirmedAmount {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #confirmedAmount sub {
        font-size: 12px !important;
        color: #666;
        margin-left: 5px
      }

      .lazer-section-seveen-content-xxed {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #2B2B2B;
        margin: 0px 0 5px;
        padding: 0px;
      }

      .lazer-section-eight-content-jefjhef{
        margin-bottom: 20px;
        font-weight: 500;
      }

      .lazer-section-eight-content-xxed{
        margin: 0px;
        padding: 0px;

        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #2B2B2B;
      }

      .lazer-section-eight-content-xxed2{
        margin: 0px;
        padding: 0px;

        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-eight-content-xxed{
        margin: 0px;
        padding: 0px;

        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-eight-made-transfer {
        width: auto;
        height: 32px;
        background: #F7F9FE;
        border: 1px solid #CCD7E7;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        padding: 0 15px;
        font-size: 12px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        color: #636363;
      }

      .lazer-section-six-content-jefjhefjejejejejej {
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .lazer-section-six .lazer-section-five-content-xxed {
        max-width: 80%;
        margin: 20px auto
      }

      .lazer-section-six .lazer-section-five-content-ppss {
        margin: 20px auto
      }

      .lazer-section-five-content-xxedddddee3344ee {
        margin: 0px;
        padding: 0px;

        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-five-content-xxedddddee3344ee06060544433 {
        margin: 0px;
        padding: 0px;

        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #37C978;
      }

      .lazer-payment-option-border-bottom {
        border-bottom: 0.5px solid #EEEEEE;
        margin-bottom: 15px;
        padding-top: 10px;
        padding-bottom: 20px;
      }

      .mobile-modal-close-btn {
        display: none !important;
        padding: 0px 20px;
        width: auto;
        background: #F7F9FE;
        cursor: pointer;
        border: 0.5px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        color: #636363;
        margin: ${f?"10px":"15px"} auto;
      }

      .blur {
        filter: blur(8px);
        transition: .3s ease-in;
      }

      #confirm-close {
        display: none;
        color: #003585;
        border-radius: 20px;

        position: absolute;
        padding: 20px;
        width: 100%;
        text-align: center;
        top: 50%;
        font-size: 16px;
        transform: translateY(-50%);
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        animation: swing .2s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      #confirm-close h3 {
        font-weight: 500;
        font-size: 16px;
      }

      #confirm-close .btn-flex {
        display: flex;
        margin-top: 15px;
      }

      #confirm-close .btn-flex button {
        margin: 0 7px;
        display: block !important;
        padding: 5px 30px;
        font-weight: 500;
        border: 1px solid #dfdfdf
      }

      /* SPINNER SPINNER */
      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }

      .lds-ellipsis div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #37C978;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }

      .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
      }

      .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
      }

      .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
      }

      .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
      }

      @keyframes swing {
        from {
          opacity: 0;
          top: 90%
        }
        to {
          opacity: 1;
          top: 50%
        }
      }

      @keyframes lds-ellipsis1 {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes lds-ellipsis3 {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }

      @keyframes lds-ellipsis2 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(24px, 0);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        25% {
          transform: rotate(90deg);
        }

        50% {
          transform: rotate(180deg);
        }

        75% {
          transform: rotate(270deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }


      @media(max-width: 500px){
        .LazerCheckout-container-wrapper .Lazer-dev-env {
          position: fixed;
          bottom: 0;
        }

        .LazerCheckout-overlay {
          align-items: flex-start;
        }

        .LazerCheckout-container-wrapper {
          width: 100%;
        }

        .LazerCheckout-body {
          box-shadow: unset;
          min-width: 100%;
          border-radius: 0;
          height: max-content;
          max-height: 90vh;
          width: 100%;
          padding-bottom: 50px;
          max-height: 85vh;
        }

        #confirm-close {
          position: fixed;
          height: 100%;
          width: 100%;
        }

        .mobile-modal-close-btn {
          display: flex !important;
        }

        .LazerCheckout-footer {
          position: fixed;
          left: 0;
          align-items: center;
          bottom: ${f?"30px":"0px"};
          width: 100%;
          background: #ffffff;
          flex-direction: column;
          text-align: center;
          border-top: 0.5px solid #dfdfdf;
          padding: 20px 0;
        }
      }


      /* Tem fix checkout breaking style */
      .waiting-spinner {
        display: flex;
        justify-content: center;
        margin: auto;
      }

      #lazerpay-qr-code {
          display: flex;
          justify-content: center;
      }

      #lazer-section-four-confrim-transferBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 175px;
        margin: 20px auto 30px auto;
      }

      #lazer-section-six-made-transfer-tryAgain {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
      }

      #section6 svg {
          margin: auto;
      }

      #section7 svg {
          margin: auto;
      }

      #section8 svg {
          margin: auto;
      }

      #section9 svg {
          margin: auto;
      }

      #modal-closure-btn {
          padding: 0 0px 3px 1px;
      }

      @media(min-width: 768px){
        .lazer-section-two-paymentOption {
          cursor: pointer;
        }
      }

      @media(max-width: 540px){
        .LazerCheckout-body {
          height: 100vh;
          min-height: 0;
          max-height: 100vh;
        }
      }
    </style>
  `}w.id="__LazerpayPortal__",b.classList.add("LazerCheckout-overlay"),L.classList.add("LazerCheckout-container-wrapper"),b.appendChild(L),document.body.appendChild(w);let S=w.attachShadow({mode:"open"});S.appendChild(b);let T,F,B={},A=!0,j=n,_=s,q=e,H=t,P=i,M=o,$="",V={qrReady:!1};!function(r){if(!r.amount)return window.alert("Amount and coin must be passed");if(!r.key)return window.alert("Key must be passed");const e=document.createElement("script");e.src="https://js.pusher.com/7.0.3/pusher.min.js",e.title="__LazerpayScript__",e.async=!0;var t=()=>{T=new Pusher("be52401726705f906656",{cluster:"ap2"})};e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",()=>{console.log("::::Error connecting Pusher::::")}),document.body.appendChild(e);const n=document.createElement("script");n.type="text/javascript",n.src="https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js",n.title="__LazerpayScript__",n.onload=()=>V.qrReady=!0,document.body.appendChild(n),L.innerHTML=k(r);const s=S.querySelectorAll("#modal-closure-btn"),l=S.querySelector(".lazer-section-one"),c=S.querySelector(".lazer-section-three"),d=S.querySelector("#lazer-section-four-confrim-transferBtn"),p=S.querySelector("#lazer-section-six-made-transfer-tryAgain"),m=S.getElementById("nameInput"),h=S.getElementById("emailInput");setTimeout(()=>{Z(),l.classList.add("lazer-section-show");const e=S.querySelector(".lazer-section-eight-complete-payment"),t=S.querySelector(".lazer-section-one-button");S.querySelector(".lazer-copy-button").addEventListener("click",K);const n=S.querySelector(".LazerCheckout-body"),i=S.getElementById("confirm-close");s.forEach(e=>{e.addEventListener("click",()=>{i.setAttribute("style","display: flex"),s.forEach(e=>e?.setAttribute("style","display: none !important")),n.setAttribute("style","filter:  blur(8px); transition: .2s cubic-bezier(0.075, 0.82, 0.165, 1);")})});const o=S.querySelectorAll("#confirm-close-btn"),a={proceed:()=>R(),abort:()=>{n.setAttribute("style","filter: none"),i.setAttribute("style","display: none"),s.forEach(e=>e?.setAttribute("style","display: flex"))}};o.forEach(e=>{e.addEventListener("click",({target:e})=>a[e.getAttribute("data-action")]?.())}),d.addEventListener("click",J),m.addEventListener("input",()=>function(e,t,n){j=e.value,Number(e.value.length&&t.value.length&&Y(t.value))?(n.classList.remove("opacity"),n.removeAttribute("disabled")):(n.classList.add("opacity"),n.setAttribute("disabled",!0))}(m,h,t)),h.addEventListener("input",()=>function(e,t,n){q=t.value,Number(e.value.length&&t.value.length&&Y(t.value))?(n.classList.remove("opacity"),n.removeAttribute("disabled")):(n.classList.add("opacity"),n.setAttribute("disabled",!0))}(m,h,t)),e.addEventListener("click",U),t.addEventListener("click",()=>{j=m.value,q=h.value,S.querySelector("#LazerCheckoutEmailInput").innerText=h.value,W(c,l),G()}),async function(e,t,n){e.email&&e.name&&(await G(),W(t,n))}(r,c,l),p.addEventListener("click",Q)},2e3)}({email:q,name:j,amount:z,coin:i,currency:o,logo:a,key:r,lazerpay_user_reference:_,lazerpay_accept_partial_payment:l,payment_link_id:m,payment_button_id:h});const I=S.querySelectorAll(".lazer-section21232-amoun-coin-12332");let D=S.querySelectorAll(".lazer-section-three-coin-wrapper");a=S.querySelector(".initial-loader");const N=S.getElementById("go-back-coin-selection");function O(e){const t="string"==typeof e?S.querySelector(e):e;return t.innerHTML='<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',()=>{t.innerHTML=""}}const Z=O(a);function R(e=""){var t=document.querySelectorAll("style"),n=document.querySelectorAll("script");clearTimeout(window.lazerCountDownTimer),clearTimeout(window.lazerConfirmPaymentTimeOut),clearTimeout(window.lazerCopyTimer),S.removeChild(b),d?.(e),document.body.removeChild(w),[...t,...n].forEach(e=>{["__LazerpayStyle__","__LazerpayScript__","__LazerpayPortal__"].includes(e.title)&&e.remove()})}function G(){const c=S.querySelector("#lazer-section-three-spinner");O(c);try{fetch(u,{method:"GET",headers:{"Content-Type":"application/json","x-api-key":r}}).then(e=>e.json()).then(({status:e,message:t,data:n=[]}={})=>{const i=S.getElementById("coins-list");if(Z(),401===e&&t)return c.innerHTML=`<h3 id="lazer---id--errr">${t||"Error getting coins"}</h3>`;c.innerHTML="<h3>Select the coin you want to pay with:</h3>";for(var{logo:o,id:a,name:r,status:s,symbol:l}of[...n].reverse())"active"===s&&(i.innerHTML+=`
              <a role="button" tabindex="0" data-id=${a} data-coin=${l} id=${l} class="display-flex-between lazer-section-three-coin-wrapper">
                <div class="display-flex-align-center lazer-section-three-coin-container">
                  <div class="coin-image">
                    <img src=${o} alt=${r} />
                  </div>
                  <div>
                    <h2>${r}</h2>
                  </div>
                </div>
                <div>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 8L1 15" stroke="#DFDFDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </a>
            `)}).finally(()=>{Z(),ee({isDisabled:!1}),D=S.querySelectorAll(".lazer-section-three-coin-wrapper");for(let e=0;e<D.length;e++){const t=D[e];t.addEventListener("click",()=>te(t?.getAttribute("data-coin")))}})}catch(e){return Z(),c.innerHTML=`<h3 id="lazer---id--errr">${e?.message||"Error getting coins"}</h3>`}}function W(e,t){t.classList.remove("lazer-section-show"),t.classList.add("lazer-section-hide"),e.classList.remove("lazer-section-hide"),e.classList.add("lazer-section-show")}function U(){var e=S.querySelector(".lazer-section-four"),t=S.querySelector(".lazer-section-eight");let n=S.getElementById("header--fee"),i=S.getElementById("header-amount");if(W(e,t),X(A),l){const o=(C||{})["data"],a=o?.actualAmount-o?.amountPaid;I.forEach(e=>e.innerText=v(a)+" "+o?.currency),i.innerText=v(a)+" "+o?.currency,n.innerText=`(${v(y(a))} fee)`;t={...F,amount:a};F=t,te(o?.coin,F)}}function Q(){var e=S.querySelector(".lazer-section-six");W(S.querySelector(".lazer-section-four"),e),X(A),fetch(g,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":F.key},body:JSON.stringify({...F})}).then(async e=>{e=await e.json();B=e;const t=T.subscribe("DEPOSIT_EVENT");t.bind(""+e.address,e=>{ne()})}).catch(e=>{S.querySelector("#lazer-section-three-spinner").innerHTML=`<h3 id="lazer---id--errr">${e?.message||"Something went wrong. Please try again."}</h3>`})}function Y(e){return!!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}function J(){S.getElementById("lazerSectionProgressBar").innerText="0:0",S.getElementById("confirm-payment-amount").innerText=v(B?.cryptoAmount)+" "+B?.coin,A=!1,clearTimeout(window.lazerCountDownTimer);var e=S.querySelector(".lazer-section-four");W(S.querySelector(".lazer-section-five"),e),window.lazerConfirmPaymentTimeOut=setTimeout(()=>{S.getElementById("lazerSectionProgressBar").innerHTML="0:0",W(S.querySelector(".lazer-section-six"),S.querySelector(".lazer-section-five"))},6e5)}function K(){S.querySelector(".lazer-copy-button-text").innerText="Copied",navigator.clipboard.writeText(B.address),setTimeout(()=>{S.querySelector(".lazer-copy-button-text").innerText="Copy"},3e3)}function X(s,e){if(S.getElementById("lazerSectionProgressBar").innerHTML="4:59",e)return clearTimeout(window.lazerCountDownTimer),void(S.getElementById("lazerSectionProgressBar").innerHTML="0:0");function l(e){return e<0&&(e="59"),String(e).padStart(2,0)}!function e(){let t=S.getElementById("lazerSectionProgressBar").innerHTML;let n=t.split(/[:]+/);let i=n[0];let o=l(n[1]-1);59==o&&(i-=1);if(i<0)return;S.getElementById("lazerSectionProgressBar").innerHTML=i+":"+o;if(0==i&&0==o&&s){clearTimeout(window.lazerCountDownTimer),S.getElementById("lazerSectionProgressBar").innerHTML="0:0";const a=S.querySelector(".lazer-section-six "),r=S.querySelector(".lazer-section-four ");W(a,r)}window.lazerCountDownTimer=setTimeout(e,1e3)}()}function ee({isDisabled:t=!0,excludedCoins:n=[]}={}){D?.forEach(e=>n.includes(e.getAttribute("data-coin"))?void e.setAttribute("style",`pointer-events: ${t?"none":"initial"};`):null)}function te(t,e){ee(),document.querySelectorAll(".lazer-section-coin-address").forEach(e=>e.innerText=t+" Address"),document.querySelectorAll(".lazer-section21232-amoun-coin-12332").forEach(e=>e.innerText=v(H)+" "+o),P=t;var n={reference:_,customer_name:j,customer_email:q,amount:H,currency:M,coin:P,key:r,accept_partial_payment:l,payment_link_id:m,payment_button_id:h};F=e||n,O("#lazer-section-three-spinner");fetch(g,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":F.key},body:JSON.stringify({...F})}).then(async e=>{ee({isDisabled:!1});let t=await e.json();if([200,201,202].includes(e?.status)){$=t?.data?.businessName,S.querySelector("#lazer-section-three-spinner").innerHTML="<h3>Select coin you want to pay with</h3>",S.querySelector(".lazer-section-four-amount-to-payNOW").innerText=`${v(t?.data?.cryptoAmount)}  ${t?.data?.coin} `,S.querySelector(".lazer-section-address").innerText=t?.data?.address.slice(0,27)+"...",V.qrReady&&function({address:e,QRElement:t}){const n=new QRCodeStyling({width:130,height:130,type:"svg",data:e,image:"https://res.cloudinary.com/njokuscript/image/upload/v1644612600/logo_eqnl6x.svg",dotsOptions:{color:"#003585",type:"rounded"},cornersSquareOptions:{color:"#F18971"},backgroundOptions:{color:"transparent"},imageOptions:{crossOrigin:"anonymous",margin:8}});S.querySelector("#lazerpay-qr-code").innerHTML="",n.append(t)}({address:t?.data?.address,amountInBNB:t?.data?.cryptoAmount,QRElement:S.querySelector("#lazerpay-qr-code")});const n=T.subscribe("DEPOSIT_EVENT");n.bind(""+t?.data?.address,e=>{ne()}),B=t.data,X(A);const i=S.querySelector(".lazer-section-three"),o=S.querySelector(".lazer-section-four");W(o,i),N.addEventListener("click",()=>{W(i,o),X(A,!0),S.querySelector("#lazerpay-qr-code").innerHTML=""})}else S.querySelector("#lazer-section-three-spinner").innerHTML=`<h3 id="lazer---id--errr">${t?.message||"Something went wrong. Please try again."}</h3>`}).catch(e=>{ee({isDisabled:!1}),S.querySelector("#lazer-section-three-spinner").innerHTML=`<h3 id="lazer---id--errr">Error occurred: ${e.message||""}</h3>`})}function ne(){var e=S.querySelector(".lazer-section-four");const i=S.querySelector(".lazer-section-five");S.getElementById("lazerSectionProgressBar").innerHTML="0:0",A=!1,clearTimeout(window?.lazerCountDownTimer),clearTimeout(window?.lazerConfirmPaymentTimeOut),W(i,e),fetch(x+"/"+B?.address,{method:"GET",headers:{"Content-Type":"application/json","x-api-key":r}}).then(async e=>{const n=await e?.json();C=n;const t={error:()=>{W(S.querySelector(".lazer-section-nine"),i),p?.(n?.data)},confirmed:()=>{var e=S.querySelector("#section7");const t=S.querySelectorAll(".lazer-section-success-amount");t.forEach(e=>{var t="confirmedAmount"===e.getAttribute("data-id");if("footer-amount"!==e.getAttribute("data-id"))return e.innerHTML=`${v(n?.data?.amountPaid)} ${n?.data?.coin} 
                    `+(t?`<sub>(${v(n?.data?.feeInCrypto)} ${n?.data?.coin} fee)</sub>`:"")}),S.querySelector(".lazer-section-PaidTODATA").innerText="Paid to "+$,W(e,i),c?.(n?.data)},incomplete:()=>{S.querySelector(".lazer-section-four-amount-to-payNOW").innerText=`${v(n?.data?.actualAmount-n?.data?.amountPaid)}  ${n?.data?.coin} `,S.querySelector(".lazer-section-partial-amount-amountPaid").innerText=`${v(n?.data?.amountPaid)} ${n?.data?.coin} (-${v(n?.data?.feeInCrypto)} ${n?.data?.coin} fee)`,S.querySelector(".lazer-section-PaidTODATA-Partial").innerText="Paid to "+$,W(S.querySelector(".lazer-section-eight"),i),c&&c(n?.data)}};t[n?.data?.status]?.()}).catch(e=>{p?.(e.message||"Something went wrong, please try again.")})}return{closeModal:R}}
