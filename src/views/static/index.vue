<template>
    <div v-bind:class="ok ? 'home' : 'index'">
      {{ product }}
      <div v-html="msgHtml"></div>
      <div v-text="msgHtml"></div>
      <button @click="btnTemple">字符串模板写法</button>
      <button @click="increate">number1增加+1</button>
      <button @click="btnDeep">深层次改变</button>
      <button @click="product.count++">改变商品数量+1</button>
    </div>
    <p>{{ count }}:{{ number1 }}</p>
    <p>商品总价：{{ product.total }}</p>
    <p>商品总价(定义属性)：{{ summ }}</p>
  </template>
  
  <script>
  
  /**
   * 对象析构
   * *const person={
      name:'admin',
      age:10,
      sex:'male',
      run:function(){
      console.log('run')
      }
    } 
  const{name,age,sex,run}=person  对象析构
   */
  
  import { storeToRefs } from 'pinia'
  import { defineComponent } from "vue"
  import { useUserStore } from '../../stores/user'
  export default defineComponent({
  
    /**  setup() {
       const store = userStore();
       console.log(store)
   
   
       return {
         store,
       }
     },*/
  
  
  
    setup() {
      const store = useUserStore();
      const { count } = storeToRefs(store);
      console.log(count)
  
      return {
        count,
      }
    },
    data() {
      return {
        msg: 'this is vue App',
        msgHtml: '<h3>this is v-html 指令</h3>',
        home: 'home',
        ok: true,
        number1: 1,//数量增加
        obj: {
          name: 'rose',
          children: {
            name: '22'
          }
        },
        product:{
          name:'book',
          price:99,
          count:10,
          total:0
        }
      }
    },
    computed:{
      //商品价格计算
      //简单数字计算
      summ(){
        this.product.total=this.product.price*this.product.count
        return this.product.total
      }
  
    },
    mounted(){
      this.increate()
      this.sum()
  
    },
    methods: {//声明方法
      btnTemple() {
        let str = 'home'
        let str1 = 'this is vue str temple' + str
        //let str1=`this is vue str temple ${str}`字符串模板写法
        console.log(str1)
      },
      increate() {
        this.number1++
      },
      btnDeep() {
        this.obj.children.age = 23
      },
      sum(){
        this.product.total=this.product.price*this.product.count
      }
    }
  
  });
  </script>
  
  <style lang="scss" scoped>
  .home {
    background-color: lightpink;
  }
  
  .index {
    background-color: red;
  }
  </style>
  
  