var imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
function displayImage(){
	var num = Math.floor(Math.random() * 5);
	var numm = Math.floor(Math.random() * 5);
	 document.picture.src = imagesArray[num];
     document.picture2.src = imagesArray[numm];

}
