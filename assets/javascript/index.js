document.querySelector('#cart-2').addEventListener('click',
function(e){
    document.querySelector('.cart-dark-side').style.display = 'flex';
});


document.querySelector('.close-2').addEventListener('click',
function(e){
    document.querySelector('.cart-dark-side').style.display = 'none';
});

document.querySelector("#discover-btn").addEventListener('click',
function(e){
    alert("Please LogIn to access the section")
})

document.querySelector('.service_list').addEventListener("click",
function(e){
    alert("Please LogIn to access the section")
})

document.querySelector('.preferences').addEventListener("click",
function(e){
    alert("Please LogIn to access the section")
})

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