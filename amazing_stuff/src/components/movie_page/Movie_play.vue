<template>
  <div>
    <searchhead />
    <div class="movie_play" >
      <div class="play_now_font">正在播放：{{current_play_film.name}}</div>
      <iframe  ref= "myiframe" id="myiframe" border="0" :src="movie_url" width="100%" height="100%" marginwidth="0" framespacing="0" marginheight="0" frameborder="0"
        scrolling="no" vspale="0" noresize="" allowfullscreen="true" allowtransparency="true"></iframe>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在线播放线路" name="first">
        <span class="check_play_route_button" v-for="item in play_url_ids" style="border: 1px solid #d3d3d3" @click="check_play_url(item.url)">
          <span v-if="item.type == 'movie'">线路 ：{{item.num}}</span>
          <span v-if="item.type == 'tv' || item.type == 'show'">第{{item.num}}集</span>
        </span>
      </el-tab-pane>


      <el-tab-pane label="电影下载地址" name="second">
        <div>百度云：</div>

        <a target="_blank" :href="play_url_ids[0].baiduyun.url">
          <span class="check_play_route_button baiduyun_button" style="border: 1px solid #d3d3d3;">密码：{{play_url_ids[0].baiduyun.code}}</span>
        </a>
      </el-tab-pane>

      <el-tab-pane label="剧情介绍" name="third">
        <span>
          {{current_play_film.introduce}}
        </span>
      </el-tab-pane>
    </el-tabs>

    <div v-show="current_play_film.type =='movie'">
      <movieMenu />
    </div>

    <div v-show="current_play_film.type =='tv'">
      <tvMenu />
    </div>

    <div v-show="current_play_film.type =='show'">
      <showMenu />
    </div>
  </div>
</template>


<script>
  import {
    mapState
  } from 'vuex'
  import searchhead from '../header/header'
  import movieMenu from './Movie_menu.vue'
  import tvMenu from './Tv_menu.vue'
  import showMenu from './Show_menu.vue'
  export default {
    components: {
      searchhead,
      movieMenu,
      showMenu,
      tvMenu
    },

    data() {
      return {
        current_play_film: '',
        activeName: 'first',
        show_recommed: '',
        play_url_ids: [],
        movie_url: '',
        default_movie_url: ''
      };
    },
    computed: {
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    created() {
      this.$store.dispatch('load_movie_menu_img')
      this.get_current_movie();
    },
    mounted() {
      this.check_play_url();
    },
    methods: {
      check_play_url(url) {
        setTimeout(() => {
          if (url == '' || url == undefined) {
            this.movie_url = this.play_url_ids[0].url
          } else {
            console.log(url)
            this.movie_url = url;
          }
        }, 0);
      },
      handleClick() {

      },
      get_current_movie() {
        setTimeout(() => {
          let playurlids = [];
          this.movie_menu_img.data.find((item) => {
            if (item.id == this.$route.query.playId) {
              this.current_play_film = item;
              for (item in this.current_play_film.play_url[0]) {
                let this_url = {
                  "num": item,
                  "type":this.current_play_film.type,
                  "url": this.current_play_film.play_url[0][item],
                  "baiduyun": this.current_play_film.baiduyun_url[0],
                  "vip_url": this.current_play_film.vip_url[0][item]
                }
                playurlids.push(this_url);
              }
            }
          })
          this.play_url_ids = playurlids;
        }, 0);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .play_now_font {
    padding: 15px;
    color: #314369;
  }

  .movie_play {
    width: 95%;
    height: 375px;
    margin: 15px auto;
  }

  .check_play_route_button {
    width: 115px;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    margin: 15px;
    display: inline-block;
    text-align: center;
  }

  .baiduyun_button {
    width: 200px;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    margin: 15px;
    display: inline-block;
    text-align: center;
  }

  .el-tabs {
    margin: 120px 15px;
  }

  .el-tab-pane {
    text-align: left;
  }

</style>
