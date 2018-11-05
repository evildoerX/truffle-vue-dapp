<template>
  <div class='metamask-info'>
    <div flat v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</div>
    <div flat v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> Metamask not found</div>
    <div flat v-if="isInjected" > Network: {{ network }}</div>
    <div flat v-if="isInjected"> Account: {{ coinbase.substr(0, 6) + '...' }}</div>
    <div>Balance: {{ balance }} Wei // {{ ethBalance }} Eth</div>
  </div>
</template>

<script>
import {NETWORKS} from '../util/constants/network'
import {mapState} from 'vuex'
export default {
  name: 'metamask-state',
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    coinbase: state => state.web3.coinbase,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
    }
  })
}
</script>

<style scoped>
.metamask-info {
  text-align:center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>