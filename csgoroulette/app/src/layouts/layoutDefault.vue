<template>
  <el-container v-loading.fullscreen.lock="isLoadingCategories">
    <el-header style="padding: 0px">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
      >
        <el-menu-item
          v-for="(item, index) in getCategories"
          :key="index"
          :index="(index+1).toString()"
        >
          {{ item.name }}   
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <category-list/>
    </el-main>
  </el-container>
</template>

<script>
import { listCategories } from '../mixins/categories.mixins';
import CategoryList from '../components/CategoryList.vue';

export default {
  name: 'layoutDefault',
  components: {
    CategoryList
  },
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
