document.getElementById("product_menu_hover").addEventListener("click",function(){
    document.querySelector(".products_menu").style.display="block";
})


let navbtn = document.getElementById("navmenuline");
let slider = document.querySelector(".navslider");

navbtn.addEventListener("click",()=>{
    if(navbtn.style.display="block"){
        slider.classList.add("navsliderzero");
    }
})





