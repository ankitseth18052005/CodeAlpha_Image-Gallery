const images = [
"https://picsum.photos/id/1015/600/400",
"https://picsum.photos/id/1011/600/400",
"https://picsum.photos/id/1025/600/400",
"https://picsum.photos/id/1039/600/400",
"https://picsum.photos/id/1043/600/400",
"https://picsum.photos/id/237/600/400"
];

let current = 0;

function openLightbox(index){
current=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=images[current];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeImage(step){

current+=step;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

document.getElementById("lightbox-img").src=images[current];

}

function filterImages(category){

const items=document.querySelectorAll(".image");

items.forEach(item=>{

if(category==="all"){
item.style.display="block";
}
else{
item.style.display=item.classList.contains(category)
?"block":"none";
}

});

document.querySelectorAll(".filters button").forEach(btn=>{
btn.classList.remove("active");
});

event.target.classList.add("active");

}