var imgs = document.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].src.includes('https://cdn.jsdelivr.net/gh/dongyubin/') > 0 || imgs[i].src.includes('https://res.smzdm.com/images/emotions/') > 0) {
        console.log(imgs[i].src)
        imgs[i].style.display = "initial";
    }
}