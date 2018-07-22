/*
let car =document.querySelector('.head_car')
car.onmouseenter=function(){
    this.querySelector('#head_car-box').style.display='block';
}
car.onmouseleave=function(){
    this.querySelector('#head_car-box').style.display='none';
}


let banner =document.querySelectorAll('.banner-li')
for (let  i = 0; i <banner.length; i++) {
    banner[i].onmouseenter=function(){
        this.querySelector('#banner-nav').style.display='block';
    }
    banner[i].onmouseleave=function(){
        this.querySelector('#banner-nav').style.display='none';
    }
}*/
    //购物车
    let car=document.getElementsByClassName("head_car")[0]
    let carbox=document.getElementsByClassName("head_car-box")[0]
    console.log(carbox);
    car.onmouseenter=function () {
        carbox.style.height="98px";
        carbox.style.boxShadow="0 3px 1px 1px rgba(0,0,0,0.4)";
    }
    car.onmouseleave=function () {
        carbox.style.height=0;
        carbox.style.boxShadow="none";
    }



    //侧导航
    let banner=document.getElementById("banner");
    let lis=banner.getElementsByTagName("li");
    let bannerNav=document.getElementsByClassName("bannerNav");
    console.log(bannerNav);
    console.log(lis);
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            bannerNav[i].style.display="block";
            lis[i].className="banner-li banner_nav-li";
        }
        lis[i].onmouseleave=function () {
            bannerNav[i].style.display="none";
            lis[i].className="banner-li";
        }
    }




    //家电
    function f(name) {
        let span=name.getElementsByTagName("span")
        let jiadianhe=name.getElementsByClassName("jiadianhe")
        for(let i=0;i<span.length;i++){
            span[i].onmouseenter=function () {
                for(let j=0;j<span.length;j++){
                    jiadianhe[j].style.display="none";
                    span[j].className=("none");
                }
                jiadianhe[i].style.display="block";
                span[i].className=("jiadiann-span")
            }
        }
    }
    let jiadian=document.getElementById("jiadian");
    let dapei=document.getElementById("dapei");
    let peijian=document.getElementById("peijian");
    let zhoubian=document.getElementById("zhoubian");
    f(jiadian);
    f(dapei);
    f(peijian);
    f(zhoubian);


    //banner图上
    let nav=document.getElementById("nav");
    // let navWenzi=nav.getElementsByClassName("nav-wenzi")
    let spann=nav.getElementsByClassName("nav_wenzi-span")
    let navHover=nav.getElementsByClassName("nav-hover")
    console.log(spann);
    console.log(navHover);
    for(let i=0;i<spann.length-2;i++){
        for(let j=0;j<spann.length-2;j++){
            // navHover[j].style.display="none";
            navHover[j].style.height="0";
        }
        spann[i].onmouseenter=function () {
            // navHover[i].style.display="block";
            navHover[i].style.height="228px";

        }
        spann[i].onmouseleave=function () {
            // navHover[i].style.display="none";
            navHover[i].style.height="0";

        }
    }
