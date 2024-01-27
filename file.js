var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.targert == modal) {
        modal.style.display = "none";
    }
}
// $('.download-now').on('click', function () {
//     $('#openModal').css('opacity', '1');
//     setTimeout(function () {
//         $('#openModal').css('opacity', '0');
//     }, 6000)
//     return false;
// });
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    next.click();
},5000 )
function showSlider(){

    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

   
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}


thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});

var modal1= document.getElementById("myModal1");
var img = document.getElementById("myimg");
var span = document.getElementsByClassName("close1")[0];
img.onclick = function() {
    modal1.style.display = "block";
}
span.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event){
    if(event.targert == modal1) {
        modal1.style.display = "none";
    }
}