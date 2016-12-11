/********************************************
*
* Copyright(c) 2013- AndroboGroup, All rights reserved.
*
********************************************/

/********************************************
*
* 定数定義
*
********************************************/
// センサー(右)

/********************************************
*
* クラス定義
*
********************************************/
/**
 * コランダムクラス
 *
 */
function Corundum() {
}
/**
 * 初期化処理
 */
Corundum.prototype.init = function() {
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
Corundum.prototype.sensor = function(left, center, right, red, green, blue) {
}
/**
 * 動作ステータス処理
 *
 * @param 動作ステータス
 */
Corundum.prototype.motionStatus = function(motionStatus) {
}
/**
 * 動作リクエスト状態処理
 *
 * @param 動作リクエスト状態
 */
Corundum.prototype.motionRequestStatus = function(motionRequestStatus) {
}
/**
 * 電池残量処理
 *
 * @param 電池残量最大値
 * @param 電池残量
 */
Corundum.prototype.battery = function(scale, level) {
}
/**
 * スピーチステータス処理
 *
 * @param スピーチステータス
 */
Corundum.prototype.speechStatus = function(speechStatus) {
}
/**
 * スピーチリクエスト状態処理
 *
 * @param スピーチリクエスト状態
 */
Corundum.prototype.speechRequestStatus = function(speechRequestStatus) {
}
/**
 * プラグインエラー処理
 *
 * @param エラーメッセージ
 */
Corundum.prototype.pluginError = function(error) {
}
/**
 * デバッグ
 */
Corundum.prototype.debug = function() {
}

