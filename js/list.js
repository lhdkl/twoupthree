;(function(){
    "use strict";
    class List{
        constructor(){
            this.listcon = document.querySelector(".listcon");
            this.ul = document.querySelector(".listcon ul");
            this.url="http://localhost/twoupthree/json/goods.json"
            this.load();
            
            // console.log(this.listcon);
            // console.log(this.ul);
        }
        load(){
            var that=this;
            ajax({
                url:this.url,
                success:function(res){
                    that.res=JSON.parse(res);
                    console.log(that.res);
                    that.sregetlocal();
                    // that.display();
                }

            });
        }
        sregetlocal(){
            this.code=JSON.parse(localStorage.getItem("code")) || [];
            this.display();
        }
        display(){
            var str="";
            var res=this.res;
            for(var i=0;i<res.length;i++){
                var str1=this.res[i].name;
                // var str1="苹果";
                var str2=this.code[this.code.length-1].key;
                // console.log(str2);
                // console.log(str1)
                // console.log(str1==str2)
                // console.log(str1.indexOf(str2));
                if(str1.indexOf(str2)!=-1){
                    console.log(str1)
                        str+=`<li>
                        <div class="smallb">
                            <p> 
                                <a href="">
                                    <img src="${res[i].img}"/>
                                </a>
                            </p>  
                            <P class="tip">
                                    <a href="">
                                <font>${res[i].name}</font>
                                <span>${res[i].tip}</span>
                                </a>
                            </P>
                            <p class="price">
                                ￥${res[i].price}
                                <span>￥${res[i].oldprice}</span>
                            </p>
                            <p class="peis">
                                <span>冷链配</span>
                            </p>
                            <p class="btn"><a href="#"></a></p>
                        </div>
                    </li>`
                 }

            }
            this.ul.innerHTML=str; 
        }
    }
    new List()
})();