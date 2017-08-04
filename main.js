var links = ["https://vignette2.wikia.nocookie.net/diepio/images/d/d6/Tanksksksksk.png/revision/latest?cb=20160906115151",

"https://media.mojang.com/blog-image/0db18353862a2f2d4d029b757914935a930311a4/0_17_Update_Mojang_Blog_1024x576.png",

"https://minecraft.net/static/pages/img/minecraft-hero.df1112867f04.jpg",

];

var titles = ["Diep.io level 0 tank", "Minecraft end dragon", "Minecraft world",];
var index = 0;
var autoplay = true;

function prevPic() {
  var img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
}
function nextPic() {
  //console.log("nextPic: " + index);
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  
  var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  //console.log(title);
  
  if(autoplay) {
    setTimeout(nextPic, 3000);
  }
}

if(autoplay) {
    setTimeout(nextPic, 3000);
}
