const sleep = (t) => new Promise(r => setTimeout(r, t))

$(document).ready(async function () {
    try {
        await check();
        async function check() {
            if (document.getElementById('kdesseqvalue') == null) {
                await append();
            } else {
                await sleep(500);
                return check();
            }
        }
        async function append() {
            let item = null;

            item = document.querySelector("body > header > div.container.relative.flex.h-20.md\\:h-26 > div.flex.items-center.h-full.ml-auto > div.items-center.hidden.ml-8.md\\:flex.pt-0\\.5");
            item.setAttribute("class", item.getAttribute("class") + " bg-navy-750 rounded-lg")
            item.setAttribute("style", "position: fixed; margin-left: 21%; padding-right: 15px;");

            item = document.querySelector("body > header > div.container.relative.flex.h-20.md\\:h-26 > div.flex.items-center.h-full.ml-auto > div.absolute.top-0.left-0.z-20.w-screen.h-screen.pb-20.mt-20.mobile-nav.js-nav");
            item.setAttribute("class", "top-0 left-0 z-20 w-screen h-screen pb-20 mt-20 mobile-nav js-nav");

            let FETCH_URL = "https://key-drop.com/en/panel/deposit/load_inventory";
            let VALUE = 0;
            const data = await fetch(FETCH_URL);
            const datajson = await data.json();
            datajson.items.forEach(item => {
                VALUE += item.price * 5;
            });
            VALUE = VALUE.toFixed(2);
            
            item = document.querySelector("body > header > div.container.relative.flex.h-20.md\\:h-26 > div.flex.items-center.h-full.ml-auto > div.items-center.hidden.ml-8.md\\:flex.pt-0\\.5 > div.flex.items-center.bg-navy-750.rounded-lg.p-3\\.5 > div.flex.items-center.ml-6");
            item.insertAdjacentHTML("beforebegin", `
            <div class="flex flex-col ml-6" id="kdesseqvalue">
            <span class="flex mb-1 font-semibold text-2xs text-navy-100">
            
            INVENTORY VALUE </span>
            <span class="text-sm font-semibold leading-none uppercase text-gold-500 saldo_punkty">
            PLN&nbsp;${VALUE} </span>
            </div>
            `);
        }
    } catch(err) {
        console.log(err);
    }
});