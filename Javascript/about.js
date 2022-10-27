document.querySelector('.men').addEventListener('click',
function(e){
    document.querySelector('.menu').style.display = 'flex';
    document.querySelector('.menu').style.right = '0px';
    document.querySelector('.close-menu').style.display = 'flex';
})

document.querySelector('.close-menu').addEventListener("click",
function(e){
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.menu').style.right = '-250px';
    document.querySelector('.close-menu').style.display = 'none';
})