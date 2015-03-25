#pragma strict
var zombie :Transform;
var spawn1 :Transform;
var spawn2 :Transform;
var spawn3 :Transform;
var temp: float;

var score:GUIText;
var count = 0;
function Start () {

InvokeRepeating("zombieSpawnage",0,2);

}
function countreturn()
{
return count;
}
function Update () {

score.text = "score: " + count.ToString();

}
function  zombieSpawnage()
{
  	temp =Random.value;
  	Debug.Log(temp);
  	if (temp >= 0.3 && temp < 0.6)
	{
		Instantiate(zombie,spawn1.position, Quaternion.identity);
//		Debug.Log("spawn");
	}
	else if (temp >= 0.6 && temp < 0.9)
	{
		Instantiate(zombie,spawn2.position, Quaternion.identity);
//		Debug.Log("spawn");
	}	
	else if (temp < 0.3 )
	{
		Instantiate(zombie,spawn3.position , Quaternion.identity);
		//Debug.Log("spawn");
	}
 }
  