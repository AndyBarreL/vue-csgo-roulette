export default {
  form: {
    name: [
      { required: true, message: 'Please input  username', trigger: 'blur' },
      { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
    ],
    email: [
      { required: true, message: 'Please input email', trigger: 'blur' },
    ],
    password: [
      { required: true, message: 'Please input password', trigger: 'blur' },
    ]
  }
}