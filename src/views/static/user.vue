<template>
  <!--//父子通信-->
  <User @customEvent="customEvent" @customEvent1="customEvent1" :salesclerks="salesclerks">
    <template #[header]>
      头部信息
    </template>
    用户列表{{ id }}
    </User>
</template>
  <script>
  import { defineComponent } from "vue"
  import User from "../../components/User.vue";
  export default defineComponent({
    props:['id'],
    data(){
      return{
        salesclerks: [
            { id: 1, name: '刘一', prefession: '店长', shop: 'office咖啡馆' },
            { id: 2, name: '谢邀', prefession: '副店长', shop: 'office咖啡馆' },
            { id: 3, name: '吴畏', prefession: '店员', shop: 'office咖啡馆' },
            { id: 4, name: '张铁', prefession: '店员', shop: 'office咖啡馆' },
            { id: 5, name: '周泛', prefession: '店员', shop: 'office咖啡馆' },
            { id: 6, name: '罗泊', prefession: '店员', shop: 'office咖啡馆' }
          ],
          header:'header1'
      }
    },
    mounted(){
      const {tittle,Auth} = this.$route.meta; //路由元信息
      console.log(tittle,Auth)
    },
    components:{
      //局部注册
      User
    },
    methods:{
      customEvent(){
        console.log('customEvent');
      },
      customEvent1(id){
        console.log('cutomEvent1',id);
      }
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .active {
    background-color: red;
  }
  
  .hasError {
    color: red;
  }
  </style>