<template>
    <div class="movie_menu">

        <div id="play_box">
            <div id="player">
              <iframe width="100%" height="100%" src="https://api.ipengfu.com/ckplayerx/m3u8.php?url=https://135zyv3.xw0371.com/20180513/btzs9TEh/index.m3u8" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
          </div>
            </div>
      </div>
  
  </template>
  
  <script>

  import {mapState} from 'vuex'
  export default {
    components:{
    },
    created(){
      // console.log(this.$route.params)
      // this.get_current_movie()
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
      // get_current_movie(){
      //     this.movie_menu_img.data.find((item)=>{
      //       if(item.id=this.$route.params.playId){
      //         this.playerOptions.src= item.play_url;
      //         console.log(item.play_url)
      //       }
      //     })
      // }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    #play_box {
    overflow: hidden;
    }
    #player {
    width: 100%;
    float: left;
}
  </style>
  