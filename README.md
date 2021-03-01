# FDplayer

## 一个简洁的HTML触屏播放器

适用于Firefox&Chromium

Demo1:<https://shanmaomaoymmm.gitee.io/fdplayer/>  
Demo2:<https://shanmaomaoymmm.github.io/FDplayer/>
Demo3:<https://blog.qisato.com/page/?page=/list/fdplayer/text.md?name=FDplayer>

## 使用帮助

>适用于支持触屏的计算机，支持H.264，VP8等格式的视频文件播放

![](https://shanmaomaoymmm.gitee.io/shanmoamoaymmmprojectdeommedia/FDPlayer-Touch/img/img05.jpg)

>暂停、播放、全屏、调节播放进度和播放速度(支持PC端x0.25-x16/移动端x1-x3倍速播放)

![](https://shanmaomaoymmm.gitee.io/shanmoamoaymmmprojectdeommedia/FDPlayer-Touch/img/img04.jpg)

>调节播放进度时窗口中央显示播放进度

![](https://shanmaomaoymmm.gitee.io/shanmoamoaymmmprojectdeommedia/FDPlayer-Touch/img/img01.jpg)

>触屏优化：双击暂停&全屏

![](https://shanmaomaoymmm.gitee.io/shanmoamoaymmmprojectdeommedia/FDPlayer-Touch/img/img03.jpg)
<p class="label">
*注：①不支持各系列IE浏览器。<br/>
②仅支持能够支持HTML5及JavaScript脚本的新版Gecko和Webkit内核的浏览器，如果使用其他浏览器可能会造成显示异常。<br/>
如不能正常显示，请更换您的浏览器。非专业用户推荐使用360极速浏览器。 
</p>

## 调用方法

### 方法一：

>头部区域`<head>`中插入以下代码:
```
<script type="text/javascript" src="fdPlayer.js"></script>
```
>主体区域`<body>`插入插入以下代码:
```
<div id="player" style="margin: 0 auto;width: 800px;height: 600px;"></div>
<script>
    player = {
        width: 视频宽度,
        height: 视频高度,
        viewWindow: "player",  //播放视频的块区域ID
        img: "视频预览图路径",
        video:[
            {
                defaultID:默认从第几个文件开始播放
            },{
                name: "视频名称",
                url:"视频地址",
                subtitles:[
                    {
                        defaultID:默认字幕，0为空
                    },{
                        name:"字幕名称",
                        url:"字幕地址"
                    }
                ]
            }
        ]
    }
</script>
```

### 方法二:

>直接主体区域`<body>`插入插入以下代码: 
```
<div id="player" style="margin: 0 auto;width: 800px;height: 600px;"></div>
<script type="text/javascript" src="fdPlayer.js"></script>
<script>
    player = {
        width: 视频宽度,
        height: 视频高度,
        viewWindow: "player",  //播放视频的块区域ID
        img: "视频预览图路径",
        video:[
            {
                defaultID:默认从第几个文件开始播放
            },{
                name: "视频名称",
                url:"视频地址",
                subtitles:[
                    {
                        defaultID:默认字幕，0为空
                    },{
                        name:"字幕名称",
                        url:"字幕地址"
                    }
                ]
            }
        ]
    }
</script>
```

### 方法三:
>使用gitee服务，直接主体区域`<body>`插入插入以下代码: 
```
<div id="player" style="margin: 0 auto;width: 800px;height: 600px;"></div>
<script type="text/javascript" 
    src="https://shanmaomaoymmm.gitee.io/fdplayer/fdPlayer.js">
</script>
<script>
    player = {
        width: 视频宽度,
        height: 视频高度,
        viewWindow: "player",  //播放视频的块区域ID
        img: "视频预览图路径",
        video:[
            {
                defaultID:默认从第几个文件开始播放
            },{
                name: "视频名称",
                url:"视频地址",
                subtitles:[
                    {
                        defaultID:默认字幕，0为空
                    },{
                        name:"字幕名称",
                        url:"字幕地址"
                    }
                ]
            }
        ]
    }
</script>
```

作者：Qisato  
邮箱：Qisato@126.com 

### 程序源代码遵循MPL2.0开源协议
### 如若转载请注明出处 

项目地址:
* Github：<https://github.com/shanmaomaoymmm/FDplayer>
* Gitee：<https://gitee.com/shanmaomaoymmm/FDplayer>
