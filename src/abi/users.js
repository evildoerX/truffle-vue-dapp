import contract from 'truffle-contract'
import UserContract from'@contracts/Users.json'

const UserLogic = {

  contract: null,

  instance: null,

  init () {
    let self = this

    return new Promise( (resolve, reject) => {
      self.contract = contract(UserContract)
      self.contract.setProvider(window.web3.currentProvider)
      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
        console.log('Gay sex Users')
      }).catch(err => {
        console.log('Not gay sex Users')
        reject(err)
      })
    })
  },

  addUser (user,states) {
    let self = this
    console.log('What is Going on Users')
    return new Promise( (resolve, reject) => {
      self.instance.registerUser(
        user,
        states,
        { from: window.web3.eth.accounts[0] }
      ).then( tx => {
        console.log('Testing GAY SEX')
        resolve(tx)
      }).catch(err => {
        console.log('More Testing')
        reject(err)
      })
    })

  },


  getAllUsers () {
    let self = this
    let numOfUsers = 0
    return new Promise((resolve, reject) => {
      self.instance.totalUsers.call().then(
        (numUsers) => {
          numOfUsers = numUsers.toNumber()
        }
      )
    })
  },

  isRegistered () {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.isRegistered({ from: window.web3.eth.accounts[0] })
      .then( 
        tx => {
        console.log('Testing GAY SEX isRegistered', tx)
        resolve(tx)
      }).catch(err => {
        console.log('More Testing')
        reject(err)
      })
    })
  }

}


export default UserLogic