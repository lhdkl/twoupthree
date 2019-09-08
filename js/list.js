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
                    // console.log(res);
                    that.res=JSON.parse(res);
                    console.log(that.res);
                    that.display();
                }

            });
        }
        display(){
            var str="";
            var res=this.res;
            for(var i=0;i<res.length;i++){
                str+=`<li>
                <div class="smallb">
                    <p> 
                        <a href="../html/layout.html">
                            <img src="${res[i].img}"/>
                        </a>
                    </p>  
                    <P class="tip"><a href="../html/layout.html"><font>${res[i].name}</font><span>${res[i].tip}</span></a></P>
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
            this.ul.innerHTML=str; 
            console.log(this.ul)
        }
    }
    new List()
})();