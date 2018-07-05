// 把code写到code和style标签里面
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code');
  // domCode.innerHTML = prefix;
  let n = 0;
  let timer = setInterval(() => {
    n++;
    console.log('开始写代码');
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
    // code.innerHTML = code.innerHTML.replace('html','<span style="color:#963">html</span>')
    styleTag.innerHTML = prefix + code.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight;
    if (n >= code.length) {
      window.clearInterval(timer);
      console.log('done');
      fn.call();
    }
  }, 10)
}

function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper > content');
  let n = 0;
  let timer = setInterval(() => {
    n++;
    domCode.scrollTop = domPaper.scrollHeight;
    if (n >= markdown.length) {
      window.clearInterval(timer);
      console.log('done');
      fn.call();
    }
  }, 10)
}


var result = `/*
锦瑟无端五十弦，
一弦一柱思华年；
庄生晓梦迷蝴蝶，
望帝春心托杜鹃；
沧海月明珠有泪，
蓝田日暖玉生烟；
此情可待成追忆，
只是当时已惘然。*/
*{
  transition:all 1s;
}
html{
    background:#1E1E34;
    font-size:16px;
}
#code {
  border:1px solid #369;
  padding:16px;
}

/* 代码高亮*/
.token.selector{
  color: #690;
}
.token.property{
  color:#905;
}
.token.function{
  color:#dd4a68;
}
/*加点3D效果*/
#code {
  transform:rotate(360deg);
  position:fixed;
  left:0;
  width:50%;
  height:100%;
}
#paper {
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:#eee;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:16px;
}
#paper > .content {
  background:#a99;
  height:100%;
  width:100%;
}
/*正经一点*/
/*来张A4纸*/

`;

var result2 = `
  #paper{
    background:#999;
  }

  /* 接下来 把md 变成 html marked.js*/
  /* 接下来 给html加样式*/

`
var md = `
# 短歌行
对酒当歌
人生几何
譬如朝露
去日苦多
慨当以慷
忧思难忘
何以解忧
唯有杜康
#接
青青子衿
悠悠我心
但为君故
沉吟至今

`

writeCode('', result, () => {
  createPaper(() => {
    console.log('paper有了');
    writeCode(result, result2,()=>{
      writeMarkdown(md);
    });

  });
});

// 1.定闹钟
// 2.writeCode 返回
// 3.执行fn2
// 4.闹钟时间到
// 5.写第一行代码




function createPaper(fn) {
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
  fn.call();
}

