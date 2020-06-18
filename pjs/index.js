window.onload = function() {
	setVideoWindow(player.noid, player.name, player.url, player.width, player.height, player.viewWindow, player.centerPlayTimeBlockSwitch,
		player.autoplay);
}

function setVideoWindow(noid, name, url, width, height, viewWindow, centerPlayTimeBlockSwitch, autoplay) {
	document.getElementById(viewWindow).innerHTML = '<div id="block' + noid + '"><div id="v' + noid +
		'"style="overflow: hidden;font-size: 0;position: relative;background-color: black;width: 100%;height: 100%;user-select: none"><div id="pauseBlock' +
		noid + '"style="z-index: 1;position: absolute;width: 100%;top: 0;opacity: 1;">&nbsp;</div><div id="fullScreenblock' +
		noid +
		'"style="z-index: 1;position: absolute;width: 100%;bottom: 0;opacity: 1;">&nbsp;</div><div id="viewPlayerNameBar' +
		noid +
		'"style="z-index: 2;opacity: 0;height: 85px;background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));font-size: 20px;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);text-align: center;position: absolute;top: 0;width: 100%;">&nbsp;</div><div id="viewPlayerCtrlBar' +
		noid +
		'"style="z-index: 2;opacity: 0;height: 140px;width: 100%;background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));height: 120px;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);position: absolute;bottom: 0;">&nbsp;</div><div id="playerNameBar' +
		noid +
		'"style="opacity: 1;transition: opacity 500ms ease;z-index: 3;background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));font-size: 20px;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);text-align: center;position: absolute;top: 0;width: 100%;overflow: hidden;"><div style="margin: 20px;height: 25px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' +
		name + '</div></div><div id="centerPlayTime' + noid +
		'"style="position: absolute;width: 100%;display:none;"><div id="centerPlayTimeText' + noid +
		'"style="width: 250px;padding: 20px;background-color: rgba(0, 0, 0, 0.5);margin: 0 auto;text-align: center;font-size: 50px;color: rgba(255, 255, 255, 0.8);border-radius: 8px;">00:00</div></div><video id="videoPlayer' +
		noid + '"style="width: 100%;height: 100%;"></video><div id="playerCtrlBar' + noid +
		'"style="opacity:1;transition: opacity 500ms ease;z-index: 3;width: 100%;background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));height: 120px;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);position: absolute;bottom: 0;overflow: hidden;"><div style="text-align: center;margin-top: 20px;"><div style="padding: 8px 0px 8px 0px;position: relative;"><div style="height:4px;background-color: rgba(255,255,255,0.8);margin: 0px 20px 0px 20px;border-radius: 2px;overflow: hidden;"><div id="timeBarPlay' +
		noid + '"style="height:4px;background-color: rgba(7,168,255,0.8);width: 0px;"></div></div><div id="setTimeBarButton' +
		noid +
		'"style="position: absolute;left: 0px;top: 2px;margin: 0px 18px 0px 18px;"><img src="psvg/progressButton.svg"style="width: 16px;height: 16px;"/></div></div><div style="position: relative;top: -20px;margin-bottom: -20px;padding: 0px 18px 0px 18px;"><input type="range"value="0"id="timeBar' +
		noid +
		'"min="0"max="1024"style="cursor: pointer;width: 100%;height: 20px;margin: 0;opacity: 0;"/></div></div><article style="display: flex;"><div id="playTime' +
		noid + '"style="flex: 1;text-align: left;padding-left: 20px;font-size: 16px;">00:00</div><div id="videoTime' + noid +
		'"style="flex: 1;text-align: right;padding-right: 20px;font-size: 16px;"></div></article><article style="display: flex;"><div style="flex: 1;"><div style="padding:5px 0px 5px 20px;font-size: 0;"><button id="speedButton' +
		noid +
		'"style="cursor: pointer;height: 30px;font-size: 16px;background-color: rgba(255, 255, 255, 0.1);background-repeat: no-repeat;background-position: center;outline: none;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);border: rgba(255, 255, 255, 0.3) 2px solid;margin: 1px;border-radius: 4px;padding: 0;width: 55px;">x1</button><span id="speedButtonDisplay' +
		noid + '"style="display: none;"><button id="speedButtonSlow' + noid +
		'"style="cursor: pointer;height: 30px;font-size: 16px;background-color: rgba(255, 255, 255, 0.1);background-repeat: no-repeat;background-position: center;outline: none;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);border: rgba(255, 255, 255, 0.3) 2px solid;margin: 1px;border-radius: 4px;padding: 0;width: 30px;background-image: url(psvg/leftTriangle.svg);background-size: 16px 16px;">&nbsp;</button><button id="speedButtonSet' +
		noid +
		'"style="cursor: pointer;height: 30px;font-size: 16px;background-color: rgba(255, 255, 255, 0.1);background-repeat: no-repeat;background-position: center;outline: none;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);border: rgba(255, 255, 255, 0.3) 2px solid;margin: 1px;border-radius: 4px;padding: 0;width: 55px;">x1</button><button id="speedButtonFast' +
		noid +
		'"style="cursor: pointer;height: 30px;font-size: 16px;background-color: rgba(255, 255, 255, 0.1);background-repeat: no-repeat;background-position: center;outline: none;color: rgba(255, 255, 255, 0.9);text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);border: rgba(255, 255, 255, 0.3) 2px solid;margin: 1px;border-radius: 4px;padding: 0;width: 30px;background-image: url(psvg/rightTriangle.svg);background-size: 16px 16px;">&nbsp;</button></span></div></div><div style="text-align: center;width: 35px;height: 35px;"><div id="videoPauseButton' +
		noid +
		'"style="cursor: pointer;background-color: rgba(0, 0, 0, 0);background-image: url(psvg/play.svg);background-repeat: no-repeat;background-position: center;outline: none;border: 0;opacity: 0.75;width: 35px;height: 35px;outline: none;position: relative;top: -10px;"></div></div><div style="flex: 1"><article style="display: flex;"><div style="flex: 1;position: relative;"><div style="position: relative;left: 25px;top:7.5px;font-size: 0px;width: 75px;text-align: center;"><div style="margin: 0 auto;height:4px;background-color: rgba(255,255,255,0.8);width: 60px;border-radius: 2px;overflow: hidden;"><div id="volumeSetBar' +
		noid +
		'"style="height:4px;background-color: rgba(7,168,255,0.8);width: 0px;width: 45px;"></div></div><div style="text-align: left;"><img id="setVolumeBarButton' +
		noid +
		'"src="psvg/progressButton.svg"style="width: 16px;height: 16px;position:relative;bottom: 10px;"/></div><input id="volumeBar' +
		noid +
		'"type="range"value="45"min="0"max="60"style="cursor: pointer;width: 75px;height: 20px;margin: 0;border: 0;opacity: 0;position: relative;top: -28px;"/></div><div id="volumeButton' +
		noid +
		'"style="cursor: pointer;background-color: rgba(255, 255, 255, 0);background-repeat: no-repeat;background-position: left;background-size: 16px 16px;outline: none;height: 20px;width: 20px;border: 0;opacity: 0.75;position: absolute;bottom: 27.5px;left: 10px;"></div></div><div style="flex: 1;text-align: right;padding: 5px 20px 5px 0px;"><div id="fullScreen' +
		noid +
		'"style="outline: none;cursor: pointer;height: 30px;background-color: rgba(255, 255, 255, 0.1);background-repeat: no-repeat;color: rgba(255, 255, 255, 0.9);border: rgba(255, 255, 255, 0.3) 2px solid;margin: 1px;border-radius: 4px;padding: 0;width: 30px;background-image: url(psvg/fullScreen.svg);display:inline-block">&nbsp;</div></div></article></div></article></div></div></div>';
	playVideo(width, height, "v" + noid, "videoPlayer" + noid, "videoTime" + noid, "playTime" + noid, "timeBar" + noid,
		"videoPauseButton" +
		noid,
		"progressButton" + noid, "volumeBar" + noid, "volumeButton" + noid, "block" + noid, "timeBarPlay" + noid,
		"volumeSetBar" + noid, "speedButtonDisplay" + noid, "speedButton" + noid, "speedButtonSet" + noid,
		"speedButtonFast" +
		noid, "speedButtonSlow" + noid, "fullScreen" + noid, "setTimeBarButton" + noid, "setVolumeBarButton" + noid,
		"playerNameBar" + noid, "playerCtrlBar" + noid, "viewPlayerNameBar" + noid, "viewPlayerCtrlBar" + noid,
		"centerPlayTime" + noid, "centerPlayTimeText" + noid, "pauseBlock" + noid, "fullScreenblock" + noid,
		centerPlayTimeBlockSwitch, autoplay, url);
}

function playVideo(width, height, vID, videoID, videoTimeID, playTimeID, timeBarID, videoPauseButtonID,
	progressButtonID,
	volumeBarID,
	volumeButtonID, blockID, timeBarPlayID, volumeSetBarID, speedButtonDisplayID, speedButtonID, speedButtonSetID,
	speedButtonFastID, speedButtonSlowID, fullScreenID, setTimeBarButtonID, setVolumeBarButtonID, playerNameBarID,
	playerCtrlBarID, viewPlayerNameBarID, viewPlayerCtrlBarID, centerPlayTimeID, centerPlayTimeTextID, pauseBlockID,
	fullScreenblockID, centerPlayTimeBlockSwitch, autoplay, url) {
	var fullScreenState = false;
	var viewHidePlayerBar;

	var block = document.getElementById(blockID);
	var v = document.getElementById(vID);
	var video = document.getElementById(videoID);
	var videoTime = document.getElementById(videoTimeID);
	var timeBar = document.getElementById(timeBarID);
	var videoPauseButton = document.getElementById(videoPauseButtonID);
	var volumeBar = document.getElementById(volumeBarID);
	var volumeButton = document.getElementById(volumeButtonID);
	var speedButtonSet = document.getElementById(speedButtonSetID);
	var fullScreen = document.getElementById(fullScreenID);
	var playTime = document.getElementById(playTimeID);
	var timeBarPlay = document.getElementById(timeBarPlayID);
	var volumeSetBar = document.getElementById(volumeSetBarID);
	var speedButtonDisplay = document.getElementById(speedButtonDisplayID);
	var speedButton = document.getElementById(speedButtonID);
	var speedButtonSlow = document.getElementById(speedButtonSlowID);
	var speedButtonFast = document.getElementById(speedButtonFastID);
	var setTimeBarButton = document.getElementById(setTimeBarButtonID);
	var setVolumeBarButton = document.getElementById(setVolumeBarButtonID);
	var playerCtrlBar = document.getElementById(playerCtrlBarID);
	var playerNameBar = document.getElementById(playerNameBarID);
	var viewPlayerNameBar = document.getElementById(viewPlayerNameBarID);
	var viewPlayerCtrlBar = document.getElementById(viewPlayerCtrlBarID);
	var centerPlayTime = document.getElementById(centerPlayTimeID);
	var centerPlayTimeText = document.getElementById(centerPlayTimeTextID);
	var pauseBlock = document.getElementById(pauseBlockID);
	var fullScreenblock = document.getElementById(fullScreenblockID);

	video.src = url;
	video.autoplay = autoplay;

	timeBar.value = 0;
	block.style.width = width + "px";
	block.style.height = height + "px";

	pauseBlock.style.height = height * 1 / 2 + "px";
	fullScreenblock.style.height = height * 1 / 2 + "px";

	if (video.duration = "NaN") {
		videoTime.innerHTML = "00:00";
	} else {
		videoTime.innerHTML = setTimeFormat(video.duration);
	}

	video.addEventListener("timeupdate", getCurTime);
	if (height < 800) {
		centerPlayTime.style.top = (height / 2 - 100) + "px";
	} else {
		centerPlayTime.style.top = 200 + "px";
	}

	if (video.autoplay == true) {
		videoPauseButton.style.backgroundImage = "url(psvg/pause.svg)";
	}

	function getCurTime() {
		playTime.innerHTML = setTimeFormat(video.currentTime);
		videoTime.innerHTML = setTimeFormat(video.duration - video.currentTime);
		timeBar.value = video.currentTime / video.duration * 1024;
		timeBarPlay.style.width = (timeBar.value / 1024 * (timeBar.clientWidth - 16)) + "px";
		setTimeBarButton.style.left = (timeBar.value / 1024 * (timeBar.clientWidth - 16)) + "px";
	}

	timeBar.oninput = function() {
		if (centerPlayTimeBlockSwitch == true) {
			centerPlayTime.style.display = "block";
		}
		playTime.innerHTML = setTimeFormat(video.currentTime);
		centerPlayTimeText.innerHTML = setTimeFormat(video.currentTime);
		video.currentTime = timeBar.value / 1024 * video.duration;
		timeBarPlay.style.width = (timeBar.value / 1024 * (timeBar.clientWidth - 16)) + "px";
		setTimeBarButton.style.left = (timeBar.value / 1024 * (timeBar.clientWidth - 16)) + "px";
	}
	timeBar.onmouseup = function() {
		centerPlayTime.style.display = "none";
	}
	window.onkeyup = function() {
		var e = event.which;
		if (e == 37 || e == 39) {
			centerPlayTime.style.display = "none";
		}
	}

	setVolumeBar();
	volumeBar.oninput = function() {
		setVolumeBar();
	}

	function setVolumeBar() {
		video.volume = volumeBar.value / 60;
		volumeSetBar.style.width = (volumeBar.value) + "px";
		setVolumeBarButton.style.left = (volumeBar.value) + "px";
		setVolumeButtonDisplay();
	}

	volumeButton.onclick = function() {
		volumeTurn();
	}

	function volumeTurn() {
		if (video.muted == true) {
			video.muted = false;
			volumeSetBar.style.background = "rgba(7,168,255,0.8)";
		} else {
			video.muted = true;
			volumeButton.style.backgroundImage = "url(psvg/volume0.svg)";
			volumeSetBar.style.background = "rgba(128,128,128,0.8)";
		}
		setVolumeButtonDisplay();
	}

	function setVolumeButtonDisplay() {
		if (video.muted == true) {
			if (video.volume >= 2 / 3) {
				volumeButton.style.backgroundImage = "url(psvg/volume4-0.svg)";
			} else if (video.volume < 2 / 3 && video.volume > 1 / 3) {
				volumeButton.style.backgroundImage = "url(psvg/volume3-0.svg)";
			} else {
				volumeButton.style.backgroundImage = "url(psvg/volume0.svg)";
			}
		} else {
			if (video.volume >= 2 / 3) {
				volumeButton.style.backgroundImage = "url(psvg/volume4.svg)";
			} else if (video.volume < 2 / 3 && video.volume >= 1 / 3) {
				volumeButton.style.backgroundImage = "url(psvg/volume3.svg)";
			} else if (video.volume < 1 / 3 && video.volume > 0) {
				volumeButton.style.backgroundImage = "url(psvg/volume2.svg)";
			} else {
				volumeButton.style.backgroundImage = "url(psvg/volume0.svg)";
			}
		}
	}

	videoPauseButton.onclick = function() {
		pause();
	}

	function pause() {
		if (video.paused) {
			video.play();
			videoPauseButton.style.backgroundImage = "url(psvg/pause.svg)";
			clearTimeout(viewHidePlayerBar);
		} else {
			video.pause();
			videoPauseButton.style.backgroundImage = "url(psvg/play.svg)";
		}
	}

	window.onkeydown = function() {
		var e = event.which;
		if (fullScreenState == true) {
			if (e == 32) {
				pause();
			} else if (e == 37) {
				rewind();
			} else if (e == 38) {
				upVolume();
			} else if (e == 39) {
				fastForward();
			} else if (e == 40) {
				downVolume();
			} else {

			}
		}
	}
	// }

	function fastForward() {
		video.currentTime += 5;
		if (centerPlayTimeBlockSwitch == true) {
			centerPlayTime.style.display = "block";
			centerPlayTimeText.innerHTML = setTimeFormat(video.currentTime);
		}
	}

	function rewind() {
		video.currentTime -= 5;
		if (centerPlayTimeBlockSwitch == true) {
			centerPlayTime.style.display = "block";
			centerPlayTimeText.innerHTML = setTimeFormat(video.currentTime);
		}
	}

	function upVolume() {

	}

	function downVolume() {

	}
	video.onended = function() {
		videoPauseButton.style.backgroundImage = "url(psvg/play.svg)";
		appearPlayBar();
	}

	var speedButtonStatus = false;
	speedButton.onclick = function() {
		if (speedButtonStatus == false) {
			speedButtonStatus = true;
			speedButtonDisplay.style.display = "inline";
			speedButton.innerHTML = "speed";
		} else {
			speedButtonStatus = false;
			speedButtonDisplay.style.display = "none";
			speedButton.innerHTML = "x" + video.playbackRate;
		}
	}
	speedButtonSlow.onclick = function() {
		if (video.playbackRate <= 3 && video.playbackRate > 0.25) {
			video.playbackRate -= 0.25;
		} else if (video.playbackRate > 3) {
			video.playbackRate -= 0.5;
		} else {}
		speedButtonSet.innerHTML = "x" + video.playbackRate;
	}
	speedButtonFast.onclick = function() {
		if (video.playbackRate < 3) {
			video.playbackRate += 0.25;
		} else if (video.playbackRate >= 3 && video.playbackRate < 16) {
			video.playbackRate += 0.5;
		} else {}
		speedButtonSet.innerHTML = "x" + video.playbackRate;
	}
	speedButtonSet.onclick = function() {
		if (video.playbackRate < 3) {
			video.playbackRate += 0.25;
		} else if (video.playbackRate == 3) {
			video.playbackRate = 0.25;
		} else {}
		speedButtonSet.innerHTML = "x" + video.playbackRate;
	}
	speedButtonSet.ondblclick = function() {
		video.playbackRate = 1;
		speedButtonSet.innerHTML = "x" + video.playbackRate;
	}

	document.addEventListener("fullscreenchange", function(e) {
		if (document.fullscreenElement) {
			fullScreenState = true;
			fullScreen.style.backgroundImage = "url(psvg/outFullScreen.svg)";
			centerPlayTime.style.top = 200 + "px";
			pauseBlock.style.height = window.screen.height / 2 + "px";
			fullScreenblock.style.height = window.screen.height / 2 + "px";
		} else {
			fullScreenState = false;
			fullScreen.style.backgroundImage = "url(psvg/fullScreen.svg)";
			centerPlayTime.style.top = (height / 2 - 100) + "px";
			pauseBlock.style.height = height * 1 / 2 + "px";
			fullScreenblock.style.height = height * 1 / 2 + "px";
		}
	});

	fullScreen.onclick = function() {
		fullScreenS();
		console.log("click");
	}

	function fullScreenS() {
		if (fullScreenState == false) {
			v.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	}

	viewPlayerCtrlBar.onmouseover = function() {
		appearPlayBar();
	}
	viewPlayerNameBar.onmouseover = function() {
		appearPlayBar();
	}
	viewPlayerCtrlBar.onmouseout = function() {
		startHidePlayerBar();
	}
	viewPlayerNameBar.onmouseout = function() {
		startHidePlayerBar();
	}

	function startHidePlayerBar() {
		if (video.paused == false) {
			viewHidePlayerBar = setTimeout(hidePlayerBar, 5000);
		}
	}

	function hidePlayerBar() {
		playerCtrlBar.style.opacity = "0";
		playerNameBar.style.opacity = "0";
		playerCtrlBar.style.pointerEvents = "none";
		playerNameBar.style.pointerEvents = "none";
	}

	function appearPlayBar() {
		playerCtrlBar.style.opacity = "1";
		playerNameBar.style.opacity = "1";
		playerCtrlBar.style.pointerEvents = "auto";
		playerNameBar.style.pointerEvents = "auto";
	}

	pauseBlock.ondblclick = function() {
		pause();
		clearTimeout(viewHidePlayerBar);
		centerPlayTime.style.display = "block";
		if (video.paused == false) {
			centerPlayTimeText.innerHTML = "播放";
			startHidePlayerBar();
		} else {
			centerPlayTimeText.innerHTML = "暂停";
		}
		setTimeout(function() {
			centerPlayTime.style.display = "none";
		}, 500)
	}
	fullScreenblock.ondblclick = function() {
		fullScreenS();
		startHidePlayerBar();
	}
	pauseBlock.onclick = function() {
		clearTimeout(viewHidePlayerBar);
		appearPlayBar();
		startHidePlayerBar();
		centerPlayTime.style.display = "none";
	}
	fullScreenblock.onclick = function() {
		clearTimeout(viewHidePlayerBar);
		appearPlayBar();
		startHidePlayerBar();
		centerPlayTime.style.display = "none";
	}
	pauseBlock.onmousemove = function() {
		clearTimeout(viewHidePlayerBar);
		appearPlayBar();
		startHidePlayerBar();
	}
	fullScreenblock.onmousemove = function() {
		clearTimeout(viewHidePlayerBar);
		appearPlayBar();
		startHidePlayerBar();
	}
	pauseBlock.onmouseout = function() {
		clearTimeout(viewHidePlayerBar);
		startHidePlayerBar();
	}
	fullScreenblock.onmouseout = function() {
		clearTimeout(viewHidePlayerBar);
		startHidePlayerBar();
	}
}

function setTimeFormat(s) {
	var minute = parseInt(parseInt(s) / 60) + "";
	var second = (parseInt(s) - (parseInt(parseInt(s) / 60)) * 60) + "";
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	return (minute + ":" + second);
}
