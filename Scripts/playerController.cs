using UnityEngine;
using System.Collections;

public class playerController : MonoBehaviour {
	public float speed;
	public Light spotLight;
	public GameObject trigger;
	private Vector3 distance;
	private double total_distance;
	private double prev_total_distance;
	private Vector3 prev_distance;
	void Start()
	{
	}
	void FixedUpdate()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");
		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);
		rigidbody.AddForce (movement*speed*Time.deltaTime);
	}
	void OnTriggerEnter(Collider other) {
		if (other.gameObject.tag == "triggerLight") {
			spotLight.intensity = spotLight.intensity + 1;
			prev_distance = this.transform.position - other.gameObject.transform.position;
			prev_total_distance = (prev_distance.x * prev_distance.x) + (prev_distance.z*prev_distance.z);
		}

	}
	void onTriggerStay( Collider other)
	{
		if (other.gameObject.tag == "triggerLight") {
			trigger = other.gameObject;
		}
		distance = this.transform.position - trigger.transform.position;
		total_distance = (distance.x * distance.x) + (distance.z * distance.z);
		if (total_distance < prev_total_distance) {
			spotLight.intensity += 1.3f;
			prev_total_distance = total_distance;
				}
		else if (total_distance > prev_total_distance) {
						spotLight.intensity -= 1.3f;
						prev_total_distance = total_distance;
				}
	}
	void OnTriggerExit(Collider other) {
		if (other.gameObject.tag == "triggerLight")
						spotLight.intensity = 0.1f;
	}
	
}
