<template>
    <div class="movie_play">

     <iframe scrolling="no" allowtransparency="true" frameborder="0" 
     src="https://api.ipengfu.com/ckplayerx/m3u8.php?url=https://cdn.kuyunbo.club/20180501/1dRjYeUp/index.m3u8"
      width="100%" allowfullscreen="true" height="100%"></iframe>
  
    </div>

  </template>
  
  <script>

  import {mapState} from 'vuex'
  export default {
    components:{
    },
    created(){
      console.log(this.$route.params)
      this.get_current_movie()
    },
    mounted(){
      this.get()
    },
    data() {
        return {
        };
      },
    computed:{
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    mounted(){
      this.$store.dispatch('load_movie_menu_img')
    },
    methods:{
      get_current_movie(){
          this.movie_menu_img.data.find((item)=>{
            if(item.id=this.$route.params.playId){
              this.playerOptions.src= item.play_url;
              console.log(item.play_url)
            }
          })
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .movie_play{
      width: 100%;
      height: 375px
    }
  </style>
  