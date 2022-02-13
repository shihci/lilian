window.onload=function(){
    axios.get("./api/WorkData.json")
    .then(function(res){
        let allWs=res.data;
        //進入篩選
        function Work(value){
                    let arr=allWs.filter(function(obj){
                        if (value === 'allWs'){
                            return obj;
                        }
                        return obj.item ===value;
                    })
                    WorkItems(arr);
                }
        
                for(var i = 0; i < els.length; i++)
                {
                els[i].addEventListener("click",(e)=>{
                    Work(e.target.getAttribute("name"));
                    for( let a = 0 ; a < els.length ; a++ ){//先清除所有active樣式
                        els[a].classList.remove("active");
                    }
                    e.target.classList.add("active");
                    console.log(e.target.getAttribute("name"))
                            })
                }
                WorkItems(allWs);
 
    })
    .catch(function(error){
        
    })

    axios.get("./api/data.json")
    .then(function(res){
        let alls=res.data;
        //進入篩選
        function resouse(value){
            let arr=alls.filter(function(obj){
                if (value === 'allRs'){
                    return obj;
                }
                return obj.item ===value;
            })
            ResourceItems(arr);
        }
        //監聽按鈕的name
       
        for(var j = 0; j < els2.length; j++)
        {
        
        els2[j].addEventListener("click",(e)=>{
            resouse(e.target.getAttribute("name"));
            for( let b = 0 ; b < els2.length ; b++ ){//先清除所有active樣式
                els2[b].classList.remove("active");
            }
            e.target.classList.add("active");//加入被點擊後的樣式
            console.log(e.target.getAttribute("name"));
                    
            console.log(e.target);
            })
                    
            
        }

    
    
         ResourceItems(alls);
 
    })
    .catch(function(error){
        
    })
   
    let workContent=document.getElementById("workContent");
    let Ws_nav=document.getElementsByClassName("work_nav")[0];
    // let Ws_navItem=Array.from(Ws_nav.children);
    var els = document.getElementsByClassName("testWork");


    function WorkItems(resArr){
        let Work="";
        resArr.forEach((item) => { 
            Work+=`
            <div class="col-6 col-md-4 col-lg-3 col-2_10">
                    <div class="work_item" onclick="window.location.href='workPage1.html';return false">
                        <img src="img/work_pict/${item.pict_url}" alt="">
                        <div class="hover_inform" >
                            <div class="work_text">
                                <div>${item.item}</div>
                                <div>${item.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
                ` 
        });
        workContent.innerHTML=Work;
    }



    let resourceContent=document.getElementById("resourceContent");
    let Rs_nav=document.getElementsByClassName("resource_nav")[0];
    let els2=document.getElementsByClassName("testResource");
 
   
    
    // testResource.addEventListener("click",(e)=>{
    //     testResource.classList.remove("active");
    //     e.target.classList.add("active");
    // })
    // let Rs_navItem=Array.from(Rs_nav.children);
    //Resource畫面渲染
    function ResourceItems(resArr){
        let resource="";
        resArr.forEach((item) => { 
            resource+=`
            <div class="col-6 col-md-4 col-lg-3 col-2_10">
                    <div class="resource_item" onclick="window.open('${item.url}')";return false">
                        <img src="img/rs_pict/${item.pict_url}" alt="">
                        <div class="hover_resource" >
                            <div class="resource_text">
                                <div class="rs_t1">${item.name}</div>
                                <div class="rs_t2">${item.subtitle}</div>
                                <p class="rs_p">${item.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ` 
        });
        resourceContent.innerHTML=resource;
    }
}