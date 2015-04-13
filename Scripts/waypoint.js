#pragma strict

var waypointnum:int;
function Start () {

}
function collisionOccured()
{

PlayerPrefs.SetInt("waypoint", waypointnum);
}

function Update () {

}