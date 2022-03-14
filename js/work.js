0
    //Swiper
    const swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    //Swiper 幻燈片執行後監聽（針對滾到下一張的喚燈片觸發(目前應需求取消關閉))
    //   swiper.on('slideChangeTransitionEnd', function () {
    //     //要將swiper-slide-active放在滾動後執行監聽，class位置重新監聽其位置並進行更新
    //     const act_color = document.getElementsByClassName("swiper-slide-active")[0];
    //     actColor(act_color);
    //   });


    // const title_text =document.getElementsByClassName("title_text")[0];


    // function actColor(arr){
    //   if (arr.classList.contains("act-color")){
    //     title_text.classList.remove("has_active2");
    //         title_text.classList.add("has_active");
            
    //     }
    //     else if(arr.classList.contains("act-color2")){
    //       title_text.classList.remove("has_active");
    //       title_text.classList.add("has_active2");
    //     }
    //     else{
    //         title_text.classList.remove("has_active");
    //         title_text.classList.remove("has_active2");
            
    //     }
    // }