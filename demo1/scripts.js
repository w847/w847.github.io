/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-16 22:54:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-20 04:47:41
 * @FilePath: \demo1\scripts.js
 * 
 */




let canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d'),
    width = canvas.width = 1920,
    height = canvas.height = 1080,

    //控制操作元素
    trueControlButton = document.getElementById("control"),
    oAdd = document.getElementById("add"),
    oSave = document.getElementById("save"),
    oWatch = document.getElementById("watch"),
    oPost = document.getElementById("post"),
    controlButton = document.getElementById("close"),
    replace = document.getElementById("replace"),
    bool = false,
    bool2 = true,
    tmpObject = "{";

// 获取输入框文本
speaker = document.getElementById("input_speaker"),
    content = document.getElementById("input_content");

//canvas初始化代码主体
function start() {
    //监听事件
    //addEventListener("key",()=>{},ture);
    context.clearRect(0, 0, width, height);
    randomImage();


}
start();

//点击canvas元素全屏
canvas.addEventListener("click", () => { document.body.requestFullscreen() }, true);


speaker.innerHTML = "请输入";
content.innerHTML = "请输入";


// 输出用户输入的内容到tmpObject















//控制部件被点击时该执行的代码
controlButton.addEventListener("click", () => {
    if (bool) {
        trueControlButton.style.width = "75px";
        let childDiv = trueControlButton.getElementsByTagName("div");
        for (i = 0; i < childDiv.length; i++) {
            childDiv[i].style.display = "none";
        }
        controlButton.style.display = "block";
        controlButton.innerHTML = "打开"
        bool = false;
    }
    else {
        trueControlButton.style.width = "375px";
        let childDiv = trueControlButton.getElementsByTagName("div");
        for (i = 0; i < childDiv.length; i++) {
            childDiv[i].style.display = "block";
        }
        controlButton.innerHTML = "关闭"
        bool = true;
    }
}, true)
oSave.addEventListener("click", () => {
    outputJson();
}, true)
oWatch.addEventListener("click", () => {
    if (bool2) {
        replace.style.display = "block";
        replace.innerText = tmpObject;
        bool2 = false;
    }
    else {
        replace.style.display = "none";
        tmpObject = replace.innerText;
        bool2 = true;
    }
}, true)
oPost.addEventListener("click", () => {
    alert("没买域名你post你🐎呢");
}, true)
oAdd.addEventListener("click", () => {
    tmpObject += '"' + speaker.innerHTML + '"' + ":" + '"' + content.innerText + '"' + ",";
}, true)











//下载文件
function downloadStr(text, type, name) {
    const blob = new Blob([text], {
        type: type + "/plain;charset=utf-8"
    })
    let domA = document.createElement("a");
    domA.href = URL.createObjectURL(blob);
    domA.download = name;
    domA.click();
}

//输出json
function outputJson() {
    let tmp = tmpObject;
    tmp = tmp.substring(0, tmp.length - 1);
    tmp += "}"
    downloadStr(tmp, "json", "output.json");
};






// 娱乐性插件


function randomImage() {
    let oImg = new Image();
    if (screen.width > screen.height) {
        oImg.src = "https://www.dmoe.cc/random.php";
    }else{
        oImg.src = "http://api.klpbbs.com/api/img/acg-phone"
    }
    oImg.onload = () => {
        context.drawImage(oImg, 0, 0, width, height);
        console.log("ok");
    }
}