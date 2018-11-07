<template>
  <div>
    <Form ref="formInline" :model="form" inline>
      <FormItem prop="user">
          <Input type="text" v-model="form.name" placeholder="Username"></Input>
      </FormItem>
      <FormItem prop="user">
          <Input type="text" v-model="form.states" placeholder="Userstates"></Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="addUser">Add User</Button>
      </FormItem>
    </Form>
    <div>{{textinfo}}</div>
  </div>
</template>
<script>
import UsersLogic from '../abi/users'
export default {
  data () {
    return {
      form:{
        name: '',
        states: ''
      },
      userList:[],
      textinfo: ''
    }
  },
  beforeCreate () {
    UsersLogic.init().then(() => {
      this.allUsers()
    })
    .catch(err => {
      console.log(err)
      console.log('Test')
    })
  },

  methods: {
    addUser () {
      UsersLogic.isRegistered().then(
        tx => {
          if(!tx) {
            UsersLogic.addUser(this.form.name,this.form.states).then(tx => {
              console.log('add users', tx)
            }).then(
              () => {
              // this.returnAllTodos()
            })
            .catch(err => {
              console.log(err)
            }
          )
          } else {
            this.textinfo = "账号已存在"
          }
        }
      )
      
    },
    allUsers () {
      // UsersLogic.isRegistered().then(
      //   console.log('11111')
      // )
      // UsersLogic.getAllUsers(window.web3.eth.accounts[0]).then(
      //   (userList) => {
      //     console.log('get all userList')
      //     console.log(userList)
      //     this.userList = userList
      //   }
      // )
    }
  }
}

</script>