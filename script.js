//your JS code here. If required.
const otp=document.querySelectorAll(".code");
function handleInput() {
	let val=this.event.target.value;
	let index=parseInt(this.event.target.id);
	if(val>=0 && val<=9 && index<5){
		otp[index+1].focus();
	} 
	if(!val && index>=1){
		otp[index-1].focus();
		
	}
	
}