<template>
  <el-container v-loading.fullscreen.lock="isLoadingCategories">
    <el-header style="padding: 0px">
      <el-row class="menu_wrapper">
        <el-col :span="12">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            text-color="white"
            class="menu_wrapper"
            active-text-color="#FF4C29"
          >
            <el-menu-item
              v-for="(item, index) in getCategories"
              :key="index"
              :index="(index+1).toString()"
            >
              {{ item.name }}   
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col v-if="!isLoadingCategories" :span="12" class="header_controllers">
          <el-button class="mt-8 mr-12" plain @click="routeTo('login')">Logout</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      123
    </el-main>
  </el-container>
</template>

<script>
import { listCategories } from '../mixins/categories.mixins';

export default {
  name: 'layoutDefault',
  mixins: [listCategories],
  data: () => ({
    isLoadingCategories: false,
  }),
  mounted() {
    this.isLoadingCategories = this.getCategories.length ? false : true;
    this.getListCategories();
  },
  watch: {
    getCategories: {
      handler(val) {
        if (val.length) this.isLoadingCategories = false;
      }
    }
  }
}
</script>

<style lang="scss">
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: #161616 !important;
}
</style>

<style lang="scss" scoped>
.menu_wrapper {
  background-color: #161616;
  border: none;
}
.header_controllers {
  color: #FF4C29;
  display: flex;
  justify-content: flex-end;
}
</style>
