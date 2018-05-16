<template>
    <div class="movie_menu">
          <el-row>
              <el-col :span="6" v-for="i in movie_menu_img.data" >
                <div class="grid-content bg-purple">
                  <img :src="i.img_url">
                </div>
              </el-col>
          </el-row> 
    </div>
  
  </template>
  
  <script>
  
  import {mapState} from 'vuex'
  export default {
    created(){
      // console.log(this.$route.params)
      this.get_current_movie()
    },
    mounted(){
      this.get()
    },
    data() {
        return {
          // i:'s'
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
              return(console.log(item))
            }
          })
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .movie_menu{
      padding-top: 16px;
      overflow: auto;
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple img {
      width: 160px;
    }
  </style>
  