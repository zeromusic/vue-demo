<template>
    <div class="cart">购物车</div>
    <div class="products">
        <div class="product" v-for="item in products" :key="item.id">
            <div class="name">
                <el-checkbox :label="item.name" size="small" @change="$event =>selectProducts(item.id,$event)"/>
            </div>
            <div class="bars">
                <span class="price">¥{{item.price}}</span>
                <span class="count"><el-input-number :min="min" v-model="item.count" size="small" @change="$event =>selectcount(item.id,$event)"/></span>
            </div>
        </div>
        <div class="total">
            <span>合计：¥{{total}}</span><button>购买</button>
        </div>
    </div>
</template>
<script>
import {defineComponent } from "vue"
export default defineComponent({
    data(){
        return{
            products:[
                {id:1001,name:"海尔立式热水器",price:1849,count:1,sygcount:0,ison:0},
                {id:1002,name:"Vue核心技术解析",price:43,count:1,sygcount:0,ison:0},
            ],
            total:0,
            min:1
        }
    },
    methods:{
        selectProducts(id,event){
            if(event){
                this.products.forEach((p)=>{
                    if(p.id===id){
                        this.total+=p.price*p.count
                        p.sygcount=p.count
                        p.ison=1;
                    }
                })
            }
            else{
                this.products.forEach((p)=>{
                    if(p.id===id){
                        this.total-=p.price*p.count
                        p.sygcount=p.count
                        p.ison=0;
                    }
                })
            }
        },
        selectcount(id,event){
            if(event){
                this.products.forEach((p)=>{
                    if(p.id===id && p.ison==1){
                        if(p.count>p.sygcount){
                            this.total+=p.price
                            p.sygcount=p.count
                        }
                        if(p.count<p.sygcount){
                            this.total-=p.price
                            p.sygcount=p.count
                        }
                    }
                })
            }
        }
    }
});
</script>
<style lang="scss" scoped>
.product{
    display:flex;
    flex-direction:column;
    margin:20px 10px;
    .name{
        font-size:16px;
        font-weight:bold;
    }
    .bars{
        display:flex;
        justify-content:space-between;
        height:35px;
        align-items:center;
        margin-top:10px;
        .price{
            color:red;

        }
    }
}
.total{
    display:flex;
    margin:20px 10px 0 10px;
    justify-content:space-between;
    align-items:center;
    height:40px;

}
</style>