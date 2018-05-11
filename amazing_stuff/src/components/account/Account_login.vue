<template>
  <div class="hello">
        {{$store.state.account.account_info.age}}
  </div>
</template>

<script>

export default {
  data () {
      return{
          a:""
      }
  },
created(){
    this.get()
},
  methods:{
      get:()=>{
          console.log($store.state)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
