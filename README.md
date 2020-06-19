# FDPlayer-Touch v9.0 
### 一个简洁的HTML播放器  
![下载后打开index.html查看Dome](https://shanmaomaoymmm.github.io/shanmoamoaymmmProjectDeomMedia/FDPlayer-Touch/img/img02.jpg)  
  
支持Firefox&Chromium  
  
>### 调用方法
>+ 方法一：
>头部区域`<head>`中插入以下代码:  
>  
```html
<script type="text/javascript" src="pjs/fdPlayerTouch.js"></script>
```
>主体区域`<body>`插入插入以下代码:  
  
```html
<div id="player" style="margin: 0 auto;width: 800px;height: 600px;"></div>  
<script>  
	player = {  
		noid: "视频ID",  
		name: "视频标题",  
		url: "视频路径",  
		width: 视频宽度,  
		height: 视频高度,  
		viewWindow: "player", //播放视频的块区域ID  
		centerPlayTimeBlockSwitch: true, //拖动时视频中央显示播放进度*  
		autoplay: false //是否自动播放  
}  
 </script>
```
> + 方法二：  
>   
> 直接主体区域`<body>`插入插入以下代码：
   
```html
<div id="player" style="margin: 0 auto;width: 800px;height: 600px;"></div>  
<script type="text/javascript" src="pjs/fdPlayerTouch.js"></script>  
<script>  
	player = {  
		noid: "视频ID",  
		name: "视频标题",  
		url: "视频路径",  
		width: 视频宽度,  
		height: 视频高度,  
		viewWindow: "player", //播放视频的块区域ID  
		centerPlayTimeBlockSwitch: true, //拖动时视频中央显示播放进度*  
		autoplay: false //是否自动播放  
	}  
</script>
```
<p align="right">
<font size=1>
*注:已知在带有触摸屏功能的计算机上使用触屏拖动视频后会造成中心播放进度显示块无法自行消除。建议网页若运行在带有触摸屏功能的计算机上将centerPlayTimeBlockSwitch设置为false。
</font>
</p>

Deom地址：[https://shanmaomaoymmm.github.io/FDPlayer-Touch](https://shanmaomaoymmm.github.io/FDPlayer-Touch)

恰饭  
![[恰饭二维码](https://shanmaomaoymmm.github.io/shanmoamoaymmmProjectDeomMedia/FDPlayer-Touch/img/img09.jpg)](https://shanmaomaoymmm.github.io/shanmoamoaymmmProjectDeomMedia/FDPlayer-Touch/img/img09.jpg)
