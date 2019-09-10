;(function(){
    "use strict";
   class Land{
        constructor(){
            this.oTel=document.querySelector(".land-b .land-b-l .tel");
            this.oTIn=document.querySelector(".land-b .land-b-l .tel input");
            this.opass=document.querySelector(".land-b .land-b-l .pass");
            this.opaIn=document.querySelector(".land-b .land-b-l .pass input");
            this.Osu=document.querySelector(".land-b .land-b-l .submit");
            this.Osua=document.querySelector(".land-b .land-b-l .submit a");
            // console.log(this.oTel);
            // console.log(this.oTIn);
            // console.log(this.opass);
            // console.log(this.opaIn);
            this.addEvent();
            this.getLocal();
            

        }
        addEvent(){
            var that = this;
            this.oTIn.addEventListener("focus",function(){
                that.oTIn.value = "";
            })
        }
        getLocal(){
            var that=this;
            this.account = localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : [];
            this.Osua.addEventListener("click",function(){
                that.username = that.oTIn.value;
                that.password = that.opaIn.value;
                var isHad = false;//定义一个开关变量
                var index = 0 ; //定义一个下标确定用户
                //遍历数组进行匹配
                for(var i =0;i<that.account.length;i++){
                    if(username==that.account[i].username){//有这个账号
                        isHad=true;
                        index=i;
                        }
                    }
                    if(isHad){//如果存在
                            if(that.password==that.account[index].password){
                            alert("登录成功");
                            }else{
                                alert("密码错误");
                             }
                    }else{//账号不存在或输入错误
                        alert('账号不存在或输入错误');
                    }

            })

        }


   }
new Land();
})();