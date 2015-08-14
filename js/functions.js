var imagesArray = ["img/Girls/1.svg", "img/Girls/2.svg", "img/Girls/3.svg", "img/Girls/4.svg", "img/Girls/5.svg"];
function displayImage(){
	var num = Math.floor(Math.random() * 5);
	var numm = Math.floor(Math.random() * 5);
	 document.picture.src = imagesArray[num];
     document.picture2.src = imagesArray[numm];

}
