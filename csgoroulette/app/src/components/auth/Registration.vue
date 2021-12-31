<template>
  <el-row class="form_wrapper" type="flex" justify="center" align="middle">
    <el-form
      class="pa-24 registration_form"
      ref="formRegistration"
      label-width="auto"
      :label-position="labelPosition"
      :model="formRegistration"
      :rules="rules"
    >
      <p class="title_form">Registration</p>
      <p class="pb-20 pt-8 subtitle">Please fill all required fields (with *)</p>
      <el-form-item label="Username" prop="name">
        <el-input v-model="formRegistration.name"/>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="formRegistration.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="formRegistration.password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Confirm password">
        <el-input type="password" v-model="confirm_password"/>
      </el-form-item>
      <el-form-item class="submit_container">
        <el-button
          type="primary"
          :disabled="isDisabledForm"
          @click="submitForm"
          >
            Submit
          </el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
import rulesValidator from '../../services/validation';

export default {
  data() {
    return {
      labelPosition: 'right',
      confirm_password: '',
      formRegistration: {
        name: '',
        password: '',
        email: ''
      },
      rules: rulesValidator.form,
      isDisabledForm: true,
    };
  },
  watch: {
    confirm_password(val) {
      this.isDisabledForm = val !== this.formRegistration.password ? true : false;
    }
  },
  methods: {
    submitForm() {
      this.$refs['formRegistration'].validate(async (valid) => {
        if (valid) {
          const result = await this.$store.dispatch('auth/createUser', this.formRegistration);
          if (result.data.msg === 'Success') {
            this.$router.push('/');
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.form_wrapper {
  height: 100%;
}
.title_form {
  font-size: 2rem;
}
.subtitle {
  color: #909399;
  font-size: 14px;
}
.registration_form {
  width: 30%;
  background-color: white;
  border-radius: 2%;
}
.submit_container {
  display: flex;
  justify-content: flex-end;
}
</style>