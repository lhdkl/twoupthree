;(function(){
    "use strict";
    class Car{
        constructor(){
            this.carUl=document.querySelector(".car-content-m-c ul");
            this.oBox=document.querySelector(".car-content-m-c")
            this.url="http://localhost/twoupthree/json/goods.json";
            this.load()
            this.addEvent();
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
                //    console.log(that.id)
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
        }
        display(){
            var str="";
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
                     }
                }
            }
            this.carUl.innerHTML=str;
        }
    }
    new Car()
})();