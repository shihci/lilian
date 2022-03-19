
    axios.get("./api/WorkData.json")
    .then(function(res){
        let allWs=res.data;
        //篩選方法
        function Work(value){
            let arr=allWs.filter(function(obj){
                if (value === 'allWs'){
                    return obj;
                }
                return obj.item ===value;
            })
            WorkItems(arr);
        }
        //點擊後進入篩選
        for(var i = 0; i < els.length; i++)
        {
        els[i].addEventListener("click",(e)=>{
            Work(e.target.getAttribute("name"));
            // for( let a = 0 ; a < els.length ; a++ ){//先清除所有active樣式
            //     els[a].classList.remove("active");
            // }
            btnNws();
            e.target.classList.add("active");
            // console.log(e.target.getAttribute("name"))
                    })
        }
        //預設全部篩選
        WorkItems(allWs);

        //清除按鈕樣式
        function btnNws(){
            for( let a = 0 ; a < els.length ; a++ ){//先清除所有active樣式
                els[a].classList.remove("active");
            }
                    
        }

        //抓取網頁的url比對
        let url1 =location.href;
        let temp1 =url1.split("?");
        
        for(let a=0;a<els.length;a++){
            if(els[a].getAttribute("data-cata")===temp1[1]){
                // console.log(temp1[1]);
                btnNws();
                els[a].classList.add("active")
                if(temp1[1]==="web"){
                    Work("網頁設計");
                    break;
                }else if(temp1[1]==="ui"){
                    Work("UI設計");
                    break;
                }else if(temp1[1]==="2D"){
                    Work("平面設計");
                    break;
                }else if(temp1[1]==="3D"){
                    Work("3D設計");
                    break;
                }else if(temp1[1]==="video"){
                    Work("影片設計");
                    break;
                }
                
                break;
            }
           
        }




 
    })
    .catch(function(error){
        
    })

    axios.get("./api/data.json")
    .then(function(res){
        let alls=res.data;
        //篩選方法
        function resouse(value){
            let arr=alls.filter(function(obj){
                if (value === 'allRs'){
                    return obj;
                }
                return obj.item ===value;
            })
            ResourceItems(arr);
        }
        //點擊後進入篩選
       
        for(var j = 0; j < els2.length; j++)
        {
        
        els2[j].addEventListener("click",(e)=>{
            resouse(e.target.getAttribute("name"));
            // for( let b = 0 ; b < els2.length ; b++ ){//先清除所有active樣式
            //     els2[b].classList.remove("active");
            // }
            btnNws2();
            e.target.classList.add("active");//加入被點擊後的樣式
            console.log(e.target.getAttribute("name"));
                    
            console.log(e.target);
            })         
            
        }

    
        //預設全部篩選
         ResourceItems(alls);

         //清除按鈕樣式
        function btnNws2(){
            for( let b = 0 ; b < els2.length ; b++ ){//先清除所有active樣式
                els2[b].classList.remove("active");
            }          
        }

         //抓取網頁的url比對,要調整
         let url2 =location.href;
         let temp2 =url2.split("?");
         console.log("test")
         for(let a=0;a<els2.length;a++){
             if(els2[a].getAttribute("data-cata")===temp2[1]){
                  console.log(temp2[1]);
                 btnNws2();
                 els2[a].classList.add("active")
                 if(temp2[1]==="picture"){
                    resouse("素材圖庫");
                     break;
                 }else if(temp2[1]==="color"){
                    resouse("配色推薦");
                     break;
                 }else if(temp2[1]==="font"){
                    resouse("字體設計");
                     break;
                 }else if(temp2[1]==="icon"){
                    resouse("icon設計");
                     break;
                 }
                 
                 break;
             }
             else{
                console.log(temp2);
             }
            
         }


 
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
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-2_10">
                    <div class="work_item" onclick="window.location.href='${item.webUrl}';return false">
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
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-2_10">
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

    