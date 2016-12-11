/********************************************
*
* Copyright(c) 2013- AndroboGroup, All rights reserved.
*
********************************************/

/********************************************
*
* クラス定義
*
********************************************/

/**
 * コランダムクラス
 *
 */
//Corundumクラスを継承
function MyCorundum() {
	Corundum.apply(this, arguments);
}
MyCorundum.prototype = new Corundum();
MyCorundum.prototype.constructor = MyCorundum;
/**
 * 初期化処理
 */
MyCorundum.prototype.init = function() {
	$("#faceImg").attr("src", "images/00.png");
}
/**
 * センサー処理
 *
 * @param センサー値(左)
 * @param センサー値(中央)
 * @param センサー値(右)
 * @param カラーセンサー値(Red)
 * @param カラーセンサー値(Green)
 * @param カラーセンサー値(Blue)
 */
MyCorundum.prototype.sensor = function(left, center, right, red, green, blue) {

	$("#sonicLeftValue").html(left);
	$("#sonicCenterValue").html(center);
	$("#sonicRightValue").html(right);
	$("#colorRedValue").html(red);
	$("#colorGreenValue").html(green);
	$("#colorBlueValue").html(blue);

}

/**
 * 発話します。
 *
 * @param セリフ
 */
function speak(phrase) {
	var param = {
		"phrase":phrase
		,"id":"fa001"
		,"rate":45
		,"pitch":80
		,"pitchRange":70
	};
	document.location = encodeURI("corundum-api://speech(" + JSON.stringify(param) + ")");
}

/**
 * 動作します。
 *
 * @param 動作ID
 */
function move(motionId) {
	var param = {
		 "id":motionId
		,"additionalTime":0
	};
	document.location = encodeURI("corundum-api://motion(" + JSON.stringify(param) + ")");
}

/**
 * 更新チェック
 *
 * @param action 動作種類
 * @param url サーバーURL
 */
function checkUpdate(action, url) {

	console.log(action + " チェックスタート");
	$.post(url + "?mode=check", {}, function(data) {

		// 返却値が空白じゃなかったら処理実行
		if(data != ""){
			if(action == "speak") {

				console.log(action + " " + data);
				$('#speak').html(data);
				speak(data);

			}else if(action == "move") {

				console.log(action + " " + data);
				$('#move').html(data);
				move(data);

			}else if(action == "face") {

				console.log(action + " " + data);
				$('#faceImg').attr('src', "images/" + data + ".png");
			}
		} else {
			console.log(action + " 空白レスポンス受信");
		}
		checkUpdate(action, url);
	});
}

/**
 * onLoad時処理
 */
window.onload = function(){

	corundum = new MyCorundum();
	corundum.init();

	checkUpdate("face", "http://searching4freedom.razor.jp/Chat/Face.php");
	checkUpdate("speak", "http://searching4freedom.razor.jp/Chat/Speak.php");
	checkUpdate("move", "http://searching4freedom.razor.jp/Chat/Move.php");

}
