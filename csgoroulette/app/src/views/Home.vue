<template>
  <el-container>
    <el-main>
      <el-row gutter="10">
        <el-col :span="24">
          <el-col :span="11" v-for="(item, index) in getCategories" :key="index" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px;">
                <span>{{ item.name }}</span>
              </div>
            </el-card>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { listCategories } from '../mixins/categories';

export default {
  name: 'Home',
  mixins: [listCategories],
  mounted() {
    this.getListCategories();
  }
}
</script>
