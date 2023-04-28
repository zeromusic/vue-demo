<template>
    <el-menu
        default-active="2" 
        router class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>智能排课管理平台</span>
          </template>
          <el-menu-item-group title="管理中心">
            <el-menu-item index="/admin">首页</el-menu-item>
            <el-menu-item index="/admin/info">管理员信息</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="安全中心">
            <el-menu-item index="/admin/changepassword">修改密码</el-menu-item>
            <el-menu-item index="/admin/logout">安全登出</el-menu-item>
            <el-menu-item index="/admin/forgetpassword">忘记密码</el-menu-item>  
        </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
</template>

<script>
import { defineComponent } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
export default defineComponent({
    methods:{
        handleOpen(key,keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key,keyPath) {
            console.log(key, keyPath)
        }
    }
});
</script>
<style lang="scss" scoped></style>