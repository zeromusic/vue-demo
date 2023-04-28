<template>
  <MyComponent></MyComponent>
  <RouterLink to="/">首页{{"\xa0\xa0"}}</RouterLink>
  <RouterLink to="/user">用户中心{{"\xa0\xa0"}}</RouterLink>
  <RouterLink to="/login">登录页面{{"\xa0\xa0"}}</RouterLink>
  <RouterLink to="/object">object页面{{"\xa0\xa0"}}</RouterLink>
  <!-- <RouterLink to="/shop">连锁店{{"\xa0\xa0"}}</RouterLink> -->
  <!-- <RouterLink to="/salesclerks">店员管理{{"\xa0\xa0"}}</RouterLink> -->
  <RouterLink to="/cart">连锁店信息{{"\xa0\xa0"}}</RouterLink>
  <!-- <RouterLink to="/admin">后台信息{{"\xa0\xa0"}}</RouterLink> -->
  <div>
    <RouterView name="Footer"></RouterView>
    <RouterView name="Header"></RouterView>
    <RouterView></RouterView>
  </div>
</template>

<script >
import { defineComponent } from "vue"
import MyComponent from "./components/MyComponent.vue";

export default defineComponent({ components: { MyComponent } });
</script>

<style lang="scss" scoped></style>
