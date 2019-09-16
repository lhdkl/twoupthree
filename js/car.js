;(function(){
    "use strict";
    class Car{
        constructor(){
            this.carUl=document.querySelector(".car-content-m-c ul");
            this.oBox=document.querySelector(".car-content-m-c");
            this.oinput=document.querySelector(".car-content-m-c ul input");
            this.of2=document.querySelector(".header-top .header-top-login dd .f2");
            this.allnum=document.querySelector(".car-content-b .b-l span");
            this.allprice=document.querySelector(".car-content-b .b-r span")
            this.url="http://localhost/twoupthree/json/goods.json";
            this.load();
            this.addEvent();
           
        }
        getLocal(){
            this.account= JSON.parse(localStorage.getItem("account")) || [];
            // console.log(this.account);
            
        }
        logins(){
            console.log(this.account)
           this.i=0;
           var on=this.account.some((val,index)=>{
                this.i=index;
                return val.onoff==1;
           })
           if(on){
            this.em.innerHTML=this.account[this.i].username;
            this.dp.innerHTML=this.account[this.i].username;
           }

        }
        addEvent(){
            var that=this;
            this.oBox.addEventListener("change",function(eve){
                var e=eve || window.event;
                var target=e.target || e.srcElement;
                if(target.className=="num"){
                   that.value = target.value;
                   that.id=target.parentNode.getAttribute("index");
                //    console.log(that.id)
                 that.setLocal()
                }
            }) 

            this.oBox.addEventListener("click",function(eve){
                var e=eve || window.event;
                var target=e.target || e.srcElement;
                if(target.className=="caozuo"){
                   that.id=target.parentNode.getAttribute("index");
                   console.log(that.id)
                    that.deletLocal()
                }
            }) 

        }
        deletLocal(){
            for(var i=0;i<this.cargo.length;i++){
               
                if( this.id == this.cargo[i].id){
                    console.log(this.id)  
                    console.log(i)
                    this.cargo.splice(i,1);
                }  
            }
            console.log(this.cargo);
            localStorage.setItem("cargo",JSON.stringify(this.cargo))
            this.getLocal()
        }
        load(){
            var that=this;
            ajax({
                url:this.url,
                success:function(res){
                    that.res=JSON.parse(res);
                    // console.log(that.res);
                    that.getLocal();
                }

            })
        }
        
        getLocal(){
            this.cargo = localStorage.getItem("cargo") ? JSON.parse(localStorage.getItem("cargo")) : [];
            // console.log(this.cargo);
            this.display();
        } 
        setLocal(){
            for(var i=0;i<this.cargo.length;i++){
                // console.log(this.value)
                // console.log(this.id)  
                if( this.id == this.cargo[i].id){
                    this.cargo[i].num = this.value; 
                } 
                    
            }
            localStorage.setItem("cargo",JSON.stringify(this.cargo));
            this.display();   
        }
        display(){
            var str="";
           var allnum=0;
           var allprice=0;
            for(var i=0;i<this.res.length;i++){
                for(var j=0;j<this.cargo.length;j++){
                    if(this.res[i].goodsId==this.cargo[j].id){
                        str+=`  <li index="${this.res[i].goodsId}">
                                    <input type="checkbox"/>
                                    <div class="img"><a href="#"><img src="${this.res[i].img}"/></a></div>
                                    <div class="name"><a href="#">${this.res[i].name}</a></div>
                                    <div class="price">${this.res[i].price}</div>
                                    <input type="number"  class="num" value="${this.cargo[j].num}"/>
                                    <div class="allpri">${this.cargo[j].num*this.res[i].price}</div>
                                    <div class="caozuo">
                                        删除
                                    </div>
                                </li>`
                        allnum+=parseInt(this.cargo[j].num);
                        allprice+=parseInt(this.cargo[j].num*this.res[i].price);
                     }
                }
            }
            this.carUl.innerHTML=str;
            this.allnum.innerHTML=allnum;
            this.allprice.innerHTML=allprice
        }
    }
    new Car()
})();