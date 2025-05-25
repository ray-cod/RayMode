document.querySelector('.sold').addEventListener('click',
e =>{
    const image = document.querySelector("#img-change")
    if(e.target !== e.currentTarget && e.target.tagName === "H4"){
        document.querySelector('.dark-side').style.display = 'flex';
        image.setAttribute("src", e.target.id)
    }
    e.stopPropagation();
});


document.querySelector('.liked-item').addEventListener('click',
e =>{
    const image = document.querySelector("#img-change")
    if(e.target !== e.currentTarget && e.target.tagName === "H4"){
        document.querySelector('.dark-side').style.display = 'flex';
        image.setAttribute("src", e.target.id)
    }
    e.stopPropagation();
});


document.querySelector('.items').addEventListener('click',
e =>{
    const image = document.querySelector("#img-change")
    if(e.target !== e.currentTarget && e.target.tagName === "H3"){
        document.querySelector('.dark-side').style.display = 'flex';
        image.setAttribute("src", e.target.id)
    }
    e.stopPropagation();
});


document.querySelector('#close').addEventListener('click',
function(e){
    document.querySelector('.dark-side').style.display = 'none';
});


document.querySelector('#cart').addEventListener('click',
function(e){
    document.querySelector('.cart-dark-side').style.display = 'flex';
});


document.querySelector('.close-2').addEventListener('click',
function(e){
    document.querySelector('.cart-dark-side').style.display = 'none';
});

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