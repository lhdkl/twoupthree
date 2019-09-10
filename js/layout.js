;(function(){
    "use strict";
    class List{
        constructor(){
            this.layout = document.querySelector("#layout");
            this.url="http://localhost/twoupthree/json/goods.json"
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
            var str="";
            var res=this.res;
            for(var i=0;i<res.length;i++){
                if(this.res[i].goodsId == this.layouts[this.layouts.length-1].id){
                    str+=`
                    <div class="layout-t">
                    <a href="#">首页</a> > <span class="layout-name">${this.res[i].name}</span>
                </div>
                <div class="goods">
                    <div class="goods-xx">
                        <div class="exzoom" id="exzoom">
                            <!--大图区域-->
                            <div class="exzoom_img_box" >
                                <ul class='exzoom_img_ul'>
                                    <li><img src="${this.res[i].imga}"/></li>
                                    <li><img src="${this.res[i].imgb}"/></li>
                                    <li><img src="${this.res[i].imgc}"/></li>
                                </ul>
                            </div>
                            <!--缩略图导航-->
                            <div class="exzoom_nav"></div>
                            <!--控制按钮-->
                            <p class="exzoom_btn">
                                <a href="javascript:void(0);" class="exzoom_prev_btn"> &lt; </a>
                                <a href="javascript:void(0);" class="exzoom_next_btn"> &gt; </a>
                            </p>
                        </div>
                        <div class="goods-xx-b">
                            <div class="num">商品编码：<span class="goodsId">${this.res[i].goodsId}</span></div>
                            <div class="shar">
                                <dl>
                                    <dt>
                                        <s></s>
                                        分享到
                                    </dt>
                                    <dd>
                                        <a href="#"><img src="../img/weib.gif"/></a>
                                        <a href="#"><img src="../img/qq.gif"/></a>
                                    </dd>
                                </dl>
                            </div>
                            <div class="shouc"><a href="#">收藏</a></div>
                        </div>
                    </div>
                    <div class="info">
                        <div class="goodsname">
                            <h1>${this.res[i].name}</h1>
                        </div>
                        <div class="sales">
                            <div class="sales-t">
                                <p>促销价</p>
                                <p>￥${this.res[i].price}<span>￥${this.res[i].oldprice}</span></p>
                                <p><a href="#">降价通知</a></p>
                            </div>
                            <div class="sales-c">
                                <dl>
                                    <dt><a href="#">手机购买</a></dt>
                                    <dd>
                                        <img src="../img/ewm.png" alt="">
                                    </dd>
                                </dl>    
                            </div>
                            <div class="sales-b">
                                <p><span>满减</span>限时专场任选4件99元 可累加</p>
                            </div>
                        </div>
                        <div class="buy">
                            <dl>
                                <dt>
                                    <input  type="number" value="1" id="num"  min="1" step="1">
                                </dt>
                                <dd>
                                    <div class="addcar"><a href="#"></a></div>
                                </dd>
                            </dl>
                        </div>
                        <div class="peisong">
                            <dl class="now">
                                <dt>
                                    <img src="../img/car.gif" />今夜达
                                </dt>
                                <dd>
                                    <s></s>
                                    <span>今夜达：上海市区外环内用户（部分区域除外，以结算页为准）在0:00-11:00下单，可选当日18:00-22:00送达。</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt> <img src="../img/show.gif" />冷链配</dt>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="goodsShow">
                    <div class="goodsnav">
                        <dl>
                            <dt>
                                <em>
                                    <a href="#" class="on">商品详情</a>
                                </em>
                                <em>
                                    <a href="#">服务保障</a>
                                </em>
                                <em>
                                    <a href="#">全部评论</a>
                                </em>
                            </dt>
                        </dl>
                    </div>
                    <div class="goodsxiangq">
                        <dl>
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
                        </dl>
                    </div>
                </div>
                    `
                }
            }
            this.layout.innerHTML=str; 
           
        }
    }
    new List()
    
})();