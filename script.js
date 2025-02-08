// 📜 1. 每日一句（随机切换）
const quotes = ["小狗今天也最乖！", "Daddy最爱小狗！", "小狗是Daddy的宝贝！"];
document.getElementById("daily-quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// 💖 2. 小狗积分系统
let score = 5;
function addPoints() {
    score += 5;
    updateScore();
}
function removePoints() {
    score -= 2;
    updateScore();
}
function updateScore() {
    document.getElementById("score").innerText = score;
}

// 🎮 3. 便签机（本地存储）
function saveNote() {
    let note = document.getElementById("note").value;
    localStorage.setItem("xiaogou_note", note);
}
document.getElementById("note").value = localStorage.getItem("xiaogou_note") || "";

// 🎨 4. 画板（像素绘制）
const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", function(event) {
    ctx.fillStyle = "black";
    ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
});
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}