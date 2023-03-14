let cont = document.getElementsByClassName('container')[0];
let bt = document.getElementsByClassName('bottom')[0];
ce(3);
function ce(n) {
    for (let i = 0; i < n; i++) {
        let star = create('div');
        star.className = 'star';
        star.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
            <path
                fill='currentColor'
                d='M13.211 3.102c-.495-1.003-1.926-1.003-2.421 0L8.432 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.19 1.104.968 1.945 1.958 1.424L12 18.862l4.716 2.48c.99.52 2.148-.32 1.959-1.423l-.9-5.251l3.815-3.72c.8-.78.359-2.141-.749-2.302L15.57 7.88l-2.36-4.778Zm-12.047.679a.75.75 0 0 0 .118 1.054l2.5 2a.75.75 0 1 0 .937-1.171l-2.5-2a.75.75 0 0 0-1.055.117Zm21.672 14.437a.75.75 0 0 0-.117-1.054l-2.5-2a.75.75 0 0 0-.938 1.171l2.5 2a.75.75 0 0 0 1.055-.117ZM1.282 17.164a.75.75 0 1 0 .937 1.171l2.5-2a.75.75 0 0 0-.937-1.171l-2.5 2ZM22.836 3.78a.75.75 0 0 1-.117 1.054l-2.5 2a.75.75 0 0 1-.938-1.171l2.5-2a.75.75 0 0 1 1.055.117Z'
            />
        </svg>;`;
        cont.appendChild(star);
        star.style.left = getRan(1, 100) + 'px';
        star.style.top = getRan(1, 100) + 'px';
        star.style.opacity = 1;
        star.style.transform = `scale(1)`;
        setInterval(() => {
            anima(star);
        }, 300);
    }
}
function create(tag) {
    return document.createElement(tag);
}
function anima(obj) {
    const left = parseInt(obj.style.left) + 20 + 'px';
    const top = parseInt(obj.style.top) + 20 + 'px';
    const scale = +obj.style.transform.split(/\(|\)/)[1];
    // console.log(scale);
    obj.style.left = left;
    obj.style.top = top;
    obj.style.opacity -= 0.05;

    obj.style.transform = `scale(${scale - 0.05})`;

    if (obj.style.opacity <= 0 || parseInt(left) >= 350 || parseInt(top) >= 600) {
        obj.style.left = getRan(1, 100) + 'px';
        obj.style.top = getRan(1, 100) + 'px';
        obj.style.opacity = 1;
        obj.style.transform = `scale(1)`;
    }
}

let wordsArr = [
    '空山新雨后，天气晚来秋。明月松间照，清泉石上流。',
    '绿蚁新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？',
    '水是眼波横，山是眉峰聚。欲问行人去那边？眉眼盈盈处。',
    '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。',
    '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。'
];
function getRan(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
handWord(wordsArr);
setInterval(() => {
    handWord(wordsArr);
}, 3000);
function handWord(item) {
    const poem = item[getRan(0, item.length - 1)];
    const len = Math.floor(poem.length / 2);
    const lines = [poem.slice(0, len), poem.slice(len)].map(text => `<p>${text}</p>`);
    bt.innerHTML = lines.join('');
}
let lists = document.getElementsByClassName('list');
let listItem = document.getElementsByClassName('item');
let holder = document.getElementsByClassName('holder')[0];
let right = document.getElementsByClassName('right')[0];
let items = document.getElementsByClassName('item');
let rc = document.getElementsByClassName('right-case')[0];
let hts = document.getElementsByClassName('holder-time');
let texts = document.getElementsByClassName('text');

const navFn = e => {
    Array.from(lists).forEach((item, index) => {
        item.classList.remove('active');
    });
    const el = e.target;
    const text = el.innerText;
    el.parentNode.classList.add('active');
    if (text.includes('首页')) {
        holder.style.display = 'none';
        rc.style.display = 'none';
        right.style.display = 'block';
    } else {
        holder.style.display = 'block';
        rc.style.display = 'none';
        right.style.display = 'none';
    }
};
const bindNavEvent = () => {
    Array.from(texts).forEach(el => el.addEventListener('click', navFn));
};

bindNavEvent();
Array.from(hts).forEach(item => {
    item.innerHTML = getT();
});
// console.log(hts);
function getT() {
    let y = new Date().getFullYear(),
        m = judge(new Date().getMonth() + 1),
        d = judge(new Date().getDate());
    time = y + '年' + m + '月' + d + '日';
    return time;
}
function judge(n) {
    return n < 10 ? '0' + n : n;
}

Array.from(items).forEach(item => {
    item.addEventListener(
        'click',
        function () {
            holder.style.display = 'none';
            right.style.display = 'none';
            rc.style.display = 'block';
        },
        false
    );
});
