new Vue({
    el: '#app',
    data: {
        contentEditor: '',
    },
    mounted() {
        let contentEditor = null;
        contentEditor = new Vditor('vditor', {
            mode: 'sv',
            CDN: 'https://cdn.jsdelivr.net/gh/dongyubin/vditor@1.1',
            typewriterMode: true,
            placeholder: '请输入文章内容',
            toolbarConfig: {
                pin: true,
            },
            outline: true,
            cache: {
                enable: true,
                id: '__vditor_content'
            },
            counter: {
                enable: true,
                // type: 'text'
            },
            preview: {
                delay: 200,
                markdown: {
                    autoSpace: true,
                    theme: 'wechat',
                    chinesePunct: true,
                },
                hljs: {
                    enable: true,
                    lineNumber: true,
                    style: "monokai",
                },
                theme: {
                    // current: 'dark',
                    list: { wechat: "WeChat" }
                },
                maxWidth: 800,
            },
            hint: {
                emoji: {
                    'doge': 'https://cdn.jsdelivr.net/npm/vditor@3.7.4/dist/images/emoji/doge.png',
                    'wulian': 'https://cdn.jsdelivr.net/npm/vditor@3.7.4/dist/images/emoji/wulian.png',
                    'huaji': 'https://cdn.jsdelivr.net/npm/vditor@3.7.4/dist/images/emoji/huaji.gif'
                },
                emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@3.7.4/dist/images/emoji/',
            },
            upload: {
                // headers: "{'Content-Type': 'multipart/form-data'}",
                // headers: "{'Access-Control-Allow-Origin': '*'}",
                // headers: "'content-type': 'application/json;charset=UTF-8'",
                accept: ".jpg,.jpeg,.png,.gif",
                handler(files) {
                    var data = {
                        "msg": "",
                        "code": 0,
                        "data": {
                            "errFiles": [],
                            "succMap": {}
                        }
                    };
                    let formData = new FormData();
                    let xhr = new XMLHttpRequest();
                    let tmp = '';
                    var obj = '';
                    // url = 'http://img.abcyun.co/api/upload';
                    // for (var i in files) {
                    //     formData.append('file', files[i]);
                    //     xhr.open("post", url, true);
                    //     xhr.onload = function() {
                    //         if (xhr.readyState === 4 && xhr.status === 200) {
                    //             console.log("上传成功");
                    //             obj = JSON.parse(xhr.responseText);
                    //             data.data.succMap[files[i].name] = obj.data.path;
                    //             tmp = '![' + files[i].name + '](' + obj.data.path + ')';
                    //             contentEditor.insertValue(tmp);
                    //         } else {
                    //             data.data.errFiles = files[i].name;
                    //         }
                    //     }
                    // }
                    url = 'https://img.abcyun.co/api/upload';
                    for (var i in files) {
                        formData.append('apiType', 'ali');
                        formData.append('token', 'fdf10db36fb501370d919f44a5b9379a')
                            // formData.append('Filedata', files[i]);
                        formData.append('image', files[i]);
                        xhr.open("post", url, true);
                        xhr.onload = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                console.log("上传成功");
                                obj = JSON.parse(xhr.responseText);
                                data.data.succMap[files[i].name] = obj.data.url.distribute;
                                tmp = '![' + files[i].name + '](' + obj.data.url.distribute + ')';
                                contentEditor.insertValue(tmp);
                            } else {
                                data.data.errFiles = files[i].name;
                            }
                        }
                    }

                    xhr.send(formData);
                    console.log(data);
                    return data;
                },

            },
            toolbar: [
                "emoji",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                // "upload",
                "table",
                "|",
                "undo",
                "redo",
                "|",
                "fullscreen",
                // "edit-mode",
                {
                    name: "more",
                    toolbar: [
                        "both",
                        "code-theme",
                        "content-theme",
                        "export",
                        "outline",
                        "preview",
                        "help",
                    ],
                }, {
                    name: 'insert',
                    tipPosition: 's',
                    tip: '插入首图',
                    className: 'right',
                    icon: '<svg t="1608795606909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3356" width="200" height="200"><path d="M512 931.47C280.71 931.47 92.54 743.3 92.54 512S280.71 92.53 512 92.53 931.46 280.7 931.46 512 743.29 931.47 512 931.47z m0-773.19C317 158.28 158.29 317 158.29 512S317 865.72 512 865.72 865.71 707 865.71 512 707 158.28 512 158.28z" fill="#2F3240" p-id="3357"></path><path d="M672.38 684.4a32.77 32.77 0 0 1-21.55-8.07L479.12 527V266.81a32.87 32.87 0 1 1 65.74 0V497L694 626.72a32.87 32.87 0 0 1-21.59 57.68z" fill="#4CC9C5" p-id="3358"></path><path d="M512 512m-76.62 0a76.62 76.62 0 1 0 153.24 0 76.62 76.62 0 1 0-153.24 0Z" fill="#2F3240" p-id="3359"></path></svg>',
                    click() {
                        var text = getElementsByClassName("vditor-counter vditor-tooltipped vditor-tooltipped__nw")[0].textContent;
                        if (text > 10000) {
                            text = text - 11520;
                        } else {
                            text = text;
                        }
                        var p1 = readT(text);
                        var context = '<section><section class="left_zong"><section class="left_zong_zp"><img src="https://gitee.com/wangdudyb/wechat-pictures/raw/master/img/QRcode_C1.jpg"/></section><p>文武科技社</p></section><section class="right_zong"><section class="right_zong_bk">' + p1 + '</section></section></section>';
                        contentEditor.insertValue(context)
                    },
                }, {
                    name: 'insert',
                    tipPosition: 's',
                    tip: '表情包',
                    className: 'right',
                    icon: '<svg t="1608879773089" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6807" width="200" height="200"><path d="M180.153533 516.28744a343.466667 343.466667 0 1 0 663.252797-178.810324 343.466667 343.466667 0 1 0-663.252797 178.810324Z" fill="#FFE500" p-id="6808"></path><path d="M422.4 96C241.066667 147.2 132.266667 334.933333 181.333333 516.266667s236.8 290.133333 420.266667 241.066666c183.466667-49.066667 290.133333-236.8 241.066667-420.266666C793.6 155.733333 605.866667 46.933333 422.4 96z m166.4 612.266667c-166.4 44.8-337.066667-53.333333-384-219.733334C160 322.133333 258.133333 149.333333 426.666667 104.533333c166.4-44.8 337.066667 53.333333 384 219.733334 42.666667 168.533333-55.466667 339.2-221.866667 384z" fill="#EBCB00" p-id="6809"></path><path d="M342.476856 188.754009a25.6 102.4 74.912 1 0 197.739964-53.30991 25.6 102.4 74.912 1 0-197.739964 53.30991Z" fill="#FFF48C" p-id="6810"></path><path d="M238.933333 906.666667a273.066667 32 0 1 0 546.133334 0 273.066667 32 0 1 0-546.133334 0Z" fill="#45413C" p-id="6811"></path><path d="M692.593577 467.525486a25.6 42.666667 74.912 1 0 82.391652-22.212463 25.6 42.666667 74.912 1 0-82.391652 22.212463Z" fill="#FFAA54" p-id="6812"></path><path d="M295.738819 574.158607a25.6 42.666667 74.906 1 0 82.389325-22.22109 25.6 42.666667 74.906 1 0-82.389325 22.22109Z" fill="#FFAA54" p-id="6813"></path><path d="M448 586.666667c-4.266667 2.133333-8.533333 4.266667-10.666667 8.533333-2.133333 4.266667-2.133333 8.533333 0 12.8 23.466667 53.333333 83.2 83.2 142.933334 66.133333 57.6-14.933333 96-70.4 89.6-128 0-4.266667-2.133333-8.533333-6.4-10.666666-4.266667-2.133333-8.533333-4.266667-12.8-2.133334L448 586.666667z" fill="#FFB0CA" p-id="6814"></path><path d="M659.2 605.866667c-25.6-6.4-61.866667-6.4-98.133333 2.133333-36.266667 10.666667-66.133333 27.733333-85.333334 46.933333 27.733333 21.333333 66.133333 29.866667 104.533334 19.2 36.266667-8.533333 66.133333-34.133333 78.933333-68.266666z" fill="#FF87AF" p-id="6815"></path><path d="M1000.533333 469.333333c-51.2 89.6-142.933333-38.4-215.466666-34.133333 78.933333-98.133333 268.8-55.466667 215.466666 34.133333z" fill="#00B8F0" p-id="6816"></path><path d="M785.066667 437.333333h4.266666c87.466667-61.866667 228.266667-19.2 185.6 59.733334 8.533333-4.266667 17.066667-12.8 23.466667-25.6 55.466667-91.733333-134.4-134.4-213.333333-34.133334z" fill="#4ACFFF" p-id="6817"></path><path d="M864 234.666667c38.4 55.466667-61.866667 74.666667-78.933333 119.466666-38.4-74.666667 40.533333-174.933333 78.933333-119.466666z" fill="#00B8F0" p-id="6818"></path><path d="M785.066667 354.133333c0-2.133333 0-2.133333 2.133333-2.133333-12.8-68.266667 51.2-140.8 87.466667-93.866667 0-6.4-4.266667-12.8-8.533334-21.333333-40.533333-57.6-119.466667 42.666667-81.066666 117.333333z" fill="#4ACFFF" p-id="6819"></path><path d="M1006.933333 296.533333c-6.4 46.933333-68.266667 8.533333-98.133333 23.466667 17.066667-55.466667 104.533333-70.4 98.133333-23.466667z" fill="#00B8F0" p-id="6820"></path><path d="M908.8 320h2.133333c25.6-40.533333 93.866667-49.066667 89.6-6.4 2.133333-4.266667 4.266667-8.533333 6.4-14.933333 6.4-49.066667-81.066667-34.133333-98.133333 21.333333z" fill="#4ACFFF" p-id="6821"></path><path d="M110.933333 710.4c89.6 51.2 104.533333-104.533333 168.533334-136.533333-117.333333-46.933333-258.133333 83.2-168.533334 136.533333z" fill="#00B8F0" p-id="6822"></path><path d="M281.6 571.733333c-2.133333 0-2.133333 2.133333-4.266667 2.133334-106.666667-8.533333-206.933333 98.133333-132.266666 145.066666-10.666667 0-21.333333-2.133333-34.133334-10.666666-89.6-51.2 51.2-181.333333 170.666667-136.533334z" fill="#4ACFFF" p-id="6823"></path><path d="M110.933333 437.333333c-6.4 68.266667 91.733333 32 128 64-4.266667-83.2-121.6-132.266667-128-64z" fill="#00B8F0" p-id="6824"></path><path d="M241.066667 501.333333l-2.133334-2.133333c-23.466667-66.133333-115.2-96-121.6-38.4-2.133333-6.4-4.266667-12.8-2.133333-23.466667 2.133333-68.266667 119.466667-19.2 125.866667 64z" fill="#4ACFFF" p-id="6825"></path><path d="M19.2 563.2c29.866667 38.4 61.866667-25.6 96-29.866667-40.533333-40.533333-125.866667-8.533333-96 29.866667z" fill="#00B8F0" p-id="6826"></path><path d="M117.333333 533.333333h-2.133333c-44.8-21.333333-106.666667 6.4-81.066667 38.4-4.266667-2.133333-8.533333-4.266667-12.8-10.666666-32-36.266667 53.333333-68.266667 96-27.733334z" fill="#4ACFFF" p-id="6827"></path></svg>',
                    click() {
                        window.open('https://wangdudyb.gitee.io/blog/emoji/')
                    },
                }
            ],
            toolbarConfig: {
                hide: false,
                pin: false,
            },
            // after: () => {
            // this.contentEditor.setValue('请输入文章内容......')
            // },
        })
    },
}) 


function getElementsByClassName(className, tagName) {
    var ele = [],
        all = document.getElementsByTagName(tagName || "*");
    for (var i = 0; i < all.length; i++) {
        if (all[i].className == className) {
            ele[ele.length] = all[i];
        }
    }
    return ele;
}

function readT(rT) {
    var readTime = rT / 500;
    var suduTime = rT / 1300;
    var p1 = '';
    console.log(suduTime);
    var readTime = Math.round(readTime);
    var suduTime = Math.round(suduTime);
    if (readTime > 1 || suduTime > 1) {
        p1 = '<p>读完需要</p><section>' + readTime + '</section>分钟<p class="sudu">速读仅需 ' + suduTime + ' 分钟</p>';
        return p1;
    } else {
        p1 = '<p>读完需要</p><section>' + 1 + '</section>分钟<p class="sudu">速读仅需 ' + 1 + ' 分钟</p>';
        return p1;
    }
}