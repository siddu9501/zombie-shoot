#pragma strict
var score:GUIText;
var highScoreCheck:GameObject;
function Start () {
var hs = PlayerPrefs.GetInt("high score");
score.text = "highscore" +  hs;
}

function Update () {

var highScore = PlayerPrefs.GetInt("high score");
var currentHighScore = highScoreCheck.GetComponent(ZombieSpawn);
if(currentHighScore.count > highScore ) {	
	PlayerPrefs.SetInt("high score" , currentHighScore.count);
	score.text = "highscore" + currentHighScore.count;
	} 

}