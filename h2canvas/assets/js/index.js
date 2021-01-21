var API_HOSTS = 'https://www.wangdu.site/wp-json/wp/v2/posts';


req(API_HOSTS)
    // req(YiYan)

function req(api) {
    var request = new XMLHttpRequest();
    request.open('GET', api);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var shuju = request.response;
        showHeroes(shuju);
    };
}

function showHeroes(jsonObj) {
    console.log(jsonObj)
    var imgName = [jsonObj]
    var tBodys = ['tbmain']
    for (var i = 0; i < imgName.length; i++) {
        var tbody = document.getElementById(tBodys[i]);
        for (var j = 0; j < imgName[i].length; j++) {
            var trow = getDataRow(j + 1, imgName[i][j]);
            tbody.appendChild(trow);
        }
    }
};


function getDataRow(i, h) {
    var row = document.createElement('tr'); //创建行
    var idCell = document.createElement('td'); //创建第一列id
    if (i < 10) {
        i = '0' + i
    }
    idCell.innerHTML = i + '：' + h.title.rendered; //填充数据
    row.appendChild(idCell); //加入行  ，下面类似
    return row; //返回tr数据	 
}

function convert() {
    html2canvas(document.querySelector("#capture"), {
        scale: 4
    }).then(canvas => {
        document.body.appendChild(canvas)
        var imgUrl = canvas.toDataURL("image/png", 1);
        // console.log("base64编码数据：", imgUrl);
        var imgSrc = document.createElement('textarea');
        // var imgSrc = document.createElement('img')
        imgSrc.innerHTML = imgUrl;
        // imgSrc.src = imgUrl;
        document.body.appendChild(imgSrc)
        canvas.toBlob(function(blob) {
            saveAs(blob, "文武科技社 - " + getCurrentDate(1) + ".png");
        });
    });
}

var stime = document.getElementById('stime')
stime.innerHTML = getCurrentDate(1)

function getCurrentDate(format) {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth(); //得到月份
    var date = now.getDate(); //得到日期
    var day = now.getDay(); //得到周几
    var hour = now.getHours(); //得到小时
    var minu = now.getMinutes(); //得到分钟
    var sec = now.getSeconds(); //得到秒
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var time = "";
    //精确到天
    if (format == 1) {
        time = year + " 年 " + month + " 月 " + date + " 日";
    }
    //精确到分
    else if (format == 2) {
        time = year + " 年 " + month + " 月 " + date + " 日 " + hour + ":" + minu + ":" + sec;
    }
    return time;
}