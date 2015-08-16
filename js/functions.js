var imagesArray =
[	"img/Girls/1.svg",
	"img/Girls/2.svg",
	"img/Girls/3.svg",
	"img/Girls/4.svg",
	"img/Girls/5.svg",
	"img/Girls/7.svg",
	"img/Girls/8.svg",
	"img/Girls/9.svg",
	"img/Girls/10.svg",
	"img/Girls/11.svg",
	"img/Girls/12.svg",
	"img/Girls/13.svg",
	"img/Girls/14.svg",
	"img/Girls/15.svg",
	"img/Girls/16.svg",
	"img/Girls/17.svg",
	"img/Girls/18.svg",
	"img/Girls/19.svg",
	"img/Girls/20.svg",
	"img/Girls/21.svg",
	"img/Girls/22.svg",
	"img/Girls/23.svg",
	"img/Girls/24.svg",
	"img/Girls/25.svg",
	"img/Girls/26.svg",
	"img/Girls/27.svg",
	"img/Girls/28.svg",
	"img/Girls/29.svg",
	"img/Girls/30.svg"
];
function displayImage(){
	var num = Math.floor(Math.random() * 29);
	var numm = Math.floor(Math.random() * 29);
	 document.picture.src = imagesArray[num];
     document.picture2.src = imagesArray[numm];

}
