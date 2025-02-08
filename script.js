// 🌟 1. 每日一句（随机切换）
const quotes = ["小狗今天也最乖！", "Daddy最爱小狗！", "小狗是Daddy的宝贝！"];
document.getElementById("daily-quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// 🌟 2. 小狗积分系统
let score = localStorage.getItem("score");  
score = score ? parseInt(score) : 5;  // 确保 score 不是 null 或 NaN

function addPoints() {
    score += 5;
    updateScore();
}

function removePoints() {
    score = Math.max(2, score - 2);  // 避免分数变成负数
    updateScore();
}

function updateScore() {
    document.getElementById("score").innerText = score;
    localStorage.setItem("score", score);
}

function completeTask(task, points) {
    if (!task.classList.contains("completed")) {
        task.classList.add("completed");
        score += points;
        updateScore();
        showEffect("+ " + points + "✨", task);
    }
}

// ✨ 弹出加分特效
function showEffect(text, element) {
    let effect = document.createElement("div");
    effect.innerText = text;
    effect.className = "effect";
    document.body.appendChild(effect);
    let rect = element.getBoundingClientRect();
    effect.style.left = rect.left + "px";
    effect.style.top = rect.top - 20 + "px";
    setTimeout(() => effect.remove(), 1000);
}

// 获取积分
let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 5;
document.getElementById("score").textContent = score;

// 增加积分
function addPoints() {
    score += 5;
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
}

// 减少积分
function removePoints() {
    score = Math.max(0, score - 2);
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
}

// 任务存储
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("task-list");

// 显示任务
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="completeTask(${index})">✔ 完成</button> <button onclick="deleteTask(${index})">❌ 删除</button>`;
        taskList.appendChild(li);
    });
}

// 添加任务
function addTask() {
    let taskInput = document.getElementById("task-input");
    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        renderTasks();
    }
}

// 完成任务（加积分）
function completeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    score += 5; // 完成任务加5分
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
    renderTasks();
}

// 删除任务
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// 页面加载时显示任务
document.addEventListener("DOMContentLoaded", renderTasks);

// 🌟 3. 便签（本地存储）
function saveNote() {
    let note = document.getElementById("note").value.trim(); // 去掉前后空格
    if (note !== "") { // 只有非空内容才存储
        localStorage.setItem("xiaogou_note", note);
    }
}

document.getElementById("note").value = localStorage.getItem("xiaogou_note") || ""; // 防止 nullscore;
}

function addSticker(sticker) {
    document.getElementById("note").value += sticker;
}

// 💬 Daddy 和小狗的专属留言区
let messages = JSON.parse(localStorage.getItem("messages")) || [];
const messageList = document.getElementById("message-list");

// 显示留言
function renderMessages() {
    messageList.innerHTML = "";
    messages.forEach((msg, index) => {
        let li = document.createElement("li");
        let sender = msg.startsWith("[Daddy]") ? "❤️" : "🐶";
        li.innerHTML = `${sender} ${msg} <button onclick="deleteMessage(${index})">❌ 删除</button>`;
        messageList.appendChild(li);
    });
}

// 发送留言
function addMessage(sender) {
    let messageInput = document.getElementById("message-input");
    if (messageInput.value.trim() !== "") {
        let formattedMessage = sender === 'daddy' ? `[Daddy] ${messageInput.value}` : `[小狗] ${messageInput.value}`;
        messages.push(formattedMessage);
        localStorage.setItem("messages", JSON.stringify(messages));
        messageInput.value = "";
        renderMessages();
    }
}

// 删除留言
function deleteMessage(index) {
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    renderMessages();
}

// 页面加载时显示留言
renderMessages();

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

function toggleCanvas() {
    let canvas = document.getElementById("pixelCanvas");
    canvas.style.display = canvas.style.display === "none" ? "block" : "none";
}
