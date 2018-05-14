<template>
  <div class="hello">
        {{$store.state.account.account_username}}
        <button @click='click1'>click</button>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import store from './account_store'

export default {
  data () {
      return{
        //   show:""
      }
  },
// computed: {
// ...mapState({
//     show: state => state.show
//   }),
// },
// created(){
//     this.get()
// },
  methods:{
      click1() {
          console.log(store.state.account_username)
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
