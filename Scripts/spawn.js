#pragma strict


function Start () {

var currentPos = PlayerPrefs.GetInt("waypoint");
var currentPositionString = currentPos.ToString();
var current_waypoint = GameObject.FindGameObjectWithTag(currentPositionString);
Debug.Log(currentPositionString);
this.transform.position = current_waypoint.transform.position;

}

function Update () {


}
function OnTriggerEnter(other: Collider )
{
other.GetComponent(waypoint).collisionOccured();

}