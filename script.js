//your JS code here. If required.
const otp=document.querySelectorAll(".code"); 
// otp[0].focus();
function handleInput() {
	let val=this.event.target.value;
	let index=parseInt(this.event.target.id.split("-")[1]);
	 
	if(val>=0 && val<=9 && index<=4){
		otp[index+1].focus();
	} 
	if(!val && index>=1){
		otp[index-1].focus();	
	}
}