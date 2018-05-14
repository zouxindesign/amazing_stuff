<template>
  <div class="hello">
        {{$store.state.account.account_username}}
        <button @click='click1'>click</button>
  </div>

</template>

<script>
import {mapState} from 'vuex'
// import store from './account_store'

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
          // console.log(store.state.account_username)
          var GameScore = Bmob.Object.extend("GameScore");
            var gameScore = new GameScore();
            gameScore.set("score", 1337);
            gameScore.save(null, {
              success: function(object) {
                alert("create object success, object id:"+object.id);
              },
              error: function(model, error) {
                alert("create object fail");
              }
        });
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
