    
window.onload=function(){
    const goTop =document.getElementById("goTop")
    function offTopFn(){
        if(goTop){
            console.log("1")
            goTop.classList.remove("goTop");
        }
    }
    function goTopFn(){
        if(goTop){
            goTop.classList.add("goTop");
        }
    }

    //header-box執行
    
    const bodyClass = document.getElementById("headerBox");
    
    let lastScrollY = 0;
	console.log(bodyClass);
    // const leftMenu =document.getElementsByClassName("leftMenu")[0];
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        // 判斷是向上捲動，而且捲軸超過 100px
        console.log("滑動")
        if (window.scrollY < 100){
            bodyClass.classList.remove('hideup');
            offTopFn();
        
        }
        else if (st < lastScrollY) {

            bodyClass.classList.remove('hideup');
            offTopFn();
            
        } else {
            bodyClass.classList.add('hideup');
            goTopFn();
        }
        lastScrollY = st;
    });


//選單下拉

    
     const menuBtn = document.getElementById("menu");
     const closed =document.getElementById("closed");
    // const menu=document.getElementById("menu_area")

    if(menuBtn){
            menuBtn.addEventListener("click",()=>{
            document.getElementById("menu_area").style.bottom="0";
            document.getElementById("menu_area").style.height="100%";
        });
    }
    
    if(closed){
        closed.addEventListener("click",()=>{
            document.getElementById("menu_area").style.bottom="100%";  
            });
    }
    
       
}
    
    // function clickfn(){
    //     document.getElementById("menu_area").style.bottom="0";
    //     document.getElementById("menu_area").style.height="100%";
    // }

    
    // function closefn(){
    //     document.getElementById("menu_area").style.bottom="100%";
    // }

    let navDoM =document.getElementById("nav");
    function getNav(){
        return axios.get('./nav.html');
    }

    let footerDoM =document.getElementById("footer");
    function getFooter(){
        return axios.get('./footer.html')
    }

    axios.all([getNav(),getFooter()]).then(axios.spread(function(Nav1,Footer1){
        navDoM.innerHTML = Nav1.data;
        if(footerDoM){
            footerDoM.innerHTML = Footer1.data
        }
        
    }))
    
 


    

