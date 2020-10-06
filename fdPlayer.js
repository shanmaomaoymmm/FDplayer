window.onload=function(){
	setVideoWindow(player);
}
function setVideoWindow(player) {
	let ie;
	if (window.ActiveXObject || "ActiveXObject" in window) {
		ie = true;
	} else {
		ie = false;
	}
	
	let browser=browserJudgment();
	function browserJudgment(){
		let userAgent=navigator.userAgent
		if(userAgent.indexOf("WebKit")>-1){
			return "WebKit";
		}else if(userAgent.indexOf("Firefox")>-1){
			return "Firefox";
		}else if(userAgent.indexOf("Trident")>-1){
			return "Trident";
		}else{
			return "Other";
		}
	}
	
	/********资源文件********/
	var pictureResource={
		iconPause:'<style type="text/css">.st0{fill:#FFFFFF;}</style><g><path class="st0" d="M1.6,0H0.9C0.4,0,0.1,0.3,0.1,0.8v6.5C0.1,7.7,0.4,8,0.9,8h0.7C2,8,2.4,7.7,2.4,7.2V0.8C2.4,0.3,2,0,1.6,0z"/><path class="st0" d="M6.1,0H5.4C5,0,4.6,0.3,4.6,0.8v6.5C4.6,7.7,5,8,5.4,8h0.7c0.4,0,0.8-0.3,0.8-0.8V0.8C6.9,0.3,6.6,0,6.1,0z"/></g>',
		iconPlay:'<style type="text/css">.st0{fill:#FFFFFF;}</style><path class="st0" d="M7.1,3.4L1.6,0.1C1.3-0.1,0.8,0,0.6,0.3C0.6,0.4,0.5,0.6,0.5,0.7v6.6C0.5,7.7,0.8,8,1.2,8c0.1,0,0.3,0,0.4-0.1l5.5-3.3c0.3-0.2,0.4-0.6,0.2-1C7.3,3.5,7.2,3.5,7.1,3.4z"/>',
		iconFullScreen:'<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M3,0H1.3C0.6,0,0,0.6,0,1.3v1.8c0,0.2,0.2,0.4,0.4,0.4h0.1C0.8,3.5,1,3.3,1,3.1L1,2c0-0.6,0.5-1,1-1c0,0,0,0,0,0h1c0.2,0,0.4-0.2,0.4-0.4V0.4C3.5,0.2,3.3,0,3,0z"/><path class="st0"d="M6.7,0H5C4.7,0,4.5,0.2,4.5,0.4v0.1C4.5,0.8,4.7,1,5,1h1c0.6,0,1,0.5,1,1v1.1c0,0.2,0.2,0.4,0.4,0.4c0,0,0,0,0,0h0.1C7.8,3.5,8,3.3,8,3.1V1.3C8,0.6,7.4,0,6.7,0z"/><path class="st0"d="M3,7H2C1.4,7,1,6.6,1,6c0,0,0,0,0,0V5c0-0.2-0.2-0.4-0.4-0.4H0.4C0.2,4.6,0,4.7,0,5c0,0,0,0,0,0v1.7C0,7.4,0.6,8,1.3,8H3c0.2,0,0.4-0.2,0.4-0.4V7.5C3.5,7.2,3.3,7,3,7z"/><path class="st0"d="M7.6,4.6L7.6,4.6C7.2,4.6,7,4.7,7,5c0,0,0,0,0,0v1c0,0.6-0.5,1-1,1H5C4.7,7,4.5,7.2,4.5,7.5v0.1C4.5,7.8,4.7,8,5,8h1.8C7.4,8,8,7.4,8,6.7V5C8,4.7,7.8,4.6,7.6,4.6z"/></g>',
		iconOutFullScreen:'<style type="text/css">.st0{fill:#FFFFFF}</style><title>fullScreen</title><path class="st0"d="M6.7,0H1.3C0.6,0,0,0.6,0,1.3c0,0,0,0,0,0v5.4C0,7.4,0.6,8,1.3,8h5.4C7.4,8,8,7.4,8,6.7v0V1.3C8,0.6,7.4,0,6.7,0C6.7,0,6.7,0,6.7,0z M7,6C7,6.6,6.5,7,6,7H2C1.4,7,0.9,6.6,0.9,6c0,0,0,0,0,0V2c0-0.6,0.5-1.1,1.1-1.1c0,0,0,0,0,0h4C6.5,1,7,1.4,7,2V6z"/>',
		iconProgressButton:'<style type="text/css">.st0{fill:#FFFFFF;}.st1{fill:#07A8FF;}</style><circle class="st0" cx="4" cy="4" r="4"/><circle class="st1" cx="4" cy="4" r="2"/>',
		iconTriangle:'<style type="text/css">.st0{fill:#FFFFFF;}</style><path class="st0" d="M0.9,4.9l5.1,3C6.5,8.1,7.2,8,7.5,7.5C7.6,7.3,7.6,7.1,7.6,7V1c0-0.6-0.5-1-1-1C6.4,0,6.2,0.1,6,0.1l-5.1,3C0.4,3.4,0.2,4,0.5,4.5C0.6,4.7,0.8,4.8,0.9,4.9z"/>',
		iconSubtitle:'<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M7.5,1.3h-7C0.2,1.3,0,1.5,0,1.7v4.5c0,0.3,0.2,0.5,0.5,0.5h7C7.8,6.7,8,6.5,8,6.3V1.7C8,1.5,7.8,1.3,7.5,1.3zM7.2,5.5C7.2,5.7,7,6,6.7,6H1.3C1,6,0.8,5.7,0.8,5.5v-3C0.8,2.3,1,2,1.3,2h5.4C7,2,7.2,2.3,7.2,2.5V5.5z"/><path class="st0"d="M3.4,4.5c-0.1,0-0.1,0-0.2,0.1C3.1,4.8,2.8,5,2.5,5C2.3,5,2.1,4.8,1.9,4.6C1.8,4.4,1.7,4.2,1.7,4c0-0.3,0.1-0.6,0.3-0.8C2.2,3,2.4,3,2.5,3C2.8,3,3,3.1,3.1,3.3l0,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2c0-0.1-0.1-0.2-0.2-0.3C3.2,2.6,2.8,2.5,2.5,2.5c-0.4,0-0.7,0.1-1,0.4C1.3,3.2,1.2,3.6,1.2,4c0,0.4,0.1,0.7,0.3,1c0.3,0.3,0.6,0.5,1,0.4c0.4,0,0.7-0.1,1-0.4C3.6,5,3.7,4.9,3.7,4.8c0-0.1,0-0.1-0.1-0.2C3.5,4.6,3.5,4.5,3.4,4.5z"/><path class="st0"d="M6.6,4.5c-0.1,0-0.1,0-0.2,0.1C6.3,4.8,6,5,5.8,5C5.5,5,5.3,4.8,5.1,4.6C5,4.4,5,4.2,5,4c0-0.3,0.1-0.6,0.3-0.8C5.4,3,5.6,3,5.8,3C6,3,6.2,3.1,6.3,3.3l0,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2c0-0.1-0.1-0.2-0.2-0.3C6.4,2.6,6.1,2.5,5.7,2.5c-0.4,0-0.7,0.1-1,0.4C4.5,3.2,4.4,3.6,4.4,4c0,0.4,0.1,0.7,0.3,1c0.3,0.3,0.6,0.5,1,0.4c0.4,0,0.7-0.1,1-0.4C6.8,5,6.9,4.9,6.9,4.8c0-0.1,0-0.1-0.1-0.2C6.8,4.6,6.7,4.5,6.6,4.5z"/><path class="st0"d="M7.7,0H0.3C0.1,0,0,0.1,0,0.3v0.3c0,0.2,0.1,0.3,0.3,0.3h7.4C7.9,0.9,8,0.7,8,0.6V0.3C8,0.1,7.9,0,7.7,0z"/><path class="st0"d="M7.7,7.1H0.3C0.1,7.1,0,7.3,0,7.4v0.3C0,7.9,0.1,8,0.3,8h7.4C7.9,8,8,7.9,8,7.7V7.4C8,7.3,7.9,7.1,7.7,7.1z"/></g>',
		iconPlayList:'<style type="text/css">.st0{fill:#FFFFFF;}</style><g><path class="st0" d="M2.9,1h4.1c0.2,0,0.4,0.2,0.4,0.4v0.6c0,0.2-0.2,0.4-0.4,0.4H2.9c-0.2,0-0.4-0.2-0.4-0.4V1.5C2.5,1.2,2.7,1,2.9,1z"/><path class="st0" d="M2.9,3.3h4.1c0.2,0,0.4,0.2,0.4,0.4v0.6c0,0.2-0.2,0.4-0.4,0.4H2.9c-0.2,0-0.4-0.2-0.4-0.4V3.7C2.5,3.5,2.7,3.3,2.9,3.3z"/><path class="st0" d="M2.9,5.5h4.1c0.2,0,0.4,0.2,0.4,0.4v0.6C7.5,6.8,7.3,7,7.1,7H2.9C2.7,7,2.5,6.8,2.5,6.5V5.9C2.5,5.7,2.7,5.5,2.9,5.5z"/><path class="st0" d="M0.9,1h0.5c0.2,0,0.4,0.2,0.4,0.4v0.6c0,0.2-0.2,0.4-0.4,0.4H0.9c-0.2,0-0.4-0.2-0.4-0.4V1.5C0.5,1.2,0.7,1,0.9,1z"/><path class="st0" d="M0.9,3.3h0.5c0.2,0,0.4,0.2,0.4,0.4v0.6c0,0.2-0.2,0.4-0.4,0.4H0.9c-0.2,0-0.4-0.2-0.4-0.4V3.7C0.5,3.5,0.7,3.3,0.9,3.3z"/><path class="st0" d="M0.9,5.5h0.5c0.2,0,0.4,0.2,0.4,0.4v0.6C1.9,6.8,1.7,7,1.5,7H0.9C0.7,7,0.5,6.8,0.5,6.5V5.9C0.5,5.7,0.7,5.5,0.9,5.5z"/></g>',
	}
	/***********************/
	document.getElementById("player").innerHTML='<div id="playerView"style="width: 100%;height: 100%;position: relative;font-size: 0px;overflow: hidden;color: rgba(255,255,255,0.9);text-shadow:0px 0px 5px rgba(0,0,0,0.3);user-select:none;"><!--不可见区域--><div style="z-index: 0;width: 100%;height: 100%;position: absolute;"></div><!--视频区域--><div style="z-index: 1;width: 100%;height: 100%;position: absolute;background-color:black;display:flex;align-items:center;"><video id="video"style="width: 100%;"><track id="subtitle"kind="subtitles"srclang="zh"label="Chinese"default/></video></div><!--预览图区域--><div id="preview"style="z-index: 2;width: 100%;height: 100%;position: absolute;background-color: black;transition: opacity 200ms ease;"><div id="previewImg"style="width: 100%;height: 100%;background: url('+player.img+') no-repeat center;background-size: 100%;filter: blur(5px);"></div></div><!--提示块区域--><div style="z-index: 3;width: 100%;height: 100%;position: absolute;"><div style="width: 100%;position: absolute;top: 200px;"><div id="promptBlock"style="width: 250px;margin: 0 auto;background-color: rgba(0,0,0,0.5);font-size: 50px;text-align: center;padding: 20px;border-radius: 10px;opacity: 0;transition: opacity 100ms ease;">TEST</div></div></div><!--功能维护添加区A z-index设置范围:4-49<div style="z-index: 4;width: 100%;height: 100%;position: absolute;"></div>--><!--控制区域--><div id="ctrlView"style="z-index: 50;width: 100%;height: 100%;position: absolute;transition: opacity 100ms ease;pointer-events: none;opacity: 0;"><!--控制块区域--><div style="width: 100%;height: 100%;position: absolute;top:0;z-index: 0;"><div id="pauseCtrlBlock"style="cursor:pointer;width: 100%;height: 50%;"></div><div id="fullScreenCtrlBlock"style="cursor:pointer;width: 100%;height: 50%;"></div></div><!--播放列表--><div style="height: 100%;position: absolute;right: 30px;display: flex;align-items: center;font-size: 16px;"><div id="playListPanel"style="border: 2px solid rgba(225,225,225,0.75);width: 275px;height: 375px;position: relative;bottom: 20px;background-color: rgba(0,0,0,0.25);border-radius: 10px;display: none;transition: opacity 200ms ease;opacity: 0;padding: 10px;overflow: hidden;"><div id="playList"style="height: 375px;overflow-y:auto;overflow-x:hidden;"></div></div></div><!--字幕选择--><div id="selectSubtitle"style="border: 2px solid rgba(225,225,225,0.75);display: none;transition: opacity 200ms ease;opacity: 0;font-size: 16px;position: absolute;bottom: 135px;right: 30px;background-color: rgba(0,0,0,0.25);width: 200px;padding: 10px;border-radius: 10px;"><div id="subtitleList"style="overflow-y:auto;overflow-x:hidden"></div></div><!--标题栏区域--><div id="nameBar"style="width: 100%;position: absolute;top: 0;z-index: 2;background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));"><div id="nameBerTitle"style="margin: 20px;font-size: 25px;text-align: center;"></div></div><!--控制栏区域--><div id="ctrlBar"style="width: 100%;height: 135px;position: absolute;bottom: 0;z-index: 3;background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));"><!--进度条--><div style="height: 50px;padding: 0px 22px 0px 22px;position: relative;"><!--调节进度--><div style="height: 20px;position: relative;top: 14px;z-index: 1;"><input id="timeBarSet"type="range"value="0"min="0"max="2048"style="cursor:pointer;width: 100%;margin: 0px;opacity: 0;transition: opacity 100ms ease;"/></div><!--按钮显示--><div style="position: absolute;top: 17.5px;"><!--left范围:0-(width-60)--><div id="timeBarButton"style="width: 12px;height: 12px;z-index: 0;position: relative;left:0px;box-shadow:0px 0px 5px rgba(0,0,0,0.3);border-radius: 6px;"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="width: 12px;height: 12px;"xml:space="preserve">'+pictureResource.iconProgressButton+'</svg></div></div><!--进度条显示--><div id="timeBarView"style="height: 5px;background-color: rgba(225,225,225,0.5);margin: 0px 10px 0px 10px;border-radius: 2.5px;"><div id="timeBarCacheView"style="height: 5px;width: 0px;background-color: rgba(7, 168, 255, 0.3);border-radius: 2.5px;transition: width 200ms ease;"><div id="timeBarPlayView"style="height: 5px;width: 0px;background-color: rgba(7, 168, 255, 0.8);border-radius: 2.5px;"></div></div></div><!--时间显示--><div style="display: flex;font-size: 16px;color: white;padding: 5px 5px 0px 5px;"><div style="flex: 1;text-align: left;"><span id="playTime">00:00</span></div><div style="flex: 1;text-align: right;"><span id="videoTime">00:00</span></div></div></div><!--按键功能--><div style="display: flex;margin-top: 5px;"><!--左侧按钮--><div style="flex: 3;padding-left: 28px;"><!--速度调节按钮--><div id="speedButtonAppear"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 50px;"><div style="pointer-events: none;text-align: center;padding-top:4px;font-size:16px">speed</div></div><span id="speedButtonFunction"style="display: none;"><div id="speedChangeSlow"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 30px;"><div style="pointer-events: none;text-align: center;padding-top:4px;font-size:16px"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="opacity: 0.8;width: 16px;height: 16px;position:relative;top: 2px;"xml:space="preserve">'+pictureResource.iconTriangle+'</svg></div></div><div id="speedRecover"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 50px;"><div id="speedView"style="pointer-events: none;text-align: center;padding-top:4px;font-size:16px">x1</div></div><div id="speedChangeFast"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 30px;"><div style="pointer-events: none;text-align: center;padding-top:4px;font-size:16px"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="opacity: 0.8;width: 16px;height: 16px;position:relative;top: 2px;transform:rotateY(180deg);"xml:space="preserve">'+pictureResource.iconTriangle+'</svg></div></div></span></div><!--中间暂停区域与按钮--><div style="flex: 1"><div style="text-align: center;"><svg version="1.1"id="pauseButton"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="cursor:pointer;height: 50px;width: 50px;opacity: 0.8;"xml:space="preserve"></svg></div></div><!--右侧按钮--><div style="flex: 3;"><div style="display: flex;"><!--用于调节音量--><div style="flex: 1;text-align: left;"><table cellspacing="0"><tr><td style="height: 50px;width: 20px;"><!--静音按钮--><svg version="1.1"id="muteButton"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="cursor:pointer;width: 18px;height: 18px;opacity: 0.8;"xml:space="preserve"></svg></td><td style="height: 50px;position: relative;"><!--音量條调节--><input id="volumeSet"type="range"value="60"min="0"max="100"style="cursor:pointer;width: 90px;margin: 0px;opacity: 0;transition: opacity 100ms ease;position: absolute;top: 17px;z-index: 1;"/><!--音量條按钮--><div style="position: absolute;top: 20px;z-index: 0;width: 90px;padding: 0px;"><!--left范围:0-75--><div id="volumeSetButton"style="width: 12px;height: 12px;position: relative;left: 45px;box-shadow:0px 0px 5px rgba(0,0,0,0.3);border-radius: 6px;"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="width: 12px;height: 12px;"xml:space="preserve">'+pictureResource.iconProgressButton+'</svg></div></div><!--音量條顯示--><div style="width: 90px;margin: 0px;"><div style="height: 5px;width: 80px;background-color: rgba(225,225,225,0.5);margin: 0 auto;border-radius: 2.5px;"><div id="volumeSetBarView"style="height: 5px;width: 48px;background-color: rgba(7, 168, 255, 0.8);border-radius: 2.5px;"></div></div></div></td></tr></table></div><!--右侧按钮--><div style="flex: 1;text-align: right;padding-right: 28px;"><!--字幕--><div id="subtitleButton"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 30px;"><div style="pointer-events: none;text-align: center;padding-top:1px;font-size:25px"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="opacity: 0.8;width: 25px;height: 25px;"xml:space="preserve">'+pictureResource.iconSubtitle+'</svg></div></div><!--列表--><div id="playListButton"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 30px;"><div style="pointer-events: none;text-align: center;padding-top:1px;font-size:25px"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="opacity: 0.8;width: 25px;height: 25px;"xml:space="preserve">'+pictureResource.iconPlayList+'</svg></div></div><!--全屏--><div id="fullScreenButton"style="cursor:pointer;display: inline-block;background-color: rgba(225,225,225,0.25);border: 2px solid rgba(225,225,225,0.75);border-radius:4px;margin: 2px;height: 30px;width: 30px;"><div style="pointer-events: none;text-align: center;padding-top:1px;font-size:25px"><svg version="1.1"id="fullScreenButtonICON"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="opacity: 0.8;width: 25px;height: 25px;"xml:space="preserve">'+pictureResource.iconFullScreen+'</svg></div></div></div></div></div></div></div></div><div id="ERRORPanel"style="z-index: 51;width: 100%;height: 100%;position: absolute;display: none;background-color: rgb(225,225,225)"></div><div id="startPlay"style="z-index: 51;width: 100%;height: 100%;position: absolute;transition: opacity 100ms ease;"><div style="text-align: center;height:50%; transform: translate(0, 50%);"><svg version="1.1"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px"viewBox="0 0 8 8"style="cursor:pointer;height: 200px;width: 200px;opacity: 0.8;"xml:space="preserve">'+pictureResource.iconPlay+'</svg></div></div></div>';
		
	playVideo(player.width,player.height,browser,player.video,pictureResource);
}

/********功能区********/
function playVideo(width,height,browser,thisVideo,pictureResource){	
	/********对象元素********/
	var playerView=document.getElementById("playerView");
	var pauseButton=document.getElementById("pauseButton");
	var timeBarButton=document.getElementById("timeBarButton");
	var timeBarSet=document.getElementById("timeBarSet");
	var timeBarView=document.getElementById("timeBarView");
	var timeBarPlayView=document.getElementById("timeBarPlayView");
	var timeBarCacheView=document.getElementById("timeBarCacheView");
	var playTime=document.getElementById("playTime");
	var videoTime=document.getElementById("videoTime");
	var speedButtonAppear=document.getElementById("speedButtonAppear");
	var speedButtonFunction=document.getElementById("speedButtonFunction");
	var speedChangeSlow=document.getElementById("speedChangeSlow");
	var speedRecover=document.getElementById("speedRecover");
	var speedView=document.getElementById("speedView");
	var speedChangeFast=document.getElementById("speedChangeFast");
	var volumeSet=document.getElementById("volumeSet");
	var volumeSetButton=document.getElementById("volumeSetButton");
	var volumeSetBarView=document.getElementById("volumeSetBarView");
	var muteButton=document.getElementById("muteButton");
	var fullScreenButton=document.getElementById("fullScreenButton");
	var pauseCtrlBlock=document.getElementById("pauseCtrlBlock");
	var fullScreenCtrlBlock=document.getElementById("fullScreenCtrlBlock");
	var fullScreenButtonICON=document.getElementById("fullScreenButtonICON");
	var promptBlock=document.getElementById("promptBlock");
	var preview=document.getElementById("preview");
	var previewImg=document.getElementById("previewImg");
	var ctrlView=document.getElementById("ctrlView");
	var nameBar=document.getElementById("nameBar");
	var nameBerTitle=document.getElementById("nameBerTitle");
	var ctrlBar=document.getElementById("ctrlBar");
	var startPlay=document.getElementById("startPlay");
	var subtitle=document.getElementById("subtitle");
	var subtitleButton=document.getElementById("subtitleButton");
	var selectSubtitle=document.getElementById("selectSubtitle");
	var subtitleList=document.getElementById("subtitleList");
	var playList=document.getElementById("playList");
	var playListButton=document.getElementById("playListButton");
	var playListPanel=document.getElementById("playListPanel");
	var ERROEPanel=document.getElementById("ERRORPanel");
	/***********************/
	
	/********资源文件********/
	var iconVolume=new Array();
	for(var i=0;i<3;i++){
		iconVolume[i]=new Array();
		for(var j=0;j<2;j++){
			iconVolume[i][j]=i+j;
		}
	}
	iconVolume[0][0]='<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M3,1.1H2.5c-0.2,0-0.4,0.2-0.4,0.4l0,0v4.7c0,0.2,0.2,0.4,0.4,0.4l0,0H3c0.2,0,0.4-0.2,0.4-0.4V1.5C3.4,1.3,3.2,1.1,3,1.1L3,1.1z"/><path class="st0"d="M1.1,1.7H0.6c-0.2,0-0.4,0.2-0.4,0.4v3.6c0,0.2,0.2,0.4,0.4,0.4H1c0.2,0,0.4-0.2,0.4-0.4V2.1C1.5,1.9,1.3,1.7,1.1,1.7z"/><path class="st0"d="M6.1,5.2l1.6-1.6c0.2-0.2,0.2-0.5,0-0.7l0,0L7.3,2.6c-0.2-0.2-0.5-0.2-0.7,0l0,0L5,4.2L3.4,2.6c-0.2-0.2-0.5-0.2-0.7,0l0,0L2.4,3c-0.2,0.2-0.2,0.5,0,0.7L4,5.3L2.4,6.8C2.2,7,2.2,7.3,2.4,7.5l0.4,0.4C2.9,8,3.2,8,3.4,7.9L5,6.3l1.6,1.6C6.8,8,7.1,8,7.3,7.9l0.4-0.4c0.2-0.2,0.2-0.5,0-0.7l0,0L6.1,5.2z"/></g>';
	iconVolume[0][1]='<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M3,1.1H2.5c-0.2,0-0.4,0.2-0.4,0.4l0,0v4.7c0,0.2,0.2,0.4,0.4,0.4l0,0H3c0.2,0,0.4-0.2,0.4-0.4V1.5C3.4,1.3,3.2,1.1,3,1.1L3,1.1z"/><path class="st0"d="M1.1,1.7H0.6c-0.2,0-0.4,0.2-0.4,0.4v3.6c0,0.2,0.2,0.4,0.4,0.4H1c0.2,0,0.4-0.2,0.4-0.4V2.1C1.5,1.9,1.3,1.7,1.1,1.7z"/></g>';
	iconVolume[1][0]='<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M4.9,0.6H4.4C4.2,0.6,4,0.7,4,0.9l0,0v5.9C4,7,4.2,7.2,4.4,7.2h0.4C5,7.2,5.2,7,5.2,6.8V0.9C5.2,0.7,5.1,0.6,4.9,0.6L4.9,0.6z"/><path class="st0"d="M3,1.1H2.5c-0.2,0-0.4,0.2-0.4,0.4l0,0v4.7c0,0.2,0.2,0.4,0.4,0.4l0,0H3c0.2,0,0.4-0.2,0.4-0.4V1.5C3.4,1.3,3.2,1.1,3,1.1L3,1.1z"/><path class="st0"d="M1.1,1.7H0.6c-0.2,0-0.4,0.2-0.4,0.4v3.6c0,0.2,0.2,0.4,0.4,0.4H1c0.2,0,0.4-0.2,0.4-0.4V2.1C1.5,1.9,1.3,1.7,1.1,1.7z"/><path class="st0"d="M6.1,5.2l1.6-1.6c0.2-0.2,0.2-0.5,0-0.7l0,0L7.3,2.6c-0.2-0.2-0.5-0.2-0.7,0l0,0L5,4.2L3.4,2.6c-0.2-0.2-0.5-0.2-0.7,0l0,0L2.4,3c-0.2,0.2-0.2,0.5,0,0.7L4,5.3L2.4,6.8C2.2,7,2.2,7.3,2.4,7.5l0.4,0.4C2.9,8,3.2,8,3.4,7.9L5,6.3l1.6,1.6C6.8,8,7.1,8,7.3,7.9l0.4-0.4c0.2-0.2,0.2-0.5,0-0.7l0,0L6.1,5.2z"/></g>';
	iconVolume[1][1]='<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M4.9,0.6H4.4C4.2,0.6,4,0.7,4,0.9l0,0v5.9C4,7,4.2,7.2,4.4,7.2h0.4C5,7.2,5.2,7,5.2,6.8V0.9C5.2,0.7,5.1,0.6,4.9,0.6L4.9,0.6z"/><path class="st0"d="M3,1.1H2.5c-0.2,0-0.4,0.2-0.4,0.4l0,0v4.7c0,0.2,0.2,0.4,0.4,0.4l0,0H3c0.2,0,0.4-0.2,0.4-0.4V1.5C3.4,1.3,3.2,1.1,3,1.1L3,1.1z"/><path class="st0"d="M1.1,1.7H0.6c-0.2,0-0.4,0.2-0.4,0.4v3.6c0,0.2,0.2,0.4,0.4,0.4H1c0.2,0,0.4-0.2,0.4-0.4V2.1C1.5,1.9,1.3,1.7,1.1,1.7z"/></g>';
	iconVolume[2][0]='<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M4.9,0.6H4.4C4.2,0.6,4,0.7,4,0.9l0,0v5.9C4,7,4.2,7.2,4.4,7.2h0.4c0.2,0,0.4-0.2,0.4-0.4V0.9C5.2,0.7,5.1,0.6,4.9,0.6L4.9,0.6z"/><path class="st0"d="M3,1.1H2.5c-0.2,0-0.4,0.2-0.4,0.4l0,0v4.7c0,0.2,0.2,0.4,0.4,0.4l0,0H3c0.2,0,0.4-0.2,0.4-0.4V1.5C3.4,1.3,3.2,1.1,3,1.1L3,1.1z"/><path class="st0"d="M1.1,1.7H0.6c-0.2,0-0.4,0.2-0.4,0.4v3.6c0,0.2,0.2,0.4,0.4,0.4h0.4c0.2,0,0.4-0.2,0.4-0.4V2.1C1.5,1.9,1.3,1.7,1.1,1.7z"/><path class="st0"d="M6.8,0H6.3C6.1,0,5.9,0.2,5.9,0.5v6.9c0,0.3,0.2,0.5,0.4,0.5h0.4c0.2,0,0.4-0.2,0.4-0.5V0.5C7.2,0.2,7,0,6.8,0z"/><path class="st0"d="M6.1,5.2l1.6-1.6c0.2-0.2,0.2-0.5,0-0.7l0,0L7.3,2.6c-0.2-0.2-0.5-0.2-0.7,0l0,0L5,4.2L3.4,2.6c-0.2-0.2-0.5-0.2-0.7,0l0,0L2.4,3c-0.2,0.2-0.2,0.5,0,0.7l1.6,1.6L2.4,6.8C2.2,7,2.2,7.3,2.4,7.5l0.4,0.4C2.9,8,3.2,8,3.4,7.9L5,6.3l1.6,1.6C6.8,8,7.1,8,7.3,7.9l0.4-0.4c0.2-0.2,0.2-0.5,0-0.7l0,0L6.1,5.2z"/></g>';
	iconVolume[2][1]='<style type="text/css">.st0{fill:#FFFFFF}</style><g><path class="st0"d="M4.9,0.6H4.4C4.2,0.6,4,0.7,4,0.9l0,0v5.9C4,7,4.2,7.2,4.4,7.2h0.4C5,7.2,5.2,7,5.2,6.8V0.9C5.2,0.7,5.1,0.6,4.9,0.6L4.9,0.6z"/><path class="st0"d="M3,1.1H2.5c-0.2,0-0.4,0.2-0.4,0.4l0,0v4.7c0,0.2,0.2,0.4,0.4,0.4l0,0H3c0.2,0,0.4-0.2,0.4-0.4V1.5C3.4,1.3,3.2,1.1,3,1.1L3,1.1z"/><path class="st0"d="M1.1,1.7H0.6c-0.2,0-0.4,0.2-0.4,0.4v3.6c0,0.2,0.2,0.4,0.4,0.4H1c0.2,0,0.4-0.2,0.4-0.4V2.1C1.5,1.9,1.3,1.7,1.1,1.7z"/><path class="st0"d="M6.8,0H6.3C6.1,0,5.9,0.2,5.9,0.5v6.9c0,0.3,0.2,0.5,0.4,0.5h0.4c0.2,0,0.4-0.2,0.4-0.5V0.5C7.2,0.2,7,0,6.8,0z"/></g>';
	/***********************/
	
	/********全局变量********/
	var volume=0.8;
	var fullScreenStatus=false;
	var clickTimer = null;
	var ctrlViewStatus=true;  //true为显示 false为隐藏
	var ctrlViewSwitch=true;
	var hideTimer=null;
	var hidePromptBlockSetTimer=null;
	var touchTimer=null;
	var panel=false;
	var playID=thisVideo[0].defaultID;
	var subtitleID=thisVideo[playID].subtitles[0].defaultID;
	var inputPress=false;
	var keyboardLock=true;
	var videoState=true;
	/***********************/
	
	/*******无条件触发*******/
	if(browser=="Trident"){
		startPlay.style.display="none";
		ERROEPanel.style.display="block";
		ERROEPanel.innerHTML='<div style="text-align: center;font-family: 微软雅黑;font-size: 50px;color: black;padding: 100px 50px 100px 50px;">不支持IE浏览器<br />罒㉨罒 乀(ˉεˉ乀) (◍˃̶ᗜ˂̶◍)✩<div style="font-size: 25px;margin-top: 20px;">请使用Chrome&Firefox&Edge打开</div></div>';
	}
	/***********************/
	
	/********追加样式********/
	document.styleSheets[0].addRule('#video::cue','color:white;font-size:36px;text-shadow:0px 0px 5px rgba(0,0,0,0.3);opacity:1;background:rgba(0,0,0,0.25);border-radius: 2.5px;;white-space:nowrap;line-height:125%');
	document.styleSheets[0].addRule('#playList::-webkit-scrollbar','width:5px;background-color:rgba(225,225,225,0.3);border-radius:2.5px');
	document.styleSheets[0].addRule('#playList::-webkit-scrollbar-thumb','background-color:rgba(225,225,225,0.7);border-radius:2.5px');
	document.styleSheets[0].addRule('#subtitleList::-webkit-scrollbar','width:5px;background-color:rgba(225,225,225,0.3);border-radius:2.5px');
	document.styleSheets[0].addRule('#subtitleList::-webkit-scrollbar-thumb','background-color:rgba(225,225,225,0.7);border-radius:2.5px');
	if(browser=="Firefox"){
		playList.style.scrollbarWidth="thin";
		playList.style.scrollbarColor="rgba(225,225,225,0.7) rgba(225,225,225,0.2)";
		subtitleList.style.scrollbarWidth="thin";
		subtitleList.style.scrollbarColor="rgba(225,225,225,0.7) rgba(225,225,225,0.2)";
	}
	/***********************/
	
	/*******无条件触发*******/
	video.src=thisVideo[playID].url;
	nameBerTitle.innerHTML=thisVideo[playID].name;
	volumeChange(volume);
	
	//建立播放列表
	for(var i=1;i<thisVideo.length;i++){
		selectPlayVideo(i,thisVideo[i].name,thisVideo[i].url);
	}
	//播放列表高亮
	thisSelectVideo(playID);
	
	//建立字幕
	createSubtitleList(playID);
	subtitle.src=thisVideo[playID].subtitles[thisVideo[playID].subtitles[0].defaultID].url;
	thisSubtitle(thisVideo[playID].subtitles[0].defaultID,playID);
	/***********************/
	
	/********起始触发********/	
	startPlay.onclick=function(){
		preview.style.opacity=0;
		if(videoState==true){
			hideCtrlView(true);
			ctrlView.style.pointerEvents="auto";
			pause();
			keyboardLock=false;
		}else{
			ERROEPanel.style.display="block";
			ERROEPanel.innerHTML='<div style="text-align: center;font-size: 50px;color: black;padding: 100px 50px 100px 50px;">视频找不到了<br />d(ŐдŐ๑) Σ(ﾟдﾟlll) (๑•́ ₃ •̀๑)</div>';
		}	
		previewImg.style.filter="blur(0px)";		
		startPlay.style.opacity=0;
		window.setTimeout(function(){
			startPlay.style.display="none";
		},100);
	}
	/***********************/
	
	/********功能函数********/
	
	if(!isNaN(video.duration)){
		videoTime.innerHTML=setTimeFormat(video.duration);
	}
	
	//如果视频加载失败
	video.onerror=function(){
		videoState=false;
	}
	
	//进度条播放
	video.addEventListener("timeupdate", getCurTime);
	video.onloadstart=function(){
		getCurTime();
	}
	video.ondurationchange=function(){
		if(video.duration!="NaN"){
			videoTime.innerHTML=setTimeFormat(video.duration);
		}
	}
	
	//进度条移动
	function timeBarMove(m){
		if(m==true){
			timeBarButton.style.left=timeBarSet.value/timeBarSet.max*timeBarView.clientWidth+"px";	//按钮移动
			timeBarPlayView.style.width=timeBarSet.value/timeBarSet.max*timeBarView.clientWidth+"px";	//进度条填充
		}else{
			timeBarButton.style.left=0+"px";	//按钮移动
			timeBarPlayView.style.width=0+"px";	//进度条填充
		}
		playTime.innerHTML=setTimeFormat(video.currentTime);	//播放进度时间
		videoTime.innerHTML=setTimeFormat(video.duration-video.currentTime);	//剩余播放进度时间
		//缓冲时间
		for (var i = 0; i < video.buffered.length; i++) {
			// 寻找当前时间之后最近的点
			if (video.buffered.start(video.buffered.length-1-i)<video.currentTime) {
				timeBarCacheView.style.width = video.buffered.end(video.buffered.length-1-i)/video.duration*timeBarView.clientWidth+"px";
				break;
			}
		}
	}
	
	
	//播放结束
	video.onended=function(){
		pauseButton.innerHTML=pictureResource.iconPlay;
		hideCtrlView(true);
		ctrlViewSwitch=false;
	}
	
	//音量调节
	function volumeChange(volume){
		video.volume=volume;
		volumeSetButton.style.left=75*volume+"px";
		volumeSetBarView.style.width=80*volume+"px";
		if(video.muted==false){
			if(video.volume==0){
				muteButton.innerHTML=iconVolume[0][0];
			}else if(video.volume>0&&video.volume<=1/3){
				muteButton.innerHTML=iconVolume[0][1];
			}else if(video.volume>1/3&&video.volume<=2/3){
				muteButton.innerHTML=iconVolume[1][1];
			}else if(video.volume>2/3&&video.volume<=1){
				muteButton.innerHTML=iconVolume[2][1];
			}else{}
		}else{
			if(video.volume>=0&&video.volume<=1/3){
				muteButton.innerHTML=iconVolume[0][0];
			}else if(video.volume>1/3&&video.volume<=2/3){
				muteButton.innerHTML=iconVolume[1][0];
			}else if(video.volume>2/3&&video.volume<=1){
				muteButton.innerHTML=iconVolume[2][0];
			}else{}
		}
	}
	//静音
	function mute(){
		if(video.muted==true){
			video.muted=false;
			promptBlockSet("音量:"+parseInt(video.volume*100),500);
			if(video.volume>=0&&video.volume<=1/3){
				muteButton.innerHTML=iconVolume[0][1];
			}else if(video.volume>1/3&&video.volume<=2/3){
				muteButton.innerHTML=iconVolume[1][1];
			}else if(video.volume>2/3&&video.volume<=1){
				muteButton.innerHTML=iconVolume[2][1];
			}else{}
		}else{
			video.muted=true;
			promptBlockSet("静音",500);
			if(video.volume==0){
				muteButton.innerHTML=iconVolume[0][0];
			}else if(video.volume>0&&video.volume<=1/3){
				muteButton.innerHTML=iconVolume[0][0];
			}else if(video.volume>1/3&&video.volume<=2/3){
				muteButton.innerHTML=iconVolume[1][0];
			}else if(video.volume>2/3&&video.volume<=1){
				muteButton.innerHTML=iconVolume[2][0];
			}else{}
		}
	}
	
	//显示及返回速度
	function speedAppear(returnSpeed){
		speedView.innerHTML="x"+video.playbackRate;
	}
	//返回速度
	function speedReturn(){
		return video.playbackRate;
	}
	//调整速度
	function speedSet(s){
		if(s==0){
			video.playbackRate=0;
		}else if(s==1){
			video.playbackRate=1;
		}else{
			if(video.playbackRate+s>=0.25&&video.playbackRate+s<=16){
				if(video.playbackRate+s<=3){
					video.playbackRate=video.playbackRate+s;
				}else if(video.playbackRate+s>3&&video.playbackRate+s<=8){
					video.playbackRate=video.playbackRate+2*s;
				}else{
					video.playbackRate=video.playbackRate+4*s;
				}
			}
		}
		promptBlockSet(video.playbackRate+"倍速",500);
	}
	
	//播放暂停
	function pause(){
		if(video.paused){
			video.play();
			pauseButton.innerHTML=pictureResource.iconPause;
		}else{
			video.pause();
			pauseButton.innerHTML=pictureResource.iconPlay;
		}
		if(ctrlViewSwitch==false){
			ctrlViewSwitch=true;
		}
	}
	
	//时间换算
	function setTimeFormat(s) {
		var minute = parseInt(parseInt(s) / 60) + "";
		var second = (parseInt(s) - (parseInt(parseInt(s) / 60)) * 60) + "";
		if (minute < 10) {
			minute = "0" + minute;
		}
		if (second < 10) {
			second = "0" + second;
		}
		if(minute=="NaN"||second=="NaN"){
			return "00:00";
		}else{
			return (minute + ":" + second);
		}
	}
	
	//全屏
	function fullScreen(){
		if(fullScreenStatus==false){
			fullScreenStatus=true;
			playerView.requestFullscreen();
			fullScreenButtonICON.innerHTML=pictureResource.iconOutFullScreen;
		}else{
			fullScreenStatus=false;
			document.exitFullscreen();
			fullScreenButtonICON.innerHTML=pictureResource.iconFullScreen;
		}
		if(video.paused){
			if(browser=="WebKit"){
				setTimeout(function(){
					timeBarMove(true);
				},40);
			}else if(browser=="Firefox"){
				setTimeout(function(){
					timeBarMove(true);
				},300);
			}else{}
		}
	}
	
	//提示块显示隐藏及更改内容
	function promptBlockSet(write,time){
		window.clearTimeout(hidePromptBlockSetTimer);
		if(!write){
			promptBlock.innerHTML="";
			promptBlock.style.opacity=0;
		}else{
			promptBlock.innerHTML=write;
			promptBlock.style.opacity=1;
			if(!time){}else{
				hidePromptBlockSetTimer=window.setTimeout(function(){
					promptBlockSet();
				},time);
			}
		}
	}
	
	//控制隐藏显示控制栏
	function hideCtrlView(hide){
		if(!hide){
			hide=!ctrlViewStatus;
		}
		if(hide==false&&ctrlViewSwitch==true){
			ctrlView.style.opacity=0;
			nameBar.style.pointerEvents="none";
			ctrlBar.style.pointerEvents="none";
			ctrlViewStatus=false;
			hideSelectSubtitleView();
			hidePlayListView();
		}else if(hide==true){
			ctrlView.style.opacity=1;
			nameBar.style.pointerEvents="auto";
			ctrlBar.style.pointerEvents="auto";
			ctrlViewStatus=true;
		}else{
			
		}
	}
	//定时隐藏控制栏
	function timingHide(){
		hideTimer=window.setTimeout(function(){
			if(ctrlViewStatus==true){
				hideCtrlView(false);
			}
		},5000);
	}

	//选择播放文件
	function selectPlayVideo(noid,name,url){
		this.noid = noid;
		this.noid = document.createElement("div");
		this.noid.id = "videoList"+noid;
		playList.appendChild(this.noid);
		document.getElementById("videoList"+noid).innerHTML=name;
		document.getElementById("videoList"+noid).style.padding=5+"px";
		document.getElementById("videoList"+noid).style.paddingLeft=15+"px";
		document.getElementById("videoList"+noid).style.transform="backgroubd-color 100ms ease";
		document.getElementById("videoList"+noid).onclick=function(){
			if(noid!=playID){
				video.src=url;
				nameBerTitle.innerHTML=name;
				pause();
				playID=noid;
				thisSelectVideo(noid);
				document.getElementById("videoList"+noid).style.backgroundColor="rgba(0,0,0,0.25)";
				createSubtitleList(noid);
				subtitle.src=thisVideo[noid].subtitles[thisVideo[noid].subtitles[0].defaultID].url;
				thisSubtitle(thisVideo[noid].subtitles[0].defaultID,playID);
				subtitleID=thisVideo[noid].subtitles[0].defaultID;
			}else{}
		}
		//高亮当前鼠标移动播放文件名
		document.getElementById("videoList"+noid).onmouseenter=function(){
			document.getElementById("videoList"+noid).style.backgroundColor="rgba(0,0,0,0.25)";
		}
		document.getElementById("videoList"+noid).onmouseout=function(){
			if(noid!=playID){
				document.getElementById("videoList"+noid).style.backgroundColor="";
			}else{
				document.getElementById("videoList"+noid).style.backgroundColor="rgba(0,0,0,0.15)";
			}
		}
	}
	//高亮当前播放文件名
	function thisSelectVideo(thisVideoID){
		for(var i=1;i<thisVideo.length;i++){
			if(i==thisVideoID){
				document.getElementById("videoList"+i).style.backgroundColor="rgba(0,0,0,0.15)";
			}else{
				document.getElementById("videoList"+i).style.backgroundColor="";
			}
		}
	}
	//关闭播放列表面板
	function hidePlayListView(){
		playListPanel.style.opacity="0";
		window.setTimeout(function(){
			playListPanel.style.display="none";
		},100);
	}
	
	//建立字幕列表
	function createSubtitleList(thisVideoID){
		subtitleList.innerHTML="";
		selectSubtitleList(0,"关",null);
		for(var i=1;i<thisVideo[thisVideoID].subtitles.length;i++){
			selectSubtitleList(i,thisVideo[thisVideoID].subtitles[i].name,thisVideo[thisVideoID].subtitles[i].url);
		}
		if(i>3){
			subtitleList.style.height=123+"px";
		}
	}
	//选择字幕列表
	function selectSubtitleList(noid,name,url){
		this.noid = noid;
		this.noid = document.createElement("div");
		this.noid.id = "selectSubtitle"+noid;
		subtitleList.appendChild(this.noid);
		document.getElementById("selectSubtitle"+noid).innerHTML=name;
		document.getElementById("selectSubtitle"+noid).style.padding=5+"px";
		document.getElementById("selectSubtitle"+noid).style.paddingLeft=15+"px";
		document.getElementById("selectSubtitle"+noid).style.transform="backgroubd-color 100ms ease";
		document.getElementById("selectSubtitle"+noid).onclick=function(){
			subtitle.src=url;
			thisSubtitle(noid,playID);
			subtitleID=noid;
			document.getElementById("selectSubtitle"+noid).style.backgroundColor="rgba(0,0,0,0.25)";
		}
		document.getElementById("selectSubtitle"+noid).onmouseenter=function(){
			document.getElementById("selectSubtitle"+noid).style.backgroundColor="rgba(0,0,0,0.25)";
		}
		document.getElementById("selectSubtitle"+noid).onmouseout=function(){
			if(noid!=subtitleID){
				document.getElementById("selectSubtitle"+noid).style.backgroundColor="";
			}else{
				document.getElementById("selectSubtitle"+noid).style.backgroundColor="rgba(0,0,0,0.15)";
			}
		}
	}
	//高亮当前字幕名
	function thisSubtitle(thisSubtitleID,subtitleNumber){
		for(var i=0;i<thisVideo[subtitleNumber].subtitles.length;i++){
			if(i==thisSubtitleID){
				document.getElementById("selectSubtitle"+i).style.backgroundColor="rgba(0,0,0,0.15)";
			}else{
				document.getElementById("selectSubtitle"+i).style.backgroundColor="";
			}
		}
	}
	//关闭字幕面板
	function hideSelectSubtitleView(){
		selectSubtitle.style.opacity="0";
		window.setTimeout(function(){
			selectSubtitle.style.display="none";
		},100);
	}
	
	/***********************/
	
	/********按键触发********/
	
	//播放时
	function getCurTime(){
		timeBarSet.value= video.currentTime / video.duration * timeBarSet.max;		//播放进度
		if(isNaN(video.currentTime)||isNaN(video.duration)){
			timeBarMove(false);
		}else{
			timeBarMove(true);
		}
	}
	//调节进度条
	timeBarSet.oninput=function(){
		inputPress=true;
		window.clearTimeout(hideTimer);
		video.currentTime=timeBarSet.value/timeBarSet.max*video.duration;			//调节播放进度
		if(isNaN(video.currentTime)||isNaN(video.duration)){
			timeBarMove(false);
		}else{
			timeBarMove(true);
		}
		promptBlockSet(setTimeFormat(video.currentTime));
	}
	video.onseeked=function(){
		if(inputPress==true){
			promptBlockSet();
			inputPress=false;
		}
	}
	timeBarSet.ontouchend=function(){
		promptBlockSet();
		inputPress=false;
	}
	
	//音量调节
	volumeSet.oninput=function(){
		window.clearTimeout(hideTimer);
		volumeChange(volumeSet.value/volumeSet.max);
		if(video.muted==false){
			promptBlockSet("音量:"+parseInt(video.volume*100));
		}else{
			promptBlockSet("静音:"+parseInt(video.volume*100));
		}
	}
	volumeSet.onmouseup=function(){
		promptBlockSet();
	}
	volumeSet.ontouchend=function(){
		promptBlockSet();
	}
	//静音
	muteButton.onclick=function(){
		mute();
	}
	
	//播放触发
	pauseButton.onclick=function(){
		pause();
		if(video.paused){
			promptBlockSet("暂停",500);
		}else{
			promptBlockSet("播放",500);
		}
	}
	
	//显示速度调节
	speedButtonAppear.onclick=function(){
		if(speedButtonFunction.style.display=="none"){
			speedButtonFunction.style.display="inline";
		}else{
			speedButtonFunction.style.display="none";
		}
		speedAppear();
	}
	//调慢速度
	speedChangeSlow.onclick=function(){
		speedSet(-0.25);
		speedAppear();
	}
	//调快速度
	speedChangeFast.onclick=function(){
		speedSet(0.25);
		speedAppear();
	}
	//快速调节速度
	speedRecover.onclick=function(){
		if(clickTimer) {
			window.clearTimeout(clickTimer);
			clickTimer = null;
		}
		clickTimer = window.setTimeout(function(){
			if(speedReturn(0)<4){
				speedSet(0.25);
			}else{
				speedSet(0);
				speedSet(0.25);
			}
			speedAppear();
		},300);
		
	}
	//速度恢复
	speedRecover.ondblclick=function(){
		if(clickTimer) {
			window.clearTimeout(clickTimer);
			clickTimer = null;
		}
		speedSet(1);
		speedAppear();
	}
	
	//全屏
	fullScreenButton.onclick=function(){
		fullScreen();
		if(fullScreenStatus==true){
			setTimeout(function(){
				promptBlockSet("全屏",600);
			},150);
			
		}else{
			setTimeout(function(){
				promptBlockSet("退出全屏",600);
			},150);
		}
	}
	
	//单击控制块
	pauseCtrlBlock.onclick=function(){
		ctrlBlockOnclick();
	}
	fullScreenCtrlBlock.onclick=function(){
		ctrlBlockOnclick();
	}
	function ctrlBlockOnclick(){
		window.clearTimeout(touchTimer);
		if(clickTimer) {
			window.clearTimeout(clickTimer);
			clickTimer = null;
		}
		clickTimer = window.setTimeout(function(){
			promptBlockSet();
			if(ctrlViewSwitch==true){
				window.clearTimeout(hideTimer);
				hideCtrlView();
				timingHide();
			}else{
				pause();
			}
		},300);
	}
	//双击控制块
	pauseCtrlBlock.ondblclick=function(){
		if(clickTimer) {
			window.clearTimeout(clickTimer);
			clickTimer = null;
		}
		pause();
		if(video.paused){
			promptBlockSet("暂停",600);
		}else{
			promptBlockSet("播放",600);
		}
	}
	fullScreenCtrlBlock.ondblclick=function(){
		if(clickTimer) {
			window.clearTimeout(clickTimer);
			clickTimer = null;
		}
		fullScreen();
		if(fullScreenStatus==true){
			setTimeout(function(){
				promptBlockSet("全屏",600);
				},150);
			
		}else{
			setTimeout(function(){
				promptBlockSet("退出全屏",600);
				},150);
		}
	}
	//鼠标在控制栏及标题栏移动
	nameBar.onmouseover=function(){
		window.clearTimeout(hideTimer);
	}
	ctrlBar.onmouseover=function(){
		window.clearTimeout(hideTimer);
	}
	nameBar.onmouseout=function(){
		timingHide();
	}
	ctrlBar.onmouseout=function(){
		timingHide();
	}
	ctrlView.onmousemove=function(){
		touchTimer=window.setTimeout(function(){
			hideCtrlView(true);
		},10);
	}
	
	//字幕面板
	subtitleButton.onclick=function(){
		if(selectSubtitle.style.display=="none"){
			selectSubtitle.style.display="block";
			selectSubtitle.style.opacity="1";
			hidePlayListView();
		}else{
			hideSelectSubtitleView();
		}
	}
	selectSubtitle.onmouseover=function(){
		window.clearTimeout(hideTimer);
	}
	
	//播放列表
	playListButton.onclick=function(){
		if(playListPanel.style.display=="none"){
			playListPanel.style.display="block";
			playListPanel.style.opacity="1";
			hideSelectSubtitleView();
		}else{
			hidePlayListView();
		}
	}
	playList.onmouseover=function(){
		window.clearTimeout(hideTimer);
	}
	
	//键盘适配
	playerView.onmouseover=function(){
		panel=true;
	}
	playerView.onmouseout=function(){
		panel=false;
	}
	
	window.onkeydown = function () {
		var e = event.which;
		if (panel==true&&keyboardLock==false) {
			if (e == 32) {
				pause();
				if(video.paused){
					promptBlockSet("暂停",600);
				}else{
					promptBlockSet("播放",600);
				}
			} else if (e == 39) {
				//->
				video.currentTime+=10;
				promptBlockSet(setTimeFormat(video.currentTime),500);
			} else if (e == 37) {
				//<-
				video.currentTime-=10;
				promptBlockSet(setTimeFormat(video.currentTime),500);
			} else if (e == 38) {
				//↑
				if(video.volume+0.1>=1){
					volumeChange(1);
				}else{
					volumeChange(video.volume+0.1);
				}
				promptBlockSet("音量:"+parseInt(video.volume*100),500);
			} else if (e == 40) {
				//↓
				if(video.volume-0.1<=0){
					volumeChange(0);
				}else{
					volumeChange(video.volume-0.1);
				}
				promptBlockSet("音量:"+parseInt(video.volume*100),500);
			} else if(e == 13) {
				fullScreen();
			} else if(e == 76) {
				if(playListPanel.style.display=="none"){
					hideCtrlView(true);
					playListPanel.style.display="block";
					playListPanel.style.opacity="1";
					hideSelectSubtitleView();
				}else{
					hidePlayListView();
				}
			} else if(e == 16||e == 77||e == 72) {
				if(ctrlViewSwitch==true){
					window.clearTimeout(hideTimer);
					hideCtrlView();
					timingHide();
				}
			}else {}
		}
	}
	
	/***********************/
	
	
}