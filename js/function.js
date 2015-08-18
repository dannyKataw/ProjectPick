var imagesArray =
[	"img/Guys/1.svg",
	"img/Guys/2.svg",
	"img/Guys/3.svg",
	"img/Guys/4.svg",
	"img/Guys/5.svg",
	"img/Guys/7.svg",
	"img/Guys/8.svg",
	"img/Guys/9.svg",
	"img/Guys/10.svg",
	"img/Guys/11.svg",
	"img/Guys/12.svg",
	"img/Guys/13.svg",
	"img/Guys/14.svg",
	"img/Guys/15.svg",
	"img/Girls/16.svg",
	"img/Guys/17.svg",
	"img/Guys/18.svg",
	"img/Guys/19.svg",
	"img/Guys/20.svg",
	"img/Guys/21.svg",
	"img/Guys/22.svg",
	"img/Guys/23.svg",
	"img/Guys/24.svg",
	"img/Guys/25.svg",
	"img/Guys/26.svg",
	"img/Guys/27.svg",
	"img/Guys/28.svg",
	"img/Guys/29.svg",
	"img/Guys/30.svg"
];
function displayImage(){
	var num = Math.floor(Math.random() * 6);
	var numm = Math.floor(Math.random() * 6);
	 document.picture.src = imagesArray[num];
     document.picture2.src = imagesArray[numm];

}
