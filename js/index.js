;(function(){
    "use strict";
    class Project{
        constructor(){
            this.Obox=document.querySelector(".main-t-fenlei dl dd .box");
            this.Oul=document.querySelector(".main-t-fenlei dl dd .box ul");
            this.nologin=document.querySelector(".header-top .header-top-l");
            this.login=document.querySelector(".header-top .header-top-login")
            this.em=document.querySelector(".header-top .header-top-login .f1 em");
            this.dp=document.querySelector(".header-top .header-top-login dd p");
            this.of2=document.querySelector(".header-top .header-top-login dd .f2");
            console.log(this.em)
            console.log(this.login)
            // console.log(this.Obox);
            // console.log(this.Oul);
            this.listul=document.querySelector("#nav .margin .nav-l .shuig ul")
            this.url="http://localhost/twoupthree/json/goods.json";
            this.listurl="http://localhost/twoupthree/json/item.json";
            this.getLocal();
            this.logins();
            this.listload();
            this.onload();
            this.addEvent();
        }
        getLocal(){
            this.account= JSON.parse(localStorage.getItem("account")) || [];
            console.log(this.account);
            
        }
        logins(){
           this.i=0;
           var on=this.account.some((val,index)=>{
                this.i=index;
                return val.onoff==1;
           })
           if(on){
            this.nologin.style.display="none";
            this.login.style.display="block";
            this.em.innerHTML=this.account[this.i].username;
            this.dp.innerHTML=this.account[this.i].username;
           }


        }
        addEvent(){
            var that=this;
            this.Obox.addEventListener("click",function(eve){
                var e=eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className=="btn"){
                    that.id=target.parentNode.parentNode.getAttribute("index");
                    console.log(that.id)
                    that.setLocal();
                }
                // console.log(target)
                if(target.className == "img" ||target.className == "font"||target.className == "span"){
                    that.id=target.parentNode.parentNode.parentNode.parentNode.getAttribute("index");
                    // console.log(that.id)
                    that.layoutSetLoca()
                }
                
            })
            that.of2.onclick=function(){
                that.account[that.i].onoff = 0;
                localStorage.setItem("account",JSON.stringify(this.account));
                that.nologin.style.display="block";
                that.login.style.display="none";
                that.em.innerHTML="";
                that.dp.innerHTML=""; 
            }

        }
        layoutSetLoca(){
            this.layouts=JSON.parse(localStorage.getItem("layouts")) || [];
            
                this.layouts.push({
                    id:this.id
                })
            localStorage.setItem("layouts",JSON.stringify(this.layouts))
        }
        setLocal(){
            // console.log(this.id);
            // 把数据存在数组中，先读本地缓存，看看里面有没有数据，判断第一次读还是不是第一次读
            this.cargo=JSON.parse(localStorage.getItem("cargo")) || [];
            if(this.cargo.length<1){
                this.cargo.push({
                    id:this.id,
                    num:1
                })
            }else{
                var onoff=true;
                for(var i=0;i<this.cargo.length;i++){
                    if(this.cargo[i].id==this.id){
                        this.cargo[i].num++
                        onoff=false;
                    }
                }
                if(onoff){
                    this.cargo.push({id:this.id,num:1})
                }
            }
            // console.log(this.cargo)
            localStorage.setItem("cargo",JSON.stringify(this.cargo))
        }
        listload(){
            var that=this;
            ajax({
                url:this.listurl,
                success:function(res){
                    // console.log(res);
                    that.res=JSON.parse(res);
                    that.listdisplay();
                }
            })
        }
        listdisplay(){
            var str="";
            var str0="";
            var str1="";
            var str2="";
            var res=this.res;
            // var arr=[];
            // for(var i=0;i<res.length;i++){
            //     i=i
                for(var j=0;j<res[0].value.length;j++){
                   str0+='<em><a href="#" title="">'+res[0].value[j]+'</a></em>'
                }
                for(var j=0;j<res[1].value.length;j++){
                    str1+='<em><a href="#" title="">'+res[1].value[j]+'</a></em>'
                }
                for(var j=0;j<res[2].value.length;j++){
                 str2+='<em><a href="#" title="">'+res[2].value[j]+'</a></em>'
                }
                str+=`
                    <li>
                        <div class="title">
                            <a href="#">${res[0].listname}</a>
                        </div>
                        <div class="list">${str0}</div>
                    </li>
                    <li>
                        <div class="title">
                            <a href="#">${res[1].listname}</a>
                        </div>
                        <div class="list">${str1}</div>
                    </li>
                    <li>
                        <div class="title">
                            <a href="#">${res[2].listname}</a>
                        </div>
                        <div class="list">${str2}</div>
                    </li>`
            // }
            this.listul.innerHTML=str
            // console.log(str)
        }
        onload(){
            var that=this;
            ajax({
                url:this.url,
                success:function(res){
                    // console.log(res);
                    that.res=JSON.parse(res);
                    that.display();
                }
            })
        }
        display(){
            var str="";
            var res=this.res;
            for(var i=0;i<res.length;i++){
                str+=`<li index="${res[i].goodsId}">
                        <div class="smallb">
                            <p class="simg"> 
                                <a  href="layout.html">
                                    <img src="${res[i].img}" class="img">
                                </a>
                            </p>
                            <P class="tip">
                                <a href="layout.html">
                                    <font class="font">${res[i].name}</font>
                                    <span class="span">${res[i].tip}</span>
                                    </a>
                            </P>
                            <p class="price">
                                ￥${res[i].price}
                                <span>￥${res[i].oldprice}</span>
                            </p>
                            <p class="btn"></p>
                        </div>
                    </li>`
            }
            this.Oul.innerHTML=str;
            // console.log(str)
        }


    }
 new Project();


})();