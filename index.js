function LazerCheckout({email:e="",amount:t=0,name:n="",coin:i="",currency:g="",logo:o="",key:x="",callback:a,onClose:v,onError:r}){let z,y,w,b={},L=!0,S=n,V=e,H=t,E=i,k=g,B="",M={qrReady:!1},s=!1;const T=x?.includes("test"),F="https://api.lazerpay.engineering/api/v1/transaction/initialize",l="https://api.lazerpay.engineering/api/v1/transaction/verify",Z=e=>Number(e)?.toLocaleString()||"0.00";function j(){s=!s}function q(e,t){t.classList.remove("lazer-section-show"),t.classList.add("lazer-section-hide"),e.classList.remove("lazer-section-hide"),e.classList.add("lazer-section-show")}!function(a){if(!a.amount)return window.alert("Amount and coin should be passed");if(!a.key)return window.alert("Key not be passed");const e=document.createElement("script");e.src="https://js.pusher.com/7.0.3/pusher.min.js",e.title="__LazerpayScript__",e.async=!0;var t=()=>{z=new Pusher("be52401726705f906656",{cluster:"ap2"})};e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",()=>{console.log("::::Error connecting Pusher::::")}),document.body.appendChild(e);const n=document.createElement("script");n.type="text/javascript",n.src="https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js",n.title="__LazerpayScript__",n.onload=()=>M.qrReady=!0,document.body.appendChild(n),y=document.createElement("div"),y.classList.add("LazerCheckout-overlay");const i=document.createElement("div");i.classList.add("LazerCheckout-container-wrapper"),i.innerHTML=function(e){return`
            <button class="modal-close-btn LazerCheckout-close-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.98242 1.42897L6.01781 12.5708M12.571 7.98218L1.4292 6.01758L12.571 7.98218Z" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            ${T?'<div class="Lazer-dev-env">TestNet</div>':""}
          <div class="LazerCheckout-body">
          <div class="LazerCheckout-container-header-wrapper">
              <div class="LazerCheckout-logo">
                ${e.logo?`<img src=${e.logo} alt="wallet-img">`:`<svg width="115" height="28" viewBox="0 0 115 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5322 17.0944H14.1878H14.1202C14.0376 17.1019 13.9549 17.1019 13.8723 17.0944H10.9131V14.1727V14.0976C10.9131 14.0901 10.9131 14.0826 10.9131 14.0826C10.9131 14.0601 10.9131 14.0376 10.9131 14.015C10.9131 13.985 10.9131 13.9549 10.9131 13.9324V13.9099V5.45279C10.9131 2.44099 8.46459 0 5.4603 0C2.4485 0 0 2.4485 0 5.45279V14C0 17.0043 2.4485 19.4528 5.4603 19.4528C5.5279 19.4528 5.59549 19.4528 5.6706 19.4603H8.54721V22.7049V22.75C8.65987 25.6942 11.0558 28 14 28H22.5397C25.544 28 27.9925 25.5515 27.9925 22.5472C27.9925 19.5354 25.544 17.0944 22.5322 17.0944ZM5.76824 17.0944C5.65558 17.0869 5.55043 17.0869 5.44528 17.0869C3.74785 17.0869 2.36588 15.7049 2.36588 14V5.45279C2.36588 3.75536 3.74785 2.36588 5.45279 2.36588C7.15021 2.36588 8.5397 3.74785 8.5397 5.45279V13.8047C8.5397 13.8197 8.5397 13.8423 8.5397 13.8573C8.5397 13.9099 8.5397 13.9549 8.5397 14.0075C8.5397 14.0601 8.5397 14.1127 8.5397 14.1652V14.2028V17.0869H5.76824V17.0944ZM22.5322 25.6266H13.9925C12.3326 25.6266 10.9807 24.3348 10.9131 22.6824V19.4678H13.7672C13.9174 19.4753 14.0601 19.4753 14.2103 19.4678H22.5322C24.2296 19.4678 25.6116 20.8498 25.6116 22.5472C25.6191 24.2446 24.2371 25.6266 22.5322 25.6266Z" fill="#121B54"/>
                  <path opacity="0.76" d="M10.9057 19.4668V22.2683H8.53979V19.4668H10.9057Z" fill="url(#paint0_linear_3874:3323)"/>
                  <path opacity="0.76" d="M8.53979 17.0949V12.6035H10.9057V17.0949H8.53979Z" fill="url(#paint1_linear_3874:3323)"/>
                  <path d="M35 5.25H37.5671V16.4032H43.75V18.8502H35V5.25V5.25Z" fill="#121B54"/>
                  <path d="M63.4893 16.5239V18.8507H55.0889V14.7651L61.1516 11.8157V11.4661H55.209V9.21582H63.249V13.1812L57.1862 16.1743V16.5239H63.4893V16.5239Z" fill="#121B54"/>
                  <path d="M66.7884 14.8303C66.7993 15.1144 66.8648 15.3765 66.9959 15.6168C67.1161 15.8572 67.2909 16.0647 67.4984 16.2395C67.7169 16.4143 67.9572 16.5454 68.2412 16.6437C68.5143 16.742 68.8093 16.7857 69.1261 16.7857C69.7378 16.7857 70.1966 16.6765 70.5243 16.4689C70.852 16.2504 71.0814 15.9992 71.2234 15.7042L73.3208 16.8731C73.2007 17.1243 73.0368 17.3756 72.8402 17.6378C72.6326 17.8999 72.3595 18.1512 72.0318 18.3697C71.7041 18.5881 71.2999 18.7738 70.8302 18.9159C70.3605 19.0579 69.8033 19.1343 69.1698 19.1343C68.4488 19.1343 67.7824 19.0142 67.1925 18.7848C66.5917 18.5554 66.0783 18.2167 65.6523 17.7688C65.2153 17.3319 64.8767 16.7857 64.6364 16.1521C64.396 15.5185 64.2759 14.7976 64.2759 14.0001V13.88C64.2759 13.1371 64.407 12.4708 64.6582 11.8591C64.9095 11.2473 65.259 10.7339 65.696 10.3079C66.1329 9.88183 66.6464 9.54319 67.2362 9.30287C67.8261 9.06254 68.4597 8.94238 69.1261 8.94238C69.9563 8.94238 70.6663 9.08439 71.2671 9.37934C71.868 9.67428 72.3595 10.0348 72.7419 10.4826C73.1351 10.9305 73.4191 11.4221 73.5939 11.9574C73.7796 12.4926 73.867 13.017 73.867 13.5195V14.8194H66.7884V14.8303ZM69.1042 11.1599C68.4816 11.1599 67.9791 11.3238 67.5858 11.6406C67.1925 11.9574 66.9413 12.3288 66.8321 12.7439H71.3764C71.2999 12.2851 71.0596 11.9137 70.6445 11.6187C70.2403 11.3129 69.7269 11.1599 69.1042 11.1599Z" fill="#121B54"/>
                  <path d="M86.3529 22.7501H83.906V9.21548H86.3529V10.6137H86.7025C86.9647 10.0785 87.3361 9.67428 87.8277 9.37934C88.3192 9.08439 88.9528 8.94238 89.7175 8.94238C90.2855 8.94238 90.8317 9.05162 91.3451 9.2701C91.8586 9.48858 92.3064 9.81629 92.6888 10.2314C93.0711 10.6574 93.377 11.1708 93.6064 11.7717C93.8358 12.3834 93.945 13.0716 93.945 13.8472V14.1967C93.945 14.9833 93.8358 15.6824 93.6173 16.2941C93.3988 16.9059 93.1039 17.4193 92.7215 17.8344C92.3501 18.2604 91.9023 18.5772 91.3888 18.7848C90.8754 19.0032 90.3183 19.1016 89.7284 19.1016C89.2915 19.1016 88.9091 19.0579 88.5814 18.9705C88.2537 18.8831 87.9806 18.752 87.7403 18.5991C87.4999 18.4461 87.3033 18.2604 87.1395 18.0638C86.9756 17.8672 86.8336 17.6487 86.7244 17.4302H86.3748V22.7501H86.3529ZM88.92 16.7966C89.6847 16.7966 90.3074 16.5563 90.7771 16.0866C91.2468 15.6168 91.4872 14.9723 91.4872 14.1531V13.9237C91.4872 13.1044 91.2468 12.4599 90.7771 11.9901C90.3074 11.5204 89.6847 11.2801 88.92 11.2801C88.1554 11.2801 87.5327 11.5204 87.063 12.012C86.5933 12.4926 86.3529 13.1371 86.3529 13.9237V14.1531C86.3529 14.9396 86.5933 15.5841 87.063 16.0647C87.5436 16.5563 88.1554 16.7966 88.92 16.7966Z" fill="#121B54"/>
                  <path d="M111.707 9.21582H114.154V21.2211C114.154 21.6581 114.012 22.0295 113.739 22.3135C113.455 22.5975 113.105 22.7395 112.658 22.7395H106.923V20.4128H111.183C111.532 20.4128 111.707 20.2161 111.707 19.8338V17.4633H111.358C110.932 18.5776 110.014 19.1347 108.594 19.1347C108.113 19.1347 107.665 19.0582 107.25 18.9053C106.835 18.7523 106.475 18.512 106.158 18.1843C105.852 17.8566 105.601 17.4524 105.426 16.9718C105.251 16.4911 105.164 15.9121 105.164 15.2567V9.23767H107.611V14.7542C107.611 15.4424 107.775 15.9777 108.091 16.36C108.419 16.7423 108.9 16.9281 109.544 16.9281C110.287 16.9281 110.822 16.6877 111.172 16.218C111.511 15.7483 111.685 15.1038 111.685 14.2845V9.21582H111.707Z" fill="#121B54"/>
                  <path d="M51.2657 9.21548V10.3843H50.9162C50.6649 9.89276 50.3372 9.53227 49.9112 9.29194C49.4851 9.06254 48.9389 8.94238 48.2507 8.94238C47.6827 8.94238 47.1474 9.05162 46.6449 9.28102C46.1424 9.51042 45.7055 9.83814 45.3341 10.2642C44.9627 10.6902 44.6568 11.2145 44.4383 11.8154C44.2198 12.4271 44.1106 13.1153 44.1106 13.88V14.1858C44.1106 14.9614 44.2198 15.6605 44.4492 16.2614C44.6786 16.8731 44.9845 17.3865 45.3668 17.8125C45.7601 18.2386 46.208 18.5663 46.7214 18.7848C47.2348 19.0032 47.781 19.1125 48.36 19.1125C48.9826 19.1125 49.5288 18.9814 49.9876 18.7301C50.4574 18.4789 50.8178 18.0419 51.08 17.4411H51.4187V18.8394H52.9261H53.7017V17.4302V15.9227V14.3825V9.20455H51.2657V9.21548ZM51.2657 14.1531C51.2657 14.9723 51.0472 15.6168 50.6212 16.0866C50.1952 16.5563 49.6271 16.7966 48.9062 16.7966C48.1961 16.7966 47.6281 16.5563 47.1911 16.0866C46.7651 15.6168 46.5466 14.9723 46.5466 14.1531V13.9237C46.5466 13.1044 46.7651 12.4599 47.1911 11.9901C47.6171 11.5204 48.1852 11.2801 48.9062 11.2801C49.6162 11.2801 50.1843 11.5204 50.6212 11.9901C51.0472 12.4599 51.2657 13.1044 51.2657 13.9237V14.1531Z" fill="#121B54"/>
                  <path d="M101.81 9.21548V10.3843H101.461C101.209 9.89276 100.882 9.53227 100.456 9.29194C100.03 9.06254 99.4834 8.94238 98.7952 8.94238C98.2271 8.94238 97.6919 9.05162 97.1894 9.28102C96.6869 9.51042 96.2499 9.83814 95.8785 10.2642C95.5071 10.6902 95.2012 11.2145 94.9827 11.8154C94.7643 12.4271 94.655 13.1153 94.655 13.88V14.1858C94.655 14.9614 94.7643 15.6605 94.9937 16.2614C95.2231 16.8731 95.5289 17.3865 95.9113 17.8125C96.3045 18.2386 96.7524 18.5663 97.2658 18.7848C97.7793 19.0032 98.3254 19.1125 98.9044 19.1125C99.5271 19.1125 100.073 18.9814 100.532 18.7301C101.002 18.4789 101.362 18.0419 101.624 17.4411H101.963V18.8394H103.471H104.246V17.4302V15.9227V14.3825V9.20455H101.81V9.21548ZM101.81 14.1531C101.81 14.9723 101.592 15.6168 101.166 16.0866C100.74 16.5563 100.172 16.7966 99.4506 16.7966C98.7406 16.7966 98.1725 16.5563 97.7356 16.0866C97.3095 15.6168 97.091 14.9723 97.091 14.1531V13.9237C97.091 13.1044 97.3095 12.4599 97.7356 11.9901C98.1616 11.5204 98.7296 11.2801 99.4506 11.2801C100.161 11.2801 100.729 11.5204 101.166 11.9901C101.592 12.4599 101.81 13.1044 101.81 13.9237V14.1531Z" fill="#121B54"/>
                  <path d="M82.3766 9.84906C81.7977 9.24825 81.0221 8.94238 80.0608 8.94238C79.449 8.94238 78.9356 9.08439 78.4987 9.37934C78.0617 9.67428 77.7558 10.0785 77.5701 10.6137H77.2206V9.21548H74.8938V11.5423V16.5126V18.8394H77.3407V14.7648H77.3517V13.3993C77.3517 12.7002 77.5046 12.1649 77.8214 11.7826C78.1273 11.4112 78.5642 11.2145 79.0995 11.2145C79.6457 11.2145 80.0498 11.3784 80.3229 11.6952C80.596 12.012 80.7271 12.438 80.7271 12.9733V13.2464L83.2505 13.017V12.5909C83.2505 11.3675 82.9556 10.4499 82.3766 9.84906Z" fill="#121B54"/>
                  <defs>
                  <linearGradient id="paint0_linear_3874:3323" x1="9.69004" y1="22.4323" x2="9.77304" y2="18.5106" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#121B54"/>
                  <stop offset="0.4038" stop-color="#101B50"/>
                  <stop offset="0.7642" stop-color="#0A1C46"/>
                  <stop offset="1" stop-color="#041D3A"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_3874:3323" x1="9.77594" y1="12.3557" x2="9.64395" y2="18.5909" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#121B54"/>
                  <stop offset="0.4038" stop-color="#101B50"/>
                  <stop offset="0.7642" stop-color="#0A1C46"/>
                  <stop offset="1" stop-color="#041D3A"/>
                  </linearGradient>
                  </defs>
                  </svg>`}
              </div>

              <div class="LazerCheckout-header-right">
                <div class="LazerCheckout-header-right-email">
                  <span id="LazerCheckoutEmailInput">${e.email||""}</span>
                </div>
                <div  class="LazerCheckout-header-right-amount lazer-section21232-amoun-coin-12332"> ${Z(e.amount)} ${e.currency}</div>
              </div>
          </div>

          <div class="LazerCheckout-container-body">
            <!-- First section - Initilization screen -->
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

            <div class="lazer-section-one-input-wrapper mt-28">
                <h2>Full name</h2>
                <input type="text" id="nameInput" class="nameInput" placeholder="eg Taiwo Femi">
            </div>

            <div class="lazer-section-one-input-wrapper mt-20">
                <h2>Email address</h2>
                <input type="email" id="nameInput" class="nameInput" placeholder="eg taiwo@example.com">
            </div>

            <div class="lazer-section-one-button-wrapper mt-16">
              <button class="lazer-section-one-button opacity">
                Continue
              </button>
            </div>
          </div>
          <!-- End of first section -->

          <!-- second section- Payment Options -->
          <div id="section2" class="lazer-section-two lazer-section-hide" >
            <div class="lazer-section-two-paymentOption">
              <div>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#F7F9FE"/>
                  <path d="M22.8402 23.3591H42.0411C42.2653 23.3589 42.4894 23.3732 42.7119 23.4017C42.6365 22.8723 42.4546 22.3637 42.1774 21.9065C41.9001 21.4493 41.5331 21.053 41.0985 20.7415C40.6639 20.43 40.1707 20.2097 39.6487 20.0939C39.1267 19.9782 38.5866 19.9693 38.0611 20.0679L22.2701 22.7638H22.2521C21.2609 22.9534 20.3795 23.5142 19.7878 24.3317C20.6792 23.6977 21.7463 23.3576 22.8402 23.3591ZM42.0411 24.7991H22.8402C21.822 24.8002 20.8459 25.2052 20.126 25.9251C19.4061 26.645 19.0011 27.6212 19 28.6393V40.1598C19.0011 41.178 19.4061 42.1541 20.126 42.874C20.8459 43.5939 21.822 43.9989 22.8402 44H42.0411C43.0592 43.9989 44.0353 43.5939 44.7552 42.874C45.4752 42.1541 45.8801 41.178 45.8812 40.1598V28.6393C45.8801 27.6212 45.4752 26.645 44.7552 25.9251C44.0353 25.2052 43.0592 24.8002 42.0411 24.7991ZM39.1909 36.3196C38.8112 36.3196 38.4399 36.207 38.1242 35.9961C37.8084 35.7851 37.5623 35.4852 37.417 35.1343C37.2717 34.7835 37.2336 34.3974 37.3077 34.025C37.3818 33.6525 37.5647 33.3104 37.8332 33.0419C38.1017 32.7733 38.4439 32.5905 38.8163 32.5164C39.1888 32.4423 39.5749 32.4803 39.9257 32.6256C40.2766 32.771 40.5764 33.0171 40.7874 33.3328C40.9984 33.6486 41.111 34.0198 41.111 34.3996C41.111 34.9088 40.9087 35.3972 40.5486 35.7573C40.1885 36.1174 39.7002 36.3196 39.1909 36.3196Z" fill="#003585"/>
                  <path d="M19.03 32.6896V26.7193C19.03 25.4191 19.7501 23.2392 22.2492 22.767C24.3703 22.3691 26.4704 22.3691 26.4704 22.3691C26.4704 22.3691 27.8504 23.3292 26.7104 23.3292C25.5703 23.3292 25.6003 24.7993 26.7104 24.7993C27.8204 24.7993 26.7104 26.2093 26.7104 26.2093L22.2402 31.2795L19.03 32.6896Z" fill="#003585"/>
                </svg>
              </div>
              <div class="lazer-section-two-paymentOption-content-wrapper">
                  <h2 class="lazer-section-two-paymentOption-header">Pay with Mobile wallets</h2>
                  <p class="lazer-section-two-paymentOption-info">With LazerPay, you can pay</p>
                  <p class="lazer-section-two-paymentOption-info">directly with your local wallets</p>
              </div>
              <div>
                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 11L1 21" stroke="#DFDFDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <div class="lazer-comming-soon lazer-payment-option-border-bottom">
              <img src="https://res.cloudinary.com/joel116/image/upload/v1635955805/Screenshot_2021-11-03_at_17.09.48.png" alt="wallet-img">
            </div>

            <div class="lazer-comming-soon">
                <img src="https://res.cloudinary.com/joel116/image/upload/v1635955159/Screenshot_2021-11-03_at_16.51.14.png" alt="wallet-img">
            </div>
        </div>
        <!-- End of second section -->

        <!-- Start of 3 section - Coin selections -->
        <div id="section3" class="lazer-section-three lazer-section-hide" >
          <div id="lazer-section-three-spinner" class="lazer-section-three-heading">
              <h3>Select coin you want to pay with:</h3>
          </div>
          <a role="button" tabindex="0" data-coin="USDT" id="USDT" class="display-flex-between lazer-section-three-coin-wrapper">
            <div class="display-flex-align-center lazer-section-three-coin-container">
              <div>
                  <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.8589 0.136722L0.0239886 12.393C0.00178511 12.4386 -0.00525104 12.49 0.00390914 12.5399C0.0130693 12.5898 0.0379453 12.6354 0.0748992 12.6701L15.8336 27.7708C15.8784 27.8137 15.938 27.8377 16 27.8377C16.062 27.8377 16.1216 27.8137 16.1664 27.7708L31.9251 12.6711C31.9621 12.6364 31.9869 12.5907 31.9961 12.5409C32.0052 12.491 31.9982 12.4395 31.976 12.3939L26.1411 0.137665C26.1223 0.0965036 26.092 0.0616345 26.0539 0.0372252C26.0157 0.0128159 25.9714 -0.000100971 25.9261 1.82452e-05H6.07574C6.03026 -0.000547581 5.98559 0.0120582 5.94711 0.0363149C5.90864 0.0605716 5.878 0.095443 5.8589 0.136722Z" fill="#50AF95"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0246 13.6517C17.9115 13.6602 17.327 13.6951 16.0231 13.6951C14.986 13.6951 14.2497 13.664 13.9914 13.6517C9.98361 13.4754 6.99215 12.7777 6.99215 11.9424C6.99215 11.1071 9.98361 10.4104 13.9914 10.2313V12.9569C14.2535 12.9757 15.004 13.02 16.041 13.02C17.2855 13.02 17.9087 12.9682 18.0209 12.9578V10.2332C22.0202 10.4113 25.005 11.109 25.005 11.9424C25.005 12.7758 22.0211 13.4735 18.0209 13.6508L18.0246 13.6517ZM18.0246 9.95126V7.51227H23.6059V3.79297H8.4101V7.51227H13.9905V9.95031C9.45471 10.1587 6.0437 11.0571 6.0437 12.1338C6.0437 13.2105 9.45471 14.108 13.9905 14.3173V22.133H18.0237V14.3145C22.5491 14.1061 25.9544 13.2086 25.9544 12.1329C25.9544 11.0571 22.5519 10.1596 18.0237 9.95031L18.0246 9.95126Z" fill="white"/>
                  </svg>
              </div>
              <div>
                <h2>USD Tether</h2>
              </div>
            </div>
            <div>
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L1 15" stroke="#DFDFDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>

          <a role="button" tabindex="0" data-coin="USDC" id="USD" class="display-flex-between lazer-section-three-coin-wrapper">
            <div class="display-flex-align-center lazer-section-three-coin-container">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 32C24.8667 32 32 24.8667 32 16C32 7.13328 24.8667 0 16 0C7.13328 0 0 7.13328 0 16C0 24.8667 7.13328 32 16 32Z" fill="#2775CA"/>
                  <path d="M20.4001 18.5328C20.4001 16.1995 19.0001 15.3995 16.2001 15.0663C14.2001 14.7995 13.8001 14.2663 13.8001 13.3328C13.8001 12.3994 14.4668 11.7995 15.8001 11.7995C17.0001 11.7995 17.6668 12.1995 18.0001 13.1995C18.0668 13.3995 18.2668 13.5328 18.4668 13.5328H19.5334C19.8001 13.5328 20.0001 13.3328 20.0001 13.0663V12.9995C19.7334 11.5328 18.5334 10.3995 17.0001 10.2663V8.66625C17.0001 8.39953 16.8001 8.19953 16.4668 8.13281H15.4668C15.2001 8.13281 15.0001 8.33281 14.9334 8.66625V10.1995C12.9334 10.4663 11.6668 11.7995 11.6668 13.4663C11.6668 15.6663 13.0001 16.5328 15.8001 16.8663C17.6668 17.1995 18.2668 17.5995 18.2668 18.6663C18.2668 19.733 17.3334 20.4663 16.0668 20.4663C14.3334 20.4663 13.7334 19.7328 13.5334 18.7328C13.4668 18.4663 13.2668 18.3328 13.0668 18.3328H11.9334C11.6668 18.3328 11.4668 18.5328 11.4668 18.7995V18.8663C11.7334 20.5328 12.8001 21.7328 15.0001 22.0663V23.6663C15.0001 23.9328 15.2001 24.1328 15.5334 24.1995H16.5334C16.8001 24.1995 17.0001 23.9995 17.0668 23.6663V22.0663C19.0668 21.7328 20.4001 20.3328 20.4001 18.5328Z" fill="white"/>
                  <path d="M12.6001 25.5336C7.40008 23.667 4.73336 17.867 6.6668 12.7336C7.6668 9.93355 9.8668 7.80027 12.6001 6.80027C12.8668 6.66699 13.0001 6.46699 13.0001 6.13355V5.20027C13.0001 4.93355 12.8668 4.73355 12.6001 4.66699C12.5334 4.66699 12.4001 4.66699 12.3334 4.73355C6.00008 6.73355 2.53336 13.467 4.53336 19.8003C5.73336 23.5336 8.60008 26.4003 12.3334 27.6003C12.6001 27.7336 12.8668 27.6003 12.9334 27.3336C13.0001 27.267 13.0001 27.2003 13.0001 27.067V26.1336C13.0001 25.9336 12.8001 25.667 12.6001 25.5336ZM19.6668 4.73355C19.4001 4.60027 19.1334 4.73355 19.0668 5.00027C19.0001 5.06699 19.0001 5.13355 19.0001 5.26699V6.20027C19.0001 6.46699 19.2001 6.73355 19.4001 6.86699C24.6001 8.73355 27.2668 14.5336 25.3334 19.667C24.3334 22.467 22.1334 24.6003 19.4001 25.6003C19.1334 25.7336 19.0001 25.9336 19.0001 26.267V27.2003C19.0001 27.467 19.1334 27.667 19.4001 27.7336C19.4668 27.7336 19.6001 27.7336 19.6668 27.667C26.0001 25.667 29.4668 18.9336 27.4668 12.6003C26.2668 8.80027 23.3334 5.93355 19.6668 4.73355Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h2>USD Coin</h2>
              </div>
            </div>
            <div>
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L1 15" stroke="#DFDFDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>

          <a role="button" tabindex="0" data-coin="BUSD" id="BUSD" class="display-flex-between lazer-section-three-coin-wrapper">
            <div class="display-flex-align-center lazer-section-three-coin-container">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.78534 13.4467L16 7.232L22.2176 13.4493L25.8336 9.83334L16 0L6.1696 9.8304L9.78547 13.4464L9.78534 13.4467ZM0 16L3.61613 12.3834L7.232 15.9992L3.61587 19.6154L0 16ZM9.78534 18.5537L16 24.768L22.2175 18.5508L25.8354 22.1649L25.8336 22.1668L16 32L6.1696 22.1696L6.16448 22.1645L9.78573 18.5533L9.78534 18.5537ZM24.768 16.0015L28.3841 12.3854L32 16.0013L28.384 19.6174L24.768 16.0015Z" fill="#F3BA2F"/>
                  <path d="M19.6675 15.9984H19.669L16 12.3291L13.2881 15.0403L12.9765 15.3519L12.334 15.9946L12.3289 15.9996L12.334 16.0049L16 19.6714L19.6693 16.0022L19.6711 16.0001L19.6677 15.9984" fill="#F3BA2F"/>
                </svg>
              </div>
              <div>
                <h2>Binance USD</h2>
              </div>
            </div>

            <div>
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L1 15" stroke="#DFDFDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>

          <a role="button" tabindex="0" data-coin="DAI" id="DAI" class="display-flex-between lazer-section-three-coin-wrapper">
            <div class="display-flex-align-center lazer-section-three-coin-container">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C24.8374 0 32 7.16407 32 16C32 24.8374 24.8374 32 16 32C7.16407 32 0 24.8366 0 16C0 7.16407 7.16407 0 16 0Z" fill="#F5AC37"/>
                <path d="M16.5883 17.1298H22.668C22.7976 17.1298 22.8588 17.1298 22.8682 16.9599C22.9179 16.3414 22.9179 15.7193 22.8682 15.1001C22.8682 14.9799 22.8084 14.9302 22.6781 14.9302H10.5784C10.4286 14.9302 10.3883 14.9799 10.3883 15.1203V16.9001C10.3883 17.1298 10.3883 17.1298 10.6281 17.1298H16.5883V17.1298ZM22.1892 12.8501C22.2065 12.8047 22.2065 12.7551 22.1892 12.7104C22.0877 12.4894 21.9675 12.2784 21.8278 12.0804C21.6175 11.742 21.3699 11.4302 21.0876 11.1502C20.9544 10.981 20.8003 10.829 20.6275 10.7002C19.7621 9.96359 18.7332 9.44231 17.6273 9.18022C17.0693 9.05494 16.499 8.99518 15.9273 9.00022H10.5575C10.4078 9.00022 10.3876 9.05998 10.3876 9.1903V12.7399C10.3876 12.8897 10.3876 12.93 10.5777 12.93H22.1172C22.1172 12.93 22.2173 12.9099 22.2375 12.8501H22.1885H22.1892ZM22.1892 19.2099C22.0193 19.1912 21.8479 19.1912 21.678 19.2099H10.5885C10.4387 19.2099 10.3883 19.2099 10.3883 19.4101V22.8805C10.3883 23.0404 10.3883 23.0807 10.5885 23.0807H15.7084C15.9532 23.0994 16.198 23.0821 16.4378 23.031C17.1809 22.9777 17.9117 22.8164 18.6086 22.5508C18.8621 22.4629 19.1069 22.3484 19.338 22.2109H19.4078C20.6081 21.5867 21.583 20.606 22.1979 19.4022C22.1979 19.4022 22.2677 19.251 22.1892 19.2114V19.2099ZM8.37877 24.88V24.8202V22.4903V21.7004V19.3503C8.37877 19.22 8.37877 19.2006 8.21893 19.2006H6.04883C5.92859 19.2006 5.87891 19.2006 5.87891 19.0407V17.1406H8.19877C8.32837 17.1406 8.37877 17.1406 8.37877 16.9707V15.0908C8.37877 14.9705 8.37877 14.941 8.21893 14.941H6.04883C5.92859 14.941 5.87891 14.941 5.87891 14.7812V13.0215C5.87891 12.9113 5.87891 12.8818 6.03875 12.8818H8.18869C8.33845 12.8818 8.37877 12.8818 8.37877 12.6917V7.30172C8.37877 7.14188 8.37877 7.10156 8.57893 7.10156H16.0785C16.6229 7.12316 17.1636 7.18292 17.6985 7.28156C18.8009 7.48533 19.86 7.87917 20.8284 8.4415C21.4707 8.8195 22.0618 9.27598 22.5881 9.80159C22.9841 10.2127 23.3412 10.6577 23.658 11.1314C23.9727 11.6117 24.234 12.1251 24.4393 12.6615C24.4645 12.8011 24.5984 12.8955 24.7381 12.8717H26.528C26.7577 12.8717 26.7577 12.8717 26.7678 13.092V14.7322C26.7678 14.892 26.708 14.9324 26.5474 14.9324H25.1672C25.0275 14.9324 24.9872 14.9324 24.9973 15.1124C25.052 15.7215 25.052 16.3328 24.9973 16.9419C24.9973 17.1118 24.9973 17.132 25.1881 17.132H26.767C26.8369 17.222 26.767 17.312 26.767 17.4027C26.7771 17.5186 26.7771 17.636 26.767 17.7519V18.9622C26.767 19.1322 26.7174 19.1826 26.5669 19.1826H24.6769C24.5451 19.1574 24.4169 19.2416 24.3867 19.3726C23.9367 20.5427 23.2167 21.5917 22.2864 22.4327C21.9466 22.7387 21.5895 23.0267 21.2165 23.2924C20.8162 23.5228 20.4266 23.7625 20.0162 23.9526C19.261 24.2925 18.469 24.543 17.6561 24.7021C16.8842 24.8404 16.1016 24.903 15.316 24.8922H8.37589V24.8821L8.37877 24.88Z" fill="#FEFEFD"/>
                </svg>
              </div>
              <div>
                <h2>Dai</h2>
              </div>
            </div>
            <div>
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L1 15" stroke="#DFDFDF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
        <!-- End  of 3 section -->


        <!-- Start of 4 section - Payment Processing -->
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
            </div>

            <div class="lazer-section-four-amount-to-pay">
                <p>Amount to pay:</p>
                <h2 class="lazer-section-four-amount-to-payNOW lazer-section21232-amoun-coin-12332">5${Z(e.amount)} ${e.coin}</h2>
            </div>

            <div class="display-flex-center">
              <div class="lazer-section-four-address-input">
                <div>
                  <p class="lazer-section-coin-address">${e.coin} Address</p>
                <h2 class="lazer-section-address">3DehZyqfqRQHRuWkd5kHxSt...</h2>
                </div>
                <button class="copy-button lazer-copy-button">
                  <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633226142/Lazerpay/copy_hspcts.png" alt="clipboard">
                  <span class="lazer-copy-button-text">Copy</span>
                </button>
              </div>
            </div>

            <div class="display-flex-center">
              <div class="lazer-section-four-address-input">
                <div>
                  <p>Network </p>
                  <h2 class="lazer-section-network">Binance Smart Chain(BEP20) </h2>
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
                <p class="text-warning"> Please make sure you’re sending tokens from a BEP-20 Network. Sending from another network would lead to loss of tokens. </p>
            </div>
          </div>
        </div>
        <!-- End  of 4 section -->

        <!-- START  of 5 section - Waiting screen -->
        <div id="section5" class="lazer-section-five lazer-section-hide" >
          <div class="lazer-section-five-heading lazer-section-six-heading">
              <svg class="waiting-spinner" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 0C16.1498 0 0 16.1498 0 36C0 55.8502 16.1498 72 36 72C55.8502 72 72 55.8502 72 36C72 16.1498 55.8502 0 36 0ZM56.7692 31.526C56.7692 31.9216 56.612 32.3011 56.3323 32.5809C56.0525 32.8607 55.673 33.0179 55.2773 33.0179H44.9723C44.6771 33.0184 44.3885 32.9311 44.1429 32.7673C43.8974 32.6035 43.706 32.3705 43.5931 32.0977C43.4802 31.825 43.4508 31.5249 43.5087 31.2354C43.5666 30.946 43.7091 30.6802 43.9183 30.4719L47.7554 26.6348L46.7862 25.5081C45.0525 23.7083 42.8998 22.3661 40.5207 21.6016C38.1415 20.8371 35.6099 20.6741 33.1524 21.1271C30.6948 21.5802 28.3878 22.6351 26.4376 24.1977C24.4874 25.7603 22.9548 27.7817 21.9768 30.0814C20.9988 32.3811 20.6059 34.8873 20.8333 37.3759C21.0606 39.8645 21.9011 42.258 23.2796 44.3424C24.6581 46.4268 26.5316 48.1371 28.7327 49.3204C30.9337 50.5038 33.3937 51.1232 35.8927 51.1235C39.0202 51.1205 42.0701 50.15 44.6241 48.345C47.1781 46.5399 49.111 43.9889 50.1577 41.0417C50.2789 40.6985 50.4666 40.3826 50.71 40.1119C50.9534 39.8412 51.2477 39.6211 51.5761 39.4642C51.9045 39.3072 52.2606 39.2165 52.6241 39.1972C52.9876 39.1779 53.3513 39.2304 53.6945 39.3516C54.0377 39.4729 54.3537 39.6606 54.6244 39.9039C54.895 40.1473 55.1151 40.4416 55.2721 40.77C55.429 41.0984 55.5197 41.4546 55.539 41.8181C55.5583 42.1815 55.5059 42.5453 55.3846 42.8885C54.1224 46.4605 51.9026 49.6168 48.9677 52.0125C46.0329 54.4082 42.496 55.951 38.7435 56.4723C34.9911 56.9936 31.1675 56.4733 27.6908 54.9684C24.214 53.4635 21.2179 51.0318 19.0298 47.9391C16.8417 44.8464 15.5459 41.2117 15.2839 37.4323C15.022 33.6528 15.8041 29.8742 17.5446 26.5092C19.2851 23.1442 21.9172 20.3224 25.1531 18.3523C28.389 16.3821 32.1042 15.3394 35.8927 15.3381C38.6887 15.3274 41.4573 15.8893 44.0279 16.9891C46.5985 18.089 48.9166 19.7035 50.8396 21.7333L50.9365 21.8406L51.6825 22.706L54.2233 20.1652C54.3586 20.0268 54.5201 19.9166 54.6984 19.8411C54.8766 19.7657 55.0681 19.7264 55.2617 19.7256C55.4587 19.724 55.6541 19.7615 55.8365 19.8358C56.019 19.9102 56.1848 20.0201 56.3245 20.159C56.4642 20.2979 56.575 20.4631 56.6505 20.6451C56.7259 20.8271 56.7645 21.0222 56.764 21.2192L56.7692 31.526Z" fill="url(#paint0_linear_4036:3567)"/>
                <defs>
                  <linearGradient id="paint0_linear_4036:3567" x1="36" y1="0" x2="36" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A5A5A5"/>
                    <stop offset="1" stop-color="#595959"/>
                  </linearGradient>
                </defs>
              </svg>
          </div>
          <div class="lazer-section-five-content">
            <h2 class="lazer-section-five-content-eefdf">
              Confirming payment of <br> <b id="confirm-payment-amount">00</b>
            </h2>
            <div class="lazer-section-five-content-jefjhef">
              <p class="lazer-section-five-content-xxed">Your transaction is processing,</p>
              <p class="lazer-section-five-content-xxed">please hold on for payment confirmation.</p>
            </div>
              <p class="lazer-section-five-content-ppss">
                <span class="lazer-section-five-content-sdefe"> Note:</span> If the amount sent is more than the required
              </p>
              <p class="lazer-section-five-content-ppss mb-23">
                amount, the deficit will be returned back to your wallet.
              </p>
              <div class="lazer-section-footer-amount-ppss">
                <p>Amount</p>
                <h2 class="lazer-section21232-amoun-coin-12332">${e.amount} ${e.currency}</h2>
              </div>
          </div>
        </div>
        <!-- End  of 5 section -->

        <!-- START  of 6 section -->
        <div id="section6" class="lazer-section-six lazer-section-hide" >
          <div class="lazer-section-six-heading">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 0C16.1496 0 0 16.1496 0 36C0 55.8504 16.1496 72 36 72C55.8504 72 72 55.8504 72 36C72 16.1496 55.8504 0 36 0ZM36 14.76C36.9256 14.76 37.8304 15.0345 38.6001 15.5487C39.3697 16.063 39.9695 16.7939 40.3238 17.649C40.678 18.5042 40.7707 19.4452 40.5901 20.353C40.4095 21.2609 39.9638 22.0948 39.3093 22.7493C38.6548 23.4038 37.8209 23.8495 36.913 24.0301C36.0052 24.2107 35.0642 24.118 34.209 23.7638C33.3539 23.4095 32.623 22.8097 32.1087 22.0401C31.5945 21.2704 31.32 20.3656 31.32 19.44C31.32 18.1988 31.8131 17.0084 32.6907 16.1307C33.5684 15.2531 34.7588 14.76 36 14.76ZM47.52 55.44H25.92V49.68H33.84V33.84H28.08V28.08H39.6V49.68H47.52V55.44Z" fill="#003585"/>
            </svg>
          </div>

          <div class="lazer-section-five-content">
            <h2 class="lazer-section-sex-content-eefdf">No Payment Received!</h2>
            <div class="lazer-section-six-content-jefjhef">
              <p class="lazer-section-five-content-xxed">No payment was detected from you </p>
              <p class="lazer-section-five-content-xxed">for this transaction.</p>
            </div>
            <div class="lazer-section-six-content-jefjhef">
              <p class="lazer-section-five-content-xxed">If you already sent the payment, please
                </p>
              <p class="lazer-section-five-content-xxed"> contact the merchant.</p>
            </div>
            <button id="lazer-section-six-made-transfer-tryAgain" class="lazer-section-six-made-transfer">
              <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633237826/Lazerpay/reload_rlfwll.svg" alt="checkmark"> &nbsp; Try again
            </button>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section21232-amoun-coin-12332" >${Z(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>
        <!-- End  of 6 section -->

        <!-- START  of 7 section -->
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
              <p  class="lazer-section-seveen-content-xxed lazer-section-success-amount lazer-section21232-amoun-coin-12332">${e.amount} ${e.coin} </p>
              <p class="lazer-section-seveen-content-xxed lazer-section-PaidTODATA">Paid to Lazer Technologies</p>
            </div>
            <p class="lazer-section-five-content-ppss">
              <span class="lazer-section-five-content-sdefe"> Note:</span> If the amount sent is more than the required
            </p>
            <p class="lazer-section-five-content-ppss mb-23">
              amount, the deficit will be returned back to your wallet.
            </p>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 data-id="footer-amount" class="lazer-section-success-amount"> ${e.amount} ${e.currency}</h2>
            </div>
          </div>
        </div>
        <!-- End  of 7 section -->

        <!-- START  of 8 section - Payment Summary/Refund -->
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
              <p class="lazer-section-eight-content-xxed lazer-section-partial-amount-amountPaid lazer-section21232-amoun-coin-12332">${e.amount} ${e.coin}</p>
              <p class="lazer-section-eight-content-xxed2 lazer-section-PaidTODATA-Partial">Paid to Lazer Technologies </p>
            </div>

            <div class="lazer-section-request-refund-wrapper">
              <div class="lazer-section-six-content-jefjhef">
                <p class="lazer-section-eight-content-xxed">To complete this transaction, click on</p>
                <p class="lazer-section-eight-content-xxed">the button below.</p>
              </div>
              <div class="display-flex-center">
                <button class="lazer-section-eight-made-transfer lazer-section-eight-complete-payment">
                  <img src="https://res.cloudinary.com/nonseodion/image/upload/v1633226142/Lazerpay/right-arrow_ht0sth.png" alt="right-arrow"> &nbsp; Complete Payment
                </button>
              </div>

              <div class="display-flex-center mb-23">
                <button class="lazer-section-eight-made-transfer lazer-section-eight-request-refund">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83317 2C5.95574 2 4.42593 2.89776 3.56177 3.76193C2.69328 4.63042 1.83317 6.12774 1.83317 8C1.83317 9.87744 2.73093 11.4072 3.5951 12.2714C4.46359 13.1399 5.96091 14 7.83317 14C8.20136 14 8.49984 13.7015 8.49984 13.3333C8.49984 12.9651 8.20136 12.6667 7.83317 12.6667C6.37209 12.6667 5.20022 11.9909 4.53791 11.3286C3.87128 10.662 3.1665 9.4559 3.1665 8C3.1665 6.53892 3.84226 5.36705 4.50457 4.70474C5.1712 4.03811 6.37727 3.33333 7.83317 3.33333C9.29425 3.33333 10.4661 4.00909 11.1284 4.6714C11.6729 5.21585 12.2428 6.12011 12.4334 7.22642L11.9163 6.81275C11.6288 6.58275 11.2093 6.62936 10.9793 6.91687C10.7493 7.20438 10.7959 7.62391 11.0834 7.85391L12.75 9.18725C13.0153 9.39946 13.3977 9.37827 13.6379 9.13807L14.9712 7.80474C15.2316 7.54439 15.2316 7.12228 14.9712 6.86193C14.7109 6.60158 14.2888 6.60158 14.0284 6.86193L13.7674 7.12291C13.5454 5.64795 12.7965 4.45386 12.0712 3.7286C11.2028 2.86011 9.70543 2 7.83317 2Z" fill="#636363"/>
                  </svg>
                  &nbsp; Request refund
                </button>
              </div>
            </div>

            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section-partial-amount lazer-section21232-amoun-coin-12332">${e.amount} ${e.currency}</h2>
            </div>
          </div>
        </div>
        <!-- End  of 8 section -->

        <!-- START of 9 section -->
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
              <p class="lazer-section-five-content-xxed">This transaction was cancelled by</p>
              <p class="lazer-section-five-content-xxed">the merchant.</p>
            </div>
            <div class="lazer-section-six-content-jefjhef">
              <p class="lazer-section-five-content-xxed">All money paid has been returned to</p>
              <p class="lazer-section-five-content-xxed mb-23"> the originating wallet.</p>
            </div>
            <div class="lazer-section-footer-amount-ppss">
              <p>Amount</p>
              <h2 class="lazer-section-failure-amount lazer-section21232-amoun-coin-12332">${Z(e.amount)} ${e.currency}</h2>
            </div>
          </div>
        </div>
        <!-- End  of 9 section -->
      </div>
    </div>

    <div class="LazerCheckout-footer">
      <svg width="134" height="18" viewBox="0 0 134 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.4 5.13333H7.93333V2.8C7.93333 2.05739 7.63833 1.3452 7.11323 0.820101C6.58813 0.294999 5.87594 0 5.13333 0C4.39073 0 3.67854 0.294999 3.15343 0.820101C2.62833 1.3452 2.33333 2.05739 2.33333 2.8V5.13333H1.86667C1.37176 5.13387 0.897282 5.33071 0.547331 5.68066C0.19738 6.03061 0.000540416 6.5051 0 7V12.1333C0.000540416 12.6282 0.19738 13.1027 0.547331 13.4527C0.897282 13.8026 1.37176 13.9995 1.86667 14H8.4C8.89491 13.9995 9.36938 13.8026 9.71934 13.4527C10.0693 13.1027 10.2661 12.6282 10.2667 12.1333V7C10.2661 6.5051 10.0693 6.03061 9.71934 5.68066C9.36938 5.33071 8.89491 5.13387 8.4 5.13333ZM7 5.13333H3.26667V2.8C3.26667 2.30493 3.46333 1.83014 3.8134 1.48007C4.16347 1.13 4.63826 0.933333 5.13333 0.933333C5.6284 0.933333 6.1032 1.13 6.45327 1.48007C6.80333 1.83014 7 2.30493 7 2.8V5.13333Z" fill="black"/>
        <path d="M22.5266 9.664C24.4946 9.664 25.6466 8.704 25.6466 7.024C25.6466 5.344 24.5066 4.384 22.5266 4.384H19.0826V13H20.6186V9.664H22.5266ZM20.6186 5.704H22.4426C23.5466 5.704 24.1346 6.16 24.1346 7.024C24.1346 7.876 23.5346 8.344 22.4426 8.344H20.6186V5.704ZM31.1719 7.54C30.6079 6.916 29.8399 6.58 28.9399 6.58C28.0399 6.58 27.2719 6.916 26.7079 7.54C26.1799 8.116 25.9039 8.932 25.9039 9.856C25.9039 10.78 26.1799 11.596 26.7079 12.172C27.2719 12.796 28.0399 13.132 28.9399 13.132C29.8399 13.132 30.6079 12.796 31.1719 12.172C31.6999 11.596 31.9759 10.78 31.9759 9.856C31.9759 8.932 31.6999 8.116 31.1719 7.54ZM28.9399 7.792C29.9119 7.792 30.5239 8.572 30.5239 9.856C30.5239 11.14 29.9119 11.92 28.9399 11.92C27.9679 11.92 27.3559 11.14 27.3559 9.856C27.3559 8.572 27.9679 7.792 28.9399 7.792ZM34.8636 10.876L33.7236 6.7H32.2476L34.1436 13H35.3916L36.5436 8.872L37.6956 13H38.9436L40.8396 6.7H39.4116L38.2956 10.876L37.1676 6.7H35.9796L34.8636 10.876ZM44.1632 13.132C45.4112 13.132 46.4192 12.472 46.8632 11.368L45.6272 10.9C45.4352 11.524 44.8832 11.908 44.1632 11.908C43.2392 11.908 42.5912 11.236 42.4832 10.168H46.8992V9.688C46.8992 8.764 46.6472 8.008 46.1432 7.444C45.6392 6.868 44.9552 6.58 44.1032 6.58C43.2392 6.58 42.4712 6.928 41.9072 7.564C41.3912 8.152 41.1032 8.98 41.1032 9.856C41.1032 10.78 41.3912 11.596 41.9192 12.184C42.4832 12.796 43.2632 13.132 44.1632 13.132ZM44.0912 7.792C44.9192 7.792 45.4352 8.308 45.4472 9.088H42.5552C42.7592 8.26 43.3232 7.792 44.0912 7.792ZM51.1476 6.664C50.3676 6.664 49.7076 7.048 49.4196 7.636V6.7H47.9796V13H49.4196V9.688C49.4196 8.728 50.0676 8.092 51.0276 8.092C51.2196 8.092 51.3636 8.092 51.5556 8.128V6.688C51.3996 6.676 51.2796 6.664 51.1476 6.664ZM54.9093 13.132C56.1573 13.132 57.1653 12.472 57.6093 11.368L56.3733 10.9C56.1813 11.524 55.6293 11.908 54.9093 11.908C53.9853 11.908 53.3373 11.236 53.2293 10.168H57.6453V9.688C57.6453 8.764 57.3933 8.008 56.8893 7.444C56.3853 6.868 55.7013 6.58 54.8493 6.58C53.9853 6.58 53.2173 6.928 52.6533 7.564C52.1373 8.152 51.8493 8.98 51.8493 9.856C51.8493 10.78 52.1373 11.596 52.6653 12.184C53.2293 12.796 54.0093 13.132 54.9093 13.132ZM54.8373 7.792C55.6653 7.792 56.1813 8.308 56.1933 9.088H53.3013C53.5053 8.26 54.0693 7.792 54.8373 7.792ZM61.1017 13.132C61.8577 13.132 62.4817 12.856 62.9137 12.34V13H64.3537V4.384H62.9137V7.372C62.4817 6.856 61.8577 6.58 61.1017 6.58C60.2497 6.58 59.5177 6.928 59.0257 7.588C58.5817 8.176 58.3297 8.98 58.3297 9.856C58.3297 10.732 58.5817 11.536 59.0257 12.124C59.5177 12.784 60.2497 13.132 61.1017 13.132ZM62.9497 10.048C62.9497 11.152 62.3137 11.872 61.3897 11.872C60.3817 11.872 59.7817 11.104 59.7817 9.856C59.7817 8.608 60.3817 7.84 61.3897 7.84C62.3377 7.84 62.9497 8.56 62.9497 9.676V10.048ZM73.6631 12.124C74.1071 11.536 74.3591 10.732 74.3591 9.856C74.3591 8.98 74.1071 8.176 73.6631 7.588C73.1711 6.928 72.4391 6.58 71.5871 6.58C70.8311 6.58 70.2071 6.856 69.7751 7.372V4.384H68.3351V13H69.7751V12.34C70.2071 12.856 70.8311 13.132 71.5871 13.132C72.4391 13.132 73.1711 12.784 73.6631 12.124ZM71.2991 7.84C72.3071 7.84 72.9071 8.608 72.9071 9.856C72.9071 11.104 72.3071 11.872 71.2991 11.872C70.3751 11.872 69.7391 11.152 69.7391 10.048V9.676C69.7391 8.56 70.3511 7.84 71.2991 7.84ZM80.6826 6.7H79.1946L77.6826 11.116L76.1346 6.7H74.6226L76.9146 12.772L76.6746 13.36C76.4826 13.84 76.2786 13.996 75.7626 13.996C75.6186 13.996 75.5226 13.996 75.2826 13.96V15.172C75.5706 15.208 75.6666 15.208 75.8706 15.208C76.9866 15.208 77.6586 14.752 78.0906 13.588L80.6826 6.7Z" fill="#666666"/>
        <path d="M89.5848 13V11.656H85.5288V4.384H83.9928V13H89.5848ZM94.1759 12.4C94.4039 12.928 94.9679 13.108 95.9879 13V11.884C95.5919 11.932 95.4359 11.812 95.4359 11.464V8.752C95.4359 7.348 94.5839 6.58 93.0119 6.58C91.7159 6.58 90.7199 7.3 90.3839 8.44L91.7399 8.752C91.9199 8.116 92.2919 7.828 92.9519 7.828C93.6719 7.828 94.0319 8.164 94.0319 8.8V8.908L92.2919 9.268C90.8519 9.568 90.1799 10.204 90.1799 11.248C90.1799 11.788 90.3839 12.244 90.7799 12.592C91.1759 12.94 91.6919 13.108 92.3039 13.108C93.1079 13.108 93.7799 12.844 94.1759 12.4ZM92.5199 11.956C91.9559 11.956 91.6079 11.668 91.6079 11.188C91.6079 10.72 91.8959 10.48 92.6759 10.3L94.0319 10.012V10.78C94.0319 11.488 93.3839 11.956 92.5199 11.956ZM98.4869 11.776L101.775 7.792V6.7H96.7229V7.924H100.059L96.6749 11.92V13H101.811V11.776H98.4869ZM105.487 13.132C106.735 13.132 107.743 12.472 108.187 11.368L106.951 10.9C106.759 11.524 106.207 11.908 105.487 11.908C104.563 11.908 103.915 11.236 103.807 10.168H108.223V9.688C108.223 8.764 107.971 8.008 107.467 7.444C106.963 6.868 106.279 6.58 105.427 6.58C104.563 6.58 103.795 6.928 103.231 7.564C102.715 8.152 102.427 8.98 102.427 9.856C102.427 10.78 102.715 11.596 103.243 12.184C103.807 12.796 104.587 13.132 105.487 13.132ZM105.415 7.792C106.243 7.792 106.759 8.308 106.771 9.088H103.879C104.083 8.26 104.647 7.792 105.415 7.792ZM112.472 6.664C111.692 6.664 111.032 7.048 110.744 7.636V6.7H109.304V13H110.744V9.688C110.744 8.728 111.392 8.092 112.352 8.092C112.544 8.092 112.688 8.092 112.88 8.128V6.688C112.724 6.676 112.604 6.664 112.472 6.664ZM117.378 9.664C119.346 9.664 120.498 8.704 120.498 7.024C120.498 5.344 119.358 4.384 117.378 4.384H113.934V13H115.47V9.664H117.378ZM115.47 5.704H117.294C118.398 5.704 118.986 6.16 118.986 7.024C118.986 7.876 118.386 8.344 117.294 8.344H115.47V5.704ZM124.762 12.4C124.99 12.928 125.554 13.108 126.574 13V11.884C126.178 11.932 126.022 11.812 126.022 11.464V8.752C126.022 7.348 125.17 6.58 123.598 6.58C122.302 6.58 121.306 7.3 120.97 8.44L122.326 8.752C122.506 8.116 122.878 7.828 123.538 7.828C124.258 7.828 124.618 8.164 124.618 8.8V8.908L122.878 9.268C121.438 9.568 120.766 10.204 120.766 11.248C120.766 11.788 120.97 12.244 121.366 12.592C121.762 12.94 122.278 13.108 122.89 13.108C123.694 13.108 124.366 12.844 124.762 12.4ZM123.106 11.956C122.542 11.956 122.194 11.668 122.194 11.188C122.194 10.72 122.482 10.48 123.262 10.3L124.618 10.012V10.78C124.618 11.488 123.97 11.956 123.106 11.956ZM132.808 6.7H131.32L129.808 11.116L128.26 6.7H126.748L129.04 12.772L128.8 13.36C128.608 13.84 128.404 13.996 127.888 13.996C127.744 13.996 127.648 13.996 127.408 13.96V15.172C127.696 15.208 127.792 15.208 127.996 15.208C129.112 15.208 129.784 14.752 130.216 13.588L132.808 6.7Z" fill="#003585"/>
      </svg>
    </div>
    <button class="mobile-modal-close-btn modal-close-btn">
      &times; &nbsp; Close
    </button>

    <style>
    @font-face {
      font-family: 'Sohne-Buchin';
      src: url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/Sohne-font/Sohne-Buch.eot'); /* IE9 Compat Modes */
      src: url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/Sohne-font/Sohne-Buch.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/Sohne-font/Sohne-Buch.woff') format('woff'), /* Modern Browsers */
          url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/Sohne-font/Sohne-Buch.ttf')  format('truetype'), /* Safari, Android, iOS */
          url('https://cdn.jsdelivr.net/gh/LazerPay-Finance/Sohne-font/Sohne-Buch.svg#svgFontName') format('svg'); /* Legacy iOS */
      }

      button {
        cursor: pointer;
      }

      .LazerCheckout-overlay ::-webkit-scrollbar {
        display: none
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
        font-family: "Sohne-Buchin";
        font-size: 11px;
        background: white;
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
        font-weight: 600;
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
        display:flex;
        justify-content:center;
        margin-top:18px;
      }

      .LazerCheckoutButton {
        background: none;
        border: none;
        cursor: pointer;
      }

      .LazerCheckout-logo {
        width: 60px;
        height: 60px;
      }

      .LazerCheckout-logo img {
        width:100%;
        height: 100%;
        border-style: none;
        box-shadow: 0 0.6px 2.8px 0 rgb(0 0 0 / 12%);
        border-radius: 50%;
      }

      .LazerCheckout-container-header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 2rem;
        padding-bottom: 1rem;
        border-bottom: 0.5px solid #dfdfdf;
      }

      .LazerCheckout-close-btn {
        position: absolute;
        right: -1.2rem;
        top: -1.2rem;
        transform: rotate(30deg) scale(1.5);
        cursor: pointer;
        border: none;
        background: transparent;
        z-index: 999999999;
        opacity: .5;
        transition: .3s ease-in;
      }

      LazerCheckout-close-btn:hover {
        opacity: 1;
        transition: .3s ease-in;
      }

      .LazerCheckout-header-right{
        text-align: right
      }

      .LazerCheckout-header-right-email span{
        font-family: "Sohne-Buchin";
        font-weight: 500;
        font-size: 11px;
        color: #666666;
      }

      .LazerCheckout-header-right-amount {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-top:2px;
        color: #37C978;
      }

      /* SECTION ONE */
      .lazer-section-one h2{
        font-family: Sohne-Buchin;
        font-weight: bold;
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

      .lazer-section-one-input-wrapper {
        width: 90%;
        margin: auto;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
      }

      .lazer-section-one-input-wrapper h2 {
        justify-content: flex-start;
        text-align: start;
        font-family: Sohne-Buchin;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #323232;
        align-self: stretch;
        flex-grow: 0;
        margin: 8px 0px;
      }

      .lazer-section-one-input-wrapper input{
        width: 320px;
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

      .lazer-section-one-input-wrapper input::placeholder{
        font-family: Sohne-Buchin;
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

      .opacity{
        opacity: 0.1;
      }

      .lazer-section-one-button{
        background: #003585;
        border: none;
        box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
        border-radius: 8px;
        width: 320px;
        height: 52px;
        margin:auto;
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Sohne-Buchin;
        font-style: normal;
        font-weight: 600;
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
        cursor: pointer;
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
        font-family:  Sohne-Buchin;;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        margin: 0;
        padding: 0;
        margin-bottom: 7px;
        color: #323232;
      }

      .lazer-section-two-paymentOption-info {
        font-family:Sohne-Buchin;
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
        height: 40px;
        transition: .3s ease-in;
      }

      .lazer-section-three-coin-wrapper:hover {
        background: #FCFCFC;
        transition: .3s ease-in;
      }

      .lazer-section-three-coin-container {
        align-items: center;
      }

      .lazer-section-three-coin-container h2 {
        margin: 0;
        padding: 0;
        font-family: Sohne-Buchin;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #666666;
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
        font-family:Sohne-Buchin;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #636363;
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
        font-family:Sohne-Buchin;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        /* or 143% */
        text-align: center;
        /* Wireframe/Grey 1 */
        color: #666666;
      }

      .lazer-section-four-barcode p {
        font-family:Sohne-Buchin;
        font-size: 16px;
        font-weight: 600;
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
        font-family:Sohne-Buchin;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        color: #636363;
        margin-bottom: 17px;
      }

      .lazer-section-four-barcode {
        border-bottom:  0.5px solid #EEEEEE;
      }

      .lazer-section-four-amount-to-pay{
        height: 58px;
        justify-content: space-between;
        align-items: center;
        display: flex;
        padding: 0 29px;
      }

      .lazer-section-four-amount-to-pay p{
        font-family:Sohne-Buchin;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #636363;
      }

      .lazer-section-four-amount-to-pay h2 {
        font-family:Sohne-Buchin;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #636363;
      }

      .lazer-section-four-address-input {
        background: #F9F9F9;
        border: 1px solid #F1F1F1;
        box-sizing: border-box;
        border-radius: 4px;
        width: 320px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        margin-bottom: 8px;
      }

      .lazer-section-four-address-input p{
        font-family:Sohne-Buchin;
        font-weight: 600;
        font-size: 8px;
        line-height: 12px;
        letter-spacing: 0.03em;
        /* border: solid red 2px; */
        text-align: start;
        padding: 0;
        margin: 0;
        margin-top: 8px;
        color: #636363;
      }

      .lazer-section-four-address-input h2{
        font-family:Sohne-Buchin;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.01em;
        color: #636363;
      }

      .lazer-section-four-address-input .copy-button{
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #37C978;
        cursor:pointer;
        width: 80px;
        height: 44px;
        background: #D7F4E4;
        border: 0.5px solid #87DFAE;
        box-sizing: border-box;
        border-radius: 2px;
        position: relative;
        left: 5px;
      }

      .lazer-warning .lazer-warning-icon{
        padding-left:20px;
      }

      .lazer-warning .text-warning {
        text-align:left;
        font-size: 12px;
        line-height: 18px;
        color: #323232;
        padding:0 10px;
        letter-spacing: 0.01em;
      }

      .lazer-warning {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        padding:0 1px;
        margin: 8px 25px 0;
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
        font-family:Sohne-Buchin;
        font-size: 18px;
        line-height: 30px;
        padding: 0px;
        margin: 0px;
        text-align: center;
        color: #323232;
        margin-bottom: 16px;
      }

      .lazer-section-five-content-eefdf #confirm-payment-amount {
        color: #37C978;
      }

      .lazer-section-six-content-eefdf{
        font-family:Sohne-Buchin;
        font-size: 20px;
        line-height: 24px;
        padding: 0px;
        margin: 0px;
        text-align: center;
        color: #323232;
        margin-bottom: 12px;
      }

      .lazer-section-five-content-xxed {
        font-family:Sohne-Buchin;
        padding: 0px;
        margin: 0px;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-five-content-ppss{
        font-family:Sohne-Buchin;
        padding: 0px;
        margin: 0px;
        font-weight: 600;
        font-size: 11px;
        line-height: 18px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-five-content-sdefe{
        font-family:Sohne-Buchin;
        padding: 0px;
        margin: 0px;
        font-weight: 600;
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
        font-weight: 600;
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
        font-family:Sohne-Buchin;
        font-size: 12px;
        line-height: 12px;
        color: #666666;
        margin: 0px;
        padding: 0px;
        font-weight: 600;
      }

      .lazer-section-footer-amount-ppss h2{
        font-family:Sohne-Buchin;
        font-size: 12px;
        font-weight: 600;
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

      .lazer-section-seveen-content-xxed {
        font-family:Sohne-Buchin;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #2B2B2B;
        margin: 0px;
        padding: 0px;
      }

      .lazer-section-seveen-content-xxed{
        font-size: 14px;
        margin: 0px;
        padding: 0px;
        font-family:Sohne-Buchin;
        line-height: 24px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-eight-content-jefjhef{
        margin-bottom: 8px;
        font-weight: 600;
      }

      .lazer-section-eight-content-xxed{
        margin: 0px;
        padding: 0px;
        font-family:Sohne-Buchin;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #2B2B2B;
      }

      .lazer-section-eight-content-xxed2{
        margin: 0px;
        padding: 0px;
        font-family:Sohne-Buchin;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-eight-content-xxed{
        margin: 0px;
        padding: 0px;
        font-family:Sohne-Buchin;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-eight-made-transfer {
        width: 154px;
        height: 32px;
        background: #F7F9FE;
        border: 1px solid #CCD7E7;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
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

      .lazer-section-five-content-xxedddddee3344ee {
        margin: 0px;
        padding: 0px;
        font-family:Sohne-Buchin;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #666666;
      }

      .lazer-section-five-content-xxedddddee3344ee06060544433 {
        margin: 0px;
        padding: 0px;
        font-family:Sohne-Buchin;
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
        display: none;
        padding: 0px 20px;
        width: auto;
        background: #F7F9FE;
        cursor: pointer;
        border: 1px solid #CCD7E7;
        box-sizing: border-box;
        border-radius: 20px;
        font-family:Sohne-Buchin;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        color: #636363;
        margin: ${T?"10px":"15px"} auto;
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

      @media(max-width: 768px){
        .lazer-section-three-coin-wrapper {
          cursor: default
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

        .LazerCheckout-body {
          box-shadow: unset;
          min-width: 100%;
          min-height: 78vh;
        }

        .mobile-modal-close-btn {
          display: flex;
        }

        .LazerCheckout-footer {
          border-top: 0.5px solid #dfdfdf;
          padding-top: ${T?"12px":"20px"};
        }
      }

      @media(max-width: 400px){
        .LazerCheckout-body {
          height: 100vh;
          min-height: 0;
          max-height: 70vh;
        }
      }
    </style>
  `}(a),y.appendChild(i),document.body.appendChild(y);const r=document.querySelectorAll(".modal-close-btn"),o=document.querySelector(".initial-loader"),s=document.querySelector(".lazer-section-one"),l=document.querySelector(".lazer-section-two"),c=document.querySelector(".lazer-section-two-paymentOption"),d=document.querySelector(".lazer-section-three"),p=document.querySelector("#lazer-section-four-confrim-transferBtn"),h=document.querySelector(".lazer-section-eight-request-refund"),C=document.querySelector("#lazer-section-six-made-transfer-tryAgain"),u=document.getElementById("nameInput"),f=document.getElementById("nameInput"),m=$(o);setTimeout(()=>{m(),s.classList.add("lazer-section-show");const e=document.querySelector(".lazer-section-eight-complete-payment"),t=document.querySelector(".lazer-section-one-button");var n,i,o;document.querySelector(".lazer-copy-button").addEventListener("click",P),r.forEach(e=>{e.addEventListener("click",()=>{if(window.confirm("Are you sure?"))return e="Modal closed",t=document.querySelectorAll("style"),n=document.querySelectorAll("script"),clearTimeout(window.lazerCountDownTimer),clearTimeout(window.lazerConfirmPaymentTimeOut),v?.(e),clearTimeout(window.lazerCopyTimer),document.body.removeChild(y),void[...t,...n].forEach(e=>{["__LazerpayStyle__","__LazerpayScript__"].includes(e.title)&&e.remove()});var e,t,n})}),p.addEventListener("click",_),f.addEventListener("input",()=>function(e,t,n){V=t.value,Number(e.value.length&&t.value.length)?n.classList.remove("opacity"):n.classList.add("opacity")}(u,f,t)),u.addEventListener("input",()=>function(e,t,n){S=e.value,Number(e.value.length&&t.value.length)?n.classList.remove("opacity"):n.classList.add("opacity")}(u,f,t)),e.addEventListener("click",O),h.addEventListener("click",()=>{document.querySelector(".lazer-section-request-refund-wrapper").innerHTML=`
          <div class="lazer-section-six-content-jefjhefjejejejejej">
            <p class="lazer-section-five-content-xxedddddee3344ee">We are currently processing your payment refund,</p>
            <p class="lazer-section-five-content-xxedddddee3344ee"> if you need any other assistance, contact us at:</p>
            <a class="lazer-section-five-content-xxedddddee3344ee06060544433" href="mailto:help@lazerpay.finance">
              <p>help@lazer.finance</p>
            </a>
          </div>
        `}),t.addEventListener("click",()=>{document.querySelector("#LazerCheckoutEmailInput").innerText=f.value,q(l,s)}),c.addEventListener("click",()=>q(d,l)),A.forEach((e,t)=>{e.addEventListener("click",()=>function(e){N(),document.querySelectorAll(".lazer-section21232-amoun-coin-12332").forEach(e=>{e.innerText=Z(H)+" "+g}),document.querySelectorAll(".lazer-section-coin-address").innerText=e+" Address",E=e;e={customer_name:S,customer_email:V,amount:H,currency:k,coin:E,key:x};w=e,$("#lazer-section-three-spinner");fetch(F,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":w.key},body:JSON.stringify({...w})}).then(async e=>{N({isDisabled:!1}),j();let t=await e.json();if([200,201,202].includes(e?.status)){B=t?.data?.businessName,document.querySelector("#lazer-section-three-spinner").innerHTML="<h3>Select coin you want to pay with:</h3>",document.querySelector(".lazer-section-four-amount-to-payNOW").innerText=`${t?.data?.cryptoAmount}  ${t?.data?.coin} `,document.querySelector(".lazer-section-address").innerText=t?.data?.address.slice(0,14)+"..."+t?.data?.address.slice(-5),M.qrReady&&function({address:e,QRElement:t}){const n=e,i=new QRCodeStyling({width:120,height:120,type:"svg",data:n,image:"https://res.cloudinary.com/lazer/image/upload/v1638271431/logo_1_rpv0ft.svg",dotsOptions:{color:"#000",type:"rounded"},backgroundOptions:{color:"transparent"},imageOptions:{crossOrigin:"anonymous",margin:8}});i.append(t)}({address:t?.data?.address,amountInBNB:t?.data?.cryptoAmount,QRElement:document.querySelector("#lazerpay-qr-code")});const n=z.subscribe("DEPOSIT_EVENT");n.bind(""+t?.data?.address,e=>{U()}),b=t.data,I(L);e=document.querySelector(".lazer-section-three");q(document.querySelector(".lazer-section-four"),e)}else document.querySelector("#lazer-section-three-spinner").innerHTML=`<h3 id="lazer---id--errr">${t?.message||"Something went wrong. Please try again."}</h3>`}).catch(e=>{j(),N({isDisabled:!1}),document.querySelector("#lazer-section-three-spinner").innerHTML=`<h3 id="lazer---id--errr">Error occurred: ${e.message||""}</h3>`})}(["USDT","USDC","BUSD","DAI"][t]))}),n=a,i=l,o=s,n.email&&n.name&&q(i,o),C.addEventListener("click",D)},5e3)}({email:e,name:n,amount:t,coin:i,currency:g,logo:o,key:x});const A=document.querySelectorAll(".lazer-section-three-coin-wrapper");function D(){var e=document.querySelector(".lazer-section-six");q(document.querySelector(".lazer-section-four"),e),I(L),j(),fetch(F,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":w.key},body:JSON.stringify({...w})}).then(async e=>{j();e=await e.json();b=e;const t=z.subscribe("DEPOSIT_EVENT");t.bind(""+e.address,e=>{U()})}).catch(e=>{j(),document.querySelector("#lazer-section-three-spinner").innerHTML=`<h3 id="lazer---id--errr">${e?.message||"Something went wrong. Please try again."}</h3>`})}function _(){document.getElementById("lazerSectionProgressBar").innerText="0:0",document.getElementById("confirm-payment-amount").innerText=b?.cryptoAmount+" "+b?.coin,L=!1,clearTimeout(window.lazerCountDownTimer);var e=document.querySelector(".lazer-section-four");q(document.querySelector(".lazer-section-five"),e),window.lazerConfirmPaymentTimeOut=setTimeout(()=>{document.getElementById("lazerSectionProgressBar").innerHTML="0:0",q(document.querySelector(".lazer-section-six"),document.querySelector(".lazer-section-five"))},6e5)}function P(){document.querySelector(".lazer-copy-button-text").innerText="Copied",navigator.clipboard.writeText(b.address),setTimeout(()=>{document.querySelector(".lazer-copy-button-text").innerText="Copy"},3e3)}function O(){q(document.querySelector(".lazer-section-four"),document.querySelector(".lazer-section-eight")),I(L)}function I(a){function r(e){return e<0&&(e="59"),String(e).padStart(2,0)}document.getElementById("lazerSectionProgressBar").innerHTML="4:59",function e(){var t=document.getElementById("lazerSectionProgressBar").innerHTML;var n=t.split(/[:]+/);t=n[0];n=r(n[1]-1);59==n&&(t-=1);if(t<0)return;document.getElementById("lazerSectionProgressBar").innerHTML=t+":"+n;if(0==t&&0==n&&a){clearTimeout(window.lazerCountDownTimer),document.getElementById("lazerSectionProgressBar").innerHTML="0:0",clearTimeout(window.lazerCountDownTimer);const i=document.querySelector(".lazer-section-six "),o=document.querySelector(".lazer-section-four ");q(i,o)}window.lazerCountDownTimer=setTimeout(e,1e3)}()}function $(e){const t="string"==typeof e?document.querySelector(e):e;return t.innerHTML='<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>',()=>{t.innerHTML=""}}function N({isDisabled:t=!0,excludedCoins:n=[]}={}){A?.forEach(e=>{if(!n.includes(e.getAttribute("data-coin")))return e.setAttribute("style","pointer-events: "+(t?"none":"initial"))})}function U(){var e=document.querySelector(".lazer-section-four");const i=document.querySelector(".lazer-section-five");document.getElementById("lazerSectionProgressBar").innerHTML="0:0",L=!1,j(),clearTimeout(window?.lazerCountDownTimer),clearTimeout(window?.lazerConfirmPaymentTimeOut),q(i,e),fetch(l+"/"+b?.address,{method:"GET",headers:{"Content-Type":"application/json","x-api-key":x}}).then(async e=>{j();const n=await e?.json(),t={error:()=>{q(document.querySelector(".lazer-section-nine"),i),r?.(n?.data),a?.(n?.data)},confirmed:()=>{var e=document.querySelector("#section7");const t=document.querySelectorAll(".lazer-section-success-amount");t.forEach(e=>{if("footer-amount"!==e.getAttribute("data-id"))return e.innerText=Z(n?.data?.amountPaid)+" "+n?.data?.coin}),document.querySelector(".lazer-section-PaidTODATA").innerText="Paid to "+B,q(e,i),a?.(n?.data)},incomplete:()=>{document.querySelector(".lazer-section-four-amount-to-payNOW").innerText=`${n?.data?.actualAmount-n?.data?.amountPaid}  ${n?.data?.coin} `,document.querySelector(".lazer-section-partial-amount-amountPaid").innerText=n?.data?.amountPaid+" "+n?.data?.coin,document.querySelector(".lazer-section-PaidTODATA-Partial").innerText="Paid to "+B,q(document.querySelector(".lazer-section-eight"),i),a&&a(n?.data)}};t[n?.data?.status]?.()}).catch(e=>{j(),r?.(e.message||"Something went wrong, please try again.")})}}
