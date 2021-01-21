# 最Nice的微信排版

### 简介

这款编辑器可以将 Markdown 转换成微信公众号编辑器的样式，只需将 MD 文档复制到左侧栏，再在右侧栏顶部"点击复制"，右侧预览内容就可被复制到公众号后台。

这让你在公众号创作时，把更多的时间专注于文章本身，而不是繁琐地调整文章样式。


### 功能

- 支持序号列表和圆点列表，解决了样式会被重置的问题
- 外链会自动转换为参考文献索引，并且附在文章末尾
- 支持多种字体和样式
- 支持日语注音假名、汉语拼音样式
- 支持不同于微信的代码配色方案
- 支持编辑内容自动保存、预览同步滚动等常见功能

### 关于 Markdown

1. Markdown 是一种轻量级标记语言，能将文本换成有效的 XHTML(或者HTML) 文档
2. Markdown 强大之处，在于可以用一套格式，在所有支持 Markdown 的编辑器中转换成发布样式，做到最大化兼容，不需要担心复制到不同编辑器中样式被破坏
3. 正如你右侧看到的这样，Markdown 被转换成了微信支持的样式，同样你可以在一字不改的情况下，在 Github 等平台上转换类似的样式
4. 学习 Markdown 的语法，可以查看 [Markdown 语法入门手册](https://www.w3cschool.cn/markdownyfsm/markdownyfsm-odm6256r.html)

## 更多样式

### 注音符号

[注音符号 W3C 定义](http://www.w3.org/TR/ruby/)。

支持日语注音假名、汉语拼音。

用法有以下几种：

* 世界{せかい}
* 小夜時雨{さ・よ・しぐれ}
* 食べる{たべる}
* 丧心病狂{gàn・de・piào・liang}

### 图片

接下来是一张图片。你可以用自己图床，也可以上传到微信媒体库再把图片 URL
粘贴回来，或者编辑好以后，在公众号里插入图片。

![这里可以写图片描述](https://wangdudyb.gitee.io/img/wwgzh.png)

如果使用图床链接的话，有可能复制后图片不能被上传，需要手动在微信重新上传替换。

### 代码块

代码高亮使用了 Github 配色方案，后续会加入更多配色。

**注意：由于微信编辑器限制，复制后若在微信编辑器中点击代码块，会被微信自动重置后它的配色，只能重新再复制**

```cpp
#include <stdio.h>

const int MAX = 10;
int cache[MAX] = {0};

int fib(int x) {
  if (x == 1) return 1;
  if (x == 0) return 0;
  if (cache[x] == 0) {
    int ret = fib(x - 1) + fib(x - 2);
    cache[x] = ret;
  }
  return cache[x];
}

int main() {
    int i;
    printf("fibonacci series:\n");
    for (i = 0; i < MAX; ++i) {
        printf("%d ", fib(i));
    }
    return 0;
}
```

### 内联代码

inline code `{code: 0}`

### 表格

表格无法使用自定义样式，暂时没找到解决途径

| Header 1 | Header 2 |
| --- | --- |
| Key 1 | Value 1 |
| Key 2 | Value 2 |
| Key 3 | Value 3 |

### 超链接

如果是公众号文章的超链接，是可以点击打开的，但其他链接都无法点击，所以这里使用类似于文献的底部引用。

例如：

[这是一篇公众号文章](https://mp.weixin.qq.com/s/ahpV7Poj5wHmtUP6vqy3gg)

[通过引号设置引用名]( "这是自定义的引用名")

[本项目是 Fork 自 Lyric 原项目后的二次开发，感谢他的贡献！](https://github.com/lyricat/wechat-format "原项目代码库")

![](https://imgkr.cn-bj.ufileos.com/6a36b22c-9fac-441f-a54b-5663dda6061b.gif)
<center>
<p>大家好，欢迎来到<strong>文武科技社</strong></p>
<p>我是爱分享黑科技的<strong>斌仔</strong></p>
</center>

## 推荐阅读
### 黑苹果
[黑苹果介绍](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484396&idx=1&sn=26d8df8832c5a24db47fec88f665534a&chksm=fb556862cc22e17481a8e93d305ba3f8305884c203f633fa2e7777a6bad07df997acde649fe9&scene=21#wechat_redirect)、[黑苹果配置](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247483950&idx=1&sn=d6ddcf7c08ed9e9354cdc2dadcdff504&chksm=fb5569a0cc22e0b60d4ad0c3fb7f50a2e45df57b43a5a68d32fd2f1082c8c1e973dc2f54c86c&scene=21#wechat_redirect)、[宏碁笔记本黑苹果](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247483957&idx=1&sn=27976a11668783d199a0ea87dc8c8c5d&chksm=fb5569bbcc22e0ad1f28847016e9b167e657d33479727c3ddad0091c78e8565d4bab8586d98d&scene=21#wechat_redirect)、[华硕笔记本黑苹果](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247483983&idx=1&sn=60e3c053c7d838abc1d976d62e2dc86e&chksm=fb5569c1cc22e0d7b2d25b9024e2ee4439d7694f79b2615e7cb0e36f7a489ba4fd8c6d604e4d&scene=21#wechat_redirect)、[黑苹果/笔记本/兼容性](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484087&idx=1&sn=f1cb0eaa903f6d0be9d483095e4429e6&chksm=fb556939cc22e02f311abd667ca86062a50b4157e00648f0d724194e86cf81663a2dc7c1907d&scene=21#wechat_redirect)、[nuc8i5beh黑苹果](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484130&idx=1&sn=2ea70b6edd4c6d87871445c2d8c85a7f&chksm=fb55696ccc22e07a934f12de4f8a88cca9f547929cb05aecaef383d0f0b0f0b0fb92c79865be&scene=21#wechat_redirect)、[黑苹果教程网站](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484421&idx=1&sn=8aa59c8309b6e81438d504d60e610b87&chksm=fb556f8bcc22e69d06f10bfa14c08106e5319389a7747ee5bad7797b21d9355758ced0a0d386&scene=21#wechat_redirect)、[itx黑苹果主机](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484794&idx=1&sn=739568e0830562a46583dc32ccedfb1d&chksm=fb556ef4cc22e7e2ca87920dd6007122fffa3a83cf7fa467b5cac710618aa37231cfa66354a5&scene=21#wechat_redirect)

### MacOS

[mac（2020）实用工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484389&idx=1&sn=8228bd8dee22516a544723bef7cac98a&chksm=fb55686bcc22e17d423ba5ac8d0f8b42548d53bcb1115f51de4ec77d5806b9846b1508fa57c0&scene=21#wechat_redirect)、[final cut pro教程](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484173&idx=1&sn=58ea01b4d192a0964b81b68af727f7fe&chksm=fb556883cc22e19594166e7044402eb7246d879c485bb407159bfddad60025804a7c502fd64f&scene=21#wechat_redirect)、[Mac跑分工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484507&idx=1&sn=ebae5fa0dbf7440a9d5fb7ce2af5f891&chksm=fb556fd5cc22e6c329d55ccc14b9b31cc709586da7f716c9b022c8cc38fb4a0e7b46c33909ae&scene=21#wechat_redirect)

### WIndows

[win10（2004）尝鲜](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484692&idx=1&sn=4d37189844af3af2f9eb716a0ced6f95&chksm=fb556e9acc22e78c3b0c2a5177284bf5cd8a317024c677d2188db292b98143f0341d35594763&token=1998550639&lang=zh_CN#rd)、[免费使用Catalina动态桌面壁纸](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484342&idx=1&sn=dfc979746226371907d7928d00821fcf&chksm=fb556838cc22e12e83da914cdb0682e195ef74a9725de04e2665ed9aceefcb8b65c873b14319&scene=21#wechat_redirect)、[激活工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484428&idx=1&sn=5240646d01865cf909ce48500fd92b4a&chksm=fb556f82cc22e694c89ca5b01794371931904ac067e531f9d6a478cccc55c3f88ab992f994fe&scene=21#wechat_redirect)
、[网盘下载神器](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484531&idx=1&sn=aa997f71385dcaa0882e8a887799db1f&chksm=fb556ffdcc22e6eb5c51a155825d10bb4dfc05d578a444fe43e3652a045f6238450437e10cb4&scene=21#wechat_redirect)
、[鼠标手势工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484513&idx=1&sn=a413162adc4cc2d65168b7efbb36d4ed&chksm=fb556fefcc22e6f98e48295f6b50178c5fc0f4e8082bfd3b5e4da3a69759a09cc7ce8cd912bc&scene=21#wechat_redirect)
、[Jetbrains系列激活工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484531&idx=2&sn=1aa143b49e508e77e73edf2690cd185d&chksm=fb556ffdcc22e6eb6feb81caaa6815583e7d8cc6cc791f35f3437bd2c4a289214d5916a8cb13&scene=21#wechat_redirect)
、[办公软件合集](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484445&idx=1&sn=526503fc67f90c891098cfb0286697ef&chksm=fb556f93cc22e685ef243051f7106a2d82a1d253381efefdbae28705c76602767ef692b0f615&scene=21#wechat_redirect)
、[文件管理工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484487&idx=1&sn=749dc47383ea88ce7dec336a3426af54&chksm=fb556fc9cc22e6df4da52df9f5b7eceb7f03e418b4af31c669cf7b8db89657cd49b6593632ac&scene=21#wechat_redirect)
、[桌面美化工具](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484448&idx=1&sn=42118a0ecbff111073f114ddafc6d6e2&chksm=fb556faecc22e6b8e71ae6b8b037a731380bd7db316dc2494d0bb2776ae98a7300b97109e7b5&scene=21#wechat_redirect)
、[播放器](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484451&idx=1&sn=abf5c03378f90eeb50d52ade75cc08df&chksm=fb556fadcc22e6bb69b34572af05fd15f0886f02a947ad9666383919f0aa21b5d4878f187e1f&scene=21#wechat_redirect)
、[无损下载歌曲](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484455&idx=1&sn=88f1d2ca7cf2adeff933db9cf308cc79&chksm=fb556fa9cc22e6bf5a14a43ef9f1e6f8712a195877e9dee2bbc6207d2c79774641ac0816f43a&scene=21#wechat_redirect)
、[GitHub release下载利器](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484398&idx=1&sn=b34ce54e6b36ff09ee75677375cefb06&chksm=fb556860cc22e1767571fc2c2971c7f206a77acf176277260acb08dc4a3c99eb1315c330eafe&scene=21#wechat_redirect)
、[Chrome清理内存](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484470&idx=1&sn=063edd9774f8a74fce38287415a5ad41&chksm=fb556fb8cc22e6ae6e792298958c29b7061a640412bd5b34469bc8f913b55c0cde6a84ecab85&scene=21#wechat_redirect)
、[谷歌地球](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484489&idx=1&sn=ca645f0bec2f98d4447f92ade0a672cb&chksm=fb556fc7cc22e6d11b9ef6dde9818d0416d22b5c6d2dcafe5bcc18392c35e46c47f0678ff768&scene=21#wechat_redirect)
、[大型单机游戏](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484481&idx=1&sn=d44ca4752929cb86809ee6d862c02795&chksm=fb556fcfcc22e6d9c37c0c167f2f4a926f8510db95b4bf5ff2664c049236ba36b6ea33e58676&scene=21#wechat_redirect)

### APP/IOS

[动漫app](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484434&idx=1&sn=e16cf4aa1faa9a250d09eaa39d52c06c&chksm=fb556f9ccc22e68a77edd929f0c38701f9d6c76347016188fb21846fb9a82afb293f89c55045&scene=21#wechat_redirect)  、[电影播放器](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484443&idx=1&sn=e8502dda9a9fc1c18dd593d802232604&chksm=fb556f95cc22e68376b4b5f5aa024930e1da48524d5d75e0102c19d0db3c07b68ae1a262382e&scene=21#wechat_redirect)  、[IOS影视软件合集](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484479&idx=1&sn=5dc7ce9d048ea271c428086c4fe37137&chksm=fb556fb1cc22e6a7f8d2e2f3d572c92e5728b01371f58e58690a1129807ecd0548a616869841&scene=21#wechat_redirect)、[MIUI12/ROM包](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484493&idx=1&sn=37f99cfd98c81622fa82c2ee0bcda5e5&chksm=fb556fc3cc22e6d5aac0f31addc7e9114d15736f4cd1d08a1025f9736be52c9a8e09c177f88e&scene=21#wechat_redirect)、[赚钱app](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484394&idx=1&sn=261e284588af029dba0fc023125c36a9&chksm=fb556864cc22e172d5468acc4f92676b8c8c4a953c18d4dda5aed0769c202c7642b3e4fcd337&scene=21#wechat_redirect)

### 软件测试

[软件测试入门教程](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484460&idx=1&sn=6fe881c72b80fc1dcd825fa031ae27ba&chksm=fb556fa2cc22e6b41aff66b18636b9ea3e7d2cefe9f62e795c1672f6866a987b93b6ebc50075&scene=21#wechat_redirect)

### 其他

[宝藏级网站](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484472&idx=1&sn=6c1f68f0af58505a65d59b9dd25601e2&chksm=fb556fb6cc22e6a0ba8d94a334a91198a1885f5dcfd36dace22506852f4729a8b792b52d7997&scene=21#wechat_redirect)
、[PR/AE模板](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484590&idx=1&sn=a5819711ac727a795aba8c068afff354&chksm=fb556f20cc22e636cf87acc3343f44444bd426df7cfd7428645b464c5ef9f472850563a8dc3e&scene=21#wechat_redirect)
、[英语背诵网站](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484668&idx=1&sn=25ef4ac15095b67edbdde07ad9483fe3&chksm=fb556f72cc22e664ee14c6cfe7c6c218069794110449245819535cc255a6fb464ae1112cf40e&token=1998550639&lang=zh_CN#rd)
、[PPT教程网站合集](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484485&idx=1&sn=323f7a5d68a9cb406886afdc78b0a317&chksm=fb556fcbcc22e6dd12bb259becd0584f5ec477f2dd8808d63fe991f65b4dcf4f24f144cbfd00&scene=21#wechat_redirect)
、[全国旅游攻略](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484491&idx=1&sn=97ff54a293be40faed71dcfd5ceaa599&chksm=fb556fc5cc22e6d311b3be93c4ec62428347182c59f47392bbe7652e5f5f07b61940678a6075&scene=21#wechat_redirect)
、[视频转gif网站合集](http://mp.weixin.qq.com/s?__biz=MzU0NzA2MTQ3Mw==&mid=2247484380&idx=1&sn=b29d8ea1ee8b3119a7561ac00dca3041&chksm=fb556852cc22e1443e5b97775879a91becc964a9f9eef1fdaac9ec55799985bd729d9faeaf8a&scene=21#wechat_redirect)
![广岛君：不要白嫖哦！](https://imgkr.cn-bj.ufileos.com/8fdee7f5-f644-42e4-a818-7dcc0b65440e.gif)
![星标才能不错过每一份精彩哦！](https://imgkr.cn-bj.ufileos.com/c6287ccb-49fd-45f1-b110-7c1c568f79c6.gif)