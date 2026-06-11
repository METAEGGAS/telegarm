(()=> {
  let R = window.__DFS = window.__DFS || {},
      k = 'exchange',
      n = 'تبادل',
      f = 'dyn/exchange.js',
      i = 'ex';

  let h = `
  <div class="ex-root">
    <style>
      .ex-root,
      .ex-root *{
        box-sizing:border-box;
        -webkit-tap-highlight-color:transparent
      }

      .ex-root{
        position:fixed;
        inset:0;
        overflow:hidden;
        background:#000;
        color:#fff;
        font-family:"Noto Sans Arabic",Tahoma,Arial,sans-serif;
        z-index:9999;
        --p:#121212;
        --l:#232323;
        --m:#777;
        --g1:#f2c821;
        --g2:#fff0a8;
        --g3:#ffd92f;
      }

      .ex-root .pg{
        position:fixed;
        inset:0;
        background:#000;
      }

      .ex-root .app{
        height:100%;
        width:100%;
        padding:10px 0 14px;
        display:flex;
        flex-direction:column;
      }

      .ex-root .top{
        height:44px;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 14px;
      }

      .ex-root .ttl{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        font-size:20px;
      }

      .ex-root .bk,
      .ex-root .rc,
      .ex-root .sw{
        border:0;
        cursor:pointer;
        background:none;
        padding:0;
      }

      .ex-root .bk{
        position:absolute;
        left:14px;
        top:8px;
        width:28px;
        height:28px;
        color:#fff;
        font-size:28px;
        line-height:1;
        transform:scaleX(-1);
      }

      .ex-root .rc{
        width:28px;
        height:28px;
        background:url(https://tsdvxl.dunfinz.org/static/my/dark/record.png) center/24px 24px no-repeat;
      }

      .ex-root .sec{
        margin:12px 14px 8px;
        font-size:20px;
      }

      .ex-root .sel,
      .ex-root .bx,
      .ex-root .ok{
        width:100%;
      }

      .ex-root .sel{
        height:54px;
        background:var(--p);
        border:1px solid var(--l);
        border-radius:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 14px;
        color:#fff;
      }

      .ex-root .ar{
        width:12px;
        height:8px;
        background:url(https://i.ibb.co/Lzv0gB9P/91.png) center/contain no-repeat;
        display:inline-block;
      }

      .ex-root .mid{
        position:relative;
        margin-top:10px;
      }

      .ex-root .bx{
        height:120px;
        background:var(--p);
        border:1px solid var(--l);
        border-radius:0;
        position:relative;
      }

      .ex-root .gap{
        height:18px;
      }

      .ex-root .tt1{
        position:absolute;
        left:18px;
        top:16px;
        font-size:18px;
      }

      .ex-root .tt2{
        position:absolute;
        right:18px;
        top:16px;
        font-size:17px;
      }

      .ex-root .coin{
        position:absolute;
        left:18px;
        bottom:22px;
        display:flex;
        align-items:center;
        gap:6px;
        font-size:20px;
        transform:translateZ(0);
      }

      .ex-root .inp,
      .ex-root .out{
        position:absolute;
        right:18px;
        left:112px;
        top:48px;
        background:none;
        border:0;
        outline:0;
        color:#fff;
        font-size:20px;
        text-align:right;
      }

      .ex-root .inp::placeholder{
        color:var(--m);
        font-size:15px;
      }

      .ex-root .inp::-webkit-outer-spin-button,
      .ex-root .inp::-webkit-inner-spin-button{
        appearance:none;
        margin:0;
      }

      .ex-root .mx{
        position:absolute;
        right:18px;
        bottom:22px;
        color:#f2c92c;
        font-size:18px;
        cursor:pointer;
      }

      .ex-root .sw{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:62px;
        height:62px;
        background:url(https://tsdvxl.dunfinz.org/static/my/big-change.png) center/contain no-repeat;
        z-index:3;
      }

      .ex-root .rate{
        padding:12px 0 10px;
        text-align:center;
        color:#d7b46d;
        font-size:15px;
      }

      .ex-root .rate b{
        font-weight:500;
        direction:ltr;
        display:inline-block;
      }

      .ex-root .ok{
        height:50px;
        border:1px solid #d8b63b;
        border-radius:0;
        background:linear-gradient(90deg,var(--g1),var(--g2) 50%,var(--g3));
        color:#111;
        font-size:18px;
        font-weight:700;
      }

      .ex-root .ov{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.45);
        opacity:0;
        pointer-events:none;
        transition:.2s;
        z-index:20;
      }

      .ex-root .ov.s{
        opacity:1;
        pointer-events:auto;
      }

      .ex-root .sh{
        position:fixed;
        left:0;
        right:0;
        bottom:-220px;
        width:100%;
        background:#121212;
        border-top:1px solid #232323;
        border-radius:22px 22px 0 0;
        transition:.2s;
        z-index:21;
      }

      .ex-root .sh.s{
        bottom:0;
      }

      .ex-root .sh .h{
        height:72px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-bottom:1px solid #232323;
        font-size:20px;
      }

      .ex-root .sh .i{
        height:68px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#8c8c8c;
        font-size:18px;
        cursor:pointer;
      }

      .ex-root .his{
        display:none;
      }

      .ex-root .his.s{
        display:block;
      }

      .ex-root .empty{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:16px;
      }

      .ex-root .empty img{
        width:92px;
        height:92px;
        object-fit:contain;
      }

      .ex-root .empty div{
        color:#9a9a9a;
        font-size:20px;
      }

      .ex-root .fly{
        position:fixed;
        z-index:99;
        pointer-events:none;
        display:flex;
        align-items:center;
        gap:6px;
        font-size:20px;
        color:#fff;
        transition:transform .42s cubic-bezier(.22,.8,.22,1),opacity .42s;
      }

      .ex-root .sel:active,
      .ex-root .ok:active,
      .ex-root .sw:active,
      .ex-root .rc:active,
      .ex-root .bk:active,
      .ex-root .mx:active,
      .ex-root .sh .i:active{
        filter:brightness(.97);
      }
    </style>

    <div class="pg" id="main_${i}">
      <div class="app">
        <div class="top">
          <button class="rc" id="openHis_${i}" aria-label="سجل"></button>
          <div class="ttl">تبادل</div>
          <button class="bk" aria-label="رجوع">›</button>
        </div>

        <div class="sec">اختر الحساب</div>

        <button class="sel" id="openSheet_${i}">
          <span class="ar"></span>
          <span id="acc_${i}">تمويل الحساب</span>
        </button>

        <div class="mid">
          <div class="bx">
            <div class="tt1">استهلك</div>
            <div class="tt2">متوفر:<span id="av_${i}">0</span></div>
            <div class="coin" id="coin1_${i}">
              <span id="c1_${i}">BTC</span>
              <span class="ar"></span>
            </div>
            <input id="amt_${i}" class="inp" type="text" inputmode="decimal" placeholder="أدخل الكمية القصوى" autocomplete="off">
            <div class="mx" id="mx_${i}">ماكس</div>
          </div>

          <div class="gap"></div>

          <button class="sw" id="swap_${i}" aria-label="تبديل"></button>

          <div class="bx">
            <div class="tt1">احصل على</div>
            <div class="coin" id="coin2_${i}">
              <span id="c2_${i}">USDT</span>
              <span class="ar"></span>
            </div>
            <div class="out" id="out_${i}">0</div>
          </div>
        </div>

        <div class="rate">
          <span>سعر:</span>
          <b id="rv_${i}">1:61758.494783</b>
          <span id="r_${i}">USDT</span>
        </div>

        <button class="ok">تأكيد</button>
      </div>
    </div>

    <div class="pg his" id="his_${i}">
      <div class="app">
        <div class="top">
          <div></div>
          <div class="ttl">سجل الصرف</div>
          <button class="bk" id="backHis_${i}" aria-label="عودة">›</button>
        </div>

        <div class="empty">
          <img src="https://tsdvxl.dunfinz.org/static/theme/dark/icon/empty.png" alt="">
          <div>لا يوجد بيانات متاحة</div>
        </div>
      </div>
    </div>

    <div class="ov" id="ov_${i}"></div>

    <div class="sh" id="sh_${i}">
      <div class="h">تمويل الحساب</div>
      <div class="i" data-v="حساب تداول">حساب تداول</div>
    </div>
  </div>
  `;

  R[k] = {
    id: k,
    title: n,
    file: f,
    source: f,
    html: h,
    init: (root) => {
      let $ = (s) => root.querySelector(s),
          sh = $("#sh_" + i),
          ov = $("#ov_" + i),
          acc = $("#acc_" + i),
          c1 = $("#c1_" + i),
          c2 = $("#c2_" + i),
          r = $("#r_" + i),
          rv = $("#rv_" + i),
          av = $("#av_" + i),
          amt = $("#amt_" + i),
          out = $("#out_" + i),
          busy = 0,
          bal = { BTC: 0, USDT: 0 },
          rate = 61758.494783;

      function os(){
        sh.classList.add("s");
        ov.classList.add("s");
      }

      function cs(){
        sh.classList.remove("s");
        ov.classList.remove("s");
      }

      function fnum(n){
        n = (+n || 0).toFixed(8).replace(/\\.?0+$/, '');
        return n || '0';
      }

      function up(){
        av.textContent = fnum(bal[c1.textContent]);

        let v = parseFloat((amt.value || '').replace(/,/g, '')) || 0,
            kx = c1.textContent === "BTC" && c2.textContent === "USDT" ? rate : 1 / rate;

        out.textContent = fnum(v * kx);
        rv.textContent = c1.textContent === "BTC" && c2.textContent === "USDT"
          ? "1:" + rate
          : fnum(1 / rate) + ":1";
        r.textContent = c2.textContent;
      }

      $("#openSheet_" + i).onclick = os;
      ov.onclick = cs;

      sh.querySelector(".i").onclick = (e) => {
        acc.textContent = e.target.dataset.v;
        cs();
      };

      $("#openHis_" + i).onclick = () => {
        $("#main_" + i).style.display = "none";
        $("#his_" + i).classList.add("s");
      };

      $("#backHis_" + i).onclick = () => {
        $("#his_" + i).classList.remove("s");
        $("#main_" + i).style.display = "block";
      };

      amt.oninput = () => {
        amt.value = amt.value.replace(/[^\\d.]/g, '').replace(/(\\..*)\\./g, '$1');
        up();
      };

      $("#mx_" + i).onclick = () => {
        amt.value = fnum(bal[c1.textContent]);
        up();
      };

      function mk(el){
        let rr = el.getBoundingClientRect(),
            n = el.cloneNode(true);

        n.classList.add("fly");
        n.style.left = rr.left + "px";
        n.style.top = rr.top + "px";
        n.style.width = rr.width + "px";
        n.style.height = rr.height + "px";

        document.body.appendChild(n);
        return [n, rr];
      }

      $("#swap_" + i).onclick = () => {
        if (busy) return;
        busy = 1;

        let a = $("#coin1_" + i),
            b = $("#coin2_" + i),
            [fa, ra] = mk(a),
            [fb, rb] = mk(b),
            dx1 = rb.left - ra.left,
            dy1 = rb.top - ra.top,
            dx2 = ra.left - rb.left,
            dy2 = ra.top - rb.top;

        a.style.opacity = b.style.opacity = 0;

        requestAnimationFrame(() => {
          fa.style.transform = \`translate(\${dx1}px,\${dy1}px)\`;
          fb.style.transform = \`translate(\${dx2}px,\${dy2}px)\`;
        });

        setTimeout(() => {
          [c1.textContent, c2.textContent] = [c2.textContent, c1.textContent];
          fa.remove();
          fb.remove();
          a.style.opacity = b.style.opacity = 1;
          busy = 0;
          up();
        }, 430);
      };

      up();
    }
  };
})();
