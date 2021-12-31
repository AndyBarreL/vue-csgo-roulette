<template>
  <el-container class="auth_wrapper">
    <el-header class="pa-12 auth_header">
      <el-row>
        <el-col :span="12">
          <p class="logo">playBit</p>
        </el-col>
        <el-col :span="12" class="header_controllers">
          <el-button plain @click="routeTo('login')">Login</el-button>
          <el-button plain @click="routeTo('registration')">Registration</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'auth-layout',
  methods: {
    routeTo(page) {
      if (this.$router.name === page) return

      this.$router.push(page);
    }
  },
}
</script>

<style lang="scss" scoped>
.auth_wrapper {
  height: 100%;
}
.auth_header {
  text-align: left;
}
.logo {
  font-size: 24px;
  color: #FF4C29;
}
.header_controllers {
  color: #FF4C29;
  display: flex;
  justify-content: flex-end;
}
</style>