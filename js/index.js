
    const menuBtn = document.getElementById("menu");
    const closed =document.getElementById("closed")
    const menu=document.getElementById("menu_area");

    menuBtn.addEventListener("click",()=>{
        menu.style.bottom="0";
        menu.style.height="100%";
    });
    closed.addEventListener("click",()=>{
        menu.style.bottom="100%";
        
        
    });




