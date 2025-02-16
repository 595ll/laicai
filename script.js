let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
const container = document.getElementsByClassName('container')[0];
const question = document.getElementById('question')

// 获取当前页面的 URL 中的查询字符串
const queryString = window.location.search;
// 创建 URLSearchParams 对象
const urlParams = new URLSearchParams(queryString);

const count = urlParams.get('count') || 10

yesButton.innerText = '上贡' + count + 'rmb'

// No 按钮点击事件
noButton.addEventListener("click", function () {
    window.confirm('点到也没用 嘻嘻！')
})

// 为目标元素添加鼠标悬停事件监听器
noButton.addEventListener('mouseover', function () {
    // 获取容器的宽度和高度
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // 获取目标元素的宽度和高度
    const targetWidth = noButton.offsetWidth;
    const targetHeight = noButton.offsetHeight;

    // 生成随机的横坐标，确保元素不会超出容器
    const randomLeft = Math.floor(Math.random() * (containerWidth - targetWidth) + 20);
    // 生成随机的纵坐标，确保元素不会超出容器
    const randomTop = Math.floor(Math.random() * (containerHeight - targetHeight) + 20);

    noButton.style.position = 'absolute';
    // 设置目标元素的新位置
    noButton.style.left = randomLeft + 'px';
    noButton.style.top = randomTop + 'px';
});

noButton.addEventListener('touchstart', function () {
    // 获取容器的宽度和高度
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // 获取目标元素的宽度和高度
    const targetWidth = noButton.offsetWidth;
    const targetHeight = noButton.offsetHeight;

    // 生成随机的横坐标，确保元素不会超出容器
    const randomLeft = Math.floor(Math.random() * (containerWidth - targetWidth) + 20);
    // 生成随机的纵坐标，确保元素不会超出容器
    const randomTop = Math.floor(Math.random() * (containerHeight - targetHeight) + 20);

    noButton.style.position = 'absolute';
    // 设置目标元素的新位置
    noButton.style.left = randomLeft + 'px';
    noButton.style.top = randomTop + 'px';
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!感谢老板大力赞助!! ( >᎑<)♡︎ᐝ</h1>
            <img src="image/xixi.png" alt="喜喜" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});