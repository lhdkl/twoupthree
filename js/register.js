;(function(){
    "use strict";
    class REgister{
        constructor(){
            this.oTel=document.querySelector(".land-b .land-b-l .tel");
            this.oInput=document.querySelector(".land-b .land-b-l .tel input");
            this.os=document.querySelector(".land-b .land-b-l .tel s");
            this.oPass=document.querySelector(".land-b .land-b-l .pass");
            this.opInput=document.querySelector(".land-b .land-b-l .pass input");
            this.oPs=document.querySelector(".land-b .land-b-l .pass s");
            this.orp=document.querySelector(".land-b .land-b-l .repass");
            this.orpInput=document.querySelector(".land-b .land-b-l .repass input");
            this.orps=document.querySelector(".land-b .land-b-l .repass s");
            this.och=document.querySelector(".land-b .land-b-l .choose");
            this.ochIn=document.querySelector(".land-b .land-b-l .choose input");
            this.sub=document.querySelector(".land-b .land-b-l .submit")
            this.suba=document.querySelector(".land-b .land-b-l .submit a")
            this.cout=0;
            this.onoff=true;
            this.addEvent();
            //  console.log(this.oPass);
        }
        addEvent(){
            var that = this;
            this.oInput.addEventListener("focus",function(){
                that.oInput.value = ""
            })
            this.oInput.addEventListener("blur",function(){
                that.value = that.oInput.value ;
                that.os.style.backgroundPosition="0px -102px"
                $(".tel .telerro").css("display","none")
                // console.log(that.value)
                var agt=/^1(3|5|7|8|9){1}\d{9}$/;
                if(agt.test(that.value)){
                    that.cout+=1;
                    console.log(that.cout)
                }else{
                    that.os.style.backgroundPosition="0px -137px"
                $(".tel .telerro").css("display","block")
                }
            })
            this.opInput.addEventListener("blur",function(){
                that.opvalue=that.opInput.value;
                var agt=/^\w{8,16}/;
                if(agt.test(that.opvalue)){
                    that.cout+=1;
                    that.oPs.style.backgroundPosition="0px -102px"
                    $(".pass .passerro").css("display","none");
                    // console.log(that.cout)
                }else{
                    that.oPs.style.backgroundPosition="0px -137px"
                    $(".pass .passerro").css("display","block");
                }
               
            })
            this.orpInput.addEventListener("blur",function(){ 
                that.orpvalue =that.orpInput.value;
                if(that.opvalue == that.orpvalue){
                    that.orps.style.backgroundPosition="0px -102px";
                    $(".repass .repasserro").css("display","none");
                    that.cout+=1;
                    console.log(that.cout)
                }else{
                     that.orps.style.backgroundPosition="0px -137px";
                     $(".repass .repasserro").css("display","block");
                }
            })
            
            this.ochIn.addEventListener("click",function(){
                that.pand(); 
            })
            this.suba.addEventListener("click",function(){
                that.load();
            })
               
        }
        pand(){
            if(this.onoff){
                this.suba.style.background="#FF6900";
                this.onoff=false;
               this.cout+=1;
            }else{
                this.suba.style.background="#BBB";
                this.onoff=true;}
                console.log(this.onoff);
        }
      load(){
        console.log(this.cout)
            if(this.cout==4){
                this.setlocal()
            } 
      }
    setlocal(){
        this.account=JSON.parse(localStorage.getItem("account")) || [];
        console.log(this.account)
        this.username = this.oInput.value;
        this.password = this.opInput.value;
        //遍历数组进行匹配
        for(var i =0;i<this.account.length;i++){
            //判断是否有相同账号
            if(this.username==this.account[i].username){
            alert("该手机号已注册");
            return;
        }
        }
        //创建对象
       this.obj = {username:this.username,password:this.password}
       this.account.push(this.obj);
       localStorage.setItem("account",JSON.stringify(this.account))
        this.suba.href="index.html"
      } 
      
    }
    new  REgister()
})();