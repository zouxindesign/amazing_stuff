<template>
  <div>
    <searchhead />
    <div class="movie_play">
      <div>正在播放：{{current_play_film.name}}</div>
      <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://api.ipengfu.com/ckplayerx/m3u8.php?url=https://cdn.kuyunbo.club/20180501/1dRjYeUp/index.m3u8"
        width="100%" allowfullscreen="true" height="100%"></iframe>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="在线播放线路" name="first">
          <span class="check_play_route_button" style="border: 1px solid #d3d3d3">线路一</span>
          <span class="check_play_route_button" style="border: 1px solid #d3d3d3">线路一</span>
          <span class="check_play_route_button" style="border: 1px solid #d3d3d3">线路一</span>
        </el-tab-pane>
        <el-tab-pane label="电影下载地址" name="second">
          <div>百度云：</div>
          <div>saasas</div>
          <div>百度云：</div>
          <div>saasas</div>
        </el-tab-pane>
        <el-tab-pane label="剧情介绍" name="third">
          <span>
            《匿名者》剧情简介：故事将聚焦欧文饰演的侦探生活在没有隐私，满是匿名举报者的世界。那里的一切公开透明，任何行为都在政府窥探、监管之下。然而，当侦探发现塞弗里德饰演的年轻女子，在警察的监管下隐于无形后。侦探真正开始思考，政府的行径是否才真的是在犯罪。
          </span>
        </el-tab-pane>
      </el-tabs>

      <movieMenu />
  </div>
</template>

  
  <script>

  import {mapState} from 'vuex'
  import searchhead from '../header/header'
  import movieMenu from './Movie_menu.vue'
  export default {
    components:{
      searchhead,
      movieMenu,
    },

    data() {
        return {
          current_play_film:'',
          activeName: 'first'
        };
    },
    computed:{
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    created(){
      this.$store.dispatch('load_movie_menu_img')
    },

    methods:{
      get_current_movie(){
          this.movie_menu_img.data.find((item)=>{
            if(item.id=this.$route.query.playId){
              this.current_play_film = item
            }
          })
          console.log(this.current_play_film);
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .movie_play{
      width: 95%;
      height: 375px;
      margin: 15px auto;
    }
    .check_play_route_button{
      width: 115px;
      height: 50px;
      border-radius: 8px;
      line-height: 50px;
      margin: 15px;
      display: inline-block;
      text-align: center;
    }
    .el-tabs{
      margin: 60px 15px;
    }
    .el-tab-pane{
      text-align: left;
    }
  </style>
  