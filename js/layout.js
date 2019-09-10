;(function(){
    "use strict";
    class List{
        constructor(){
            this.layout = document.querySelector("#layout");
            this.url="http://localhost/twoupthree/json/goods.json";
            this.osr=document.querySelector(".exzoom_img_ul li img ")
            console.log(this.osr)
            this.load();
           
            console.log(this.layout)
        }
        load(){
            var that=this;
            ajax({
                url:this.url,
                success:function(res){
                    console.log(res);
                    that.res=JSON.parse(res);
                    console.log(that.res);
                    that.layoutgetLocal();
                }
            });
        }
        layoutgetLocal(){
            this.layouts = localStorage.getItem("layouts") ? JSON.parse(localStorage.getItem("layouts")):[];
            this.display()
        }
        display(){
            
            var res=this.res;
            for(var i=0;i<res.length;i++){
                if(this.res[i].goodsId == this.layouts[this.layouts.length-1].id){
                   var str1=`<a href="#">首页</a>  <span class="layout-name">${this.res[i].name}</span>`;
                   var str2=this.res[i].img
                    var str3=`
                            <div class="num">商品编码：<span class="goodsId">${this.res[i].goodsId}</span></div>`
                    var str4=`
                            <h1>${this.res[i].name}</h1>`
                    var str5=`   
                                <p>促销价</p>
                                <p>￥${this.res[i].price}<span>￥${this.res[i].oldprice}</span></p>
                                <p><a href="#">降价通知</a></p>`

                    var str6=`<dl>
                                <dt><img src="../img/feature.gif"></dt>
                                <dd>
                                    <img src="${this.res[i].img1}"/>
                                    <img src="${this.res[i].img2}"/>
                                    <img src="${this.res[i].img3}"/>
                                    <img src="${this.res[i].img4}"/>
                                </dd>
                             </dl>
                             <dl>
                                    <dt><img src="../img/service.png"></dt>
                                    <dd>
                                        <img src="${this.res[i].img5}"/>
                                        <img src="${this.res[i].img6}"/>
                                        <img src="${this.res[i].img7}"/>
                                    </dd>  
                             </dl>
                             <dl>
                                    <dd><img src="../img/app.jpg"></dd>
                            </dl>`
                            this.osr.src=this.res[i].img;
                }
               
                
            }
            $(".layout-t").html(str1);
            $(".goods-xx-b").html(str3);
            $(".info .goodsname").html(str4);
            $(".sales .sales-t").html(str5);
            $(".goodsxiangq").html(str6);
          


           
        }
    }
    new List();
    
})();