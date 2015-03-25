#pragma strict
var health=100;
var zombieDead:GameObject;
function Start () {

}

function Update () {
if(health<=0)
{
var deadZombie = zombieDead.GetComponent(ZombieSpawn);
deadZombie.count = deadZombie.count+1;
Destroy(gameObject);
}
}
function TakeDamage()
 {
  health-=50;
  }