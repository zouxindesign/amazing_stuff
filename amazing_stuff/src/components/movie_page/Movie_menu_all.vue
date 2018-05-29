<template>
    <div>
      <searchhead />
      <!-- movie卡片 start-->
      <div v-show="switch_all_page.movie">
        <div class="title_tag1">
          <div class="title_tag1_1">动作</div>
        </div>
        <div v-for="item in got_all_moive">
          <div class="movie_card_menu" @click="go_to_play(item.id)">
    
            <div class="menu_card_img">
              <img :src="item.img_url" />
            </div>
    
            <div class="menu_card_content">
              <div class="menu_card_title">{{item.name}}</div>
              <div class="menu_card_score_title">评分：
                <span class="menu_card_score">{{item.score}}</span>&emsp;日期：
                <span>{{item.time}}</span>
              </div>
              <div class="menu_card_commet">{{item.introduce}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->
      <!-- tv卡片 start-->
      <div v-show="switch_all_page.tv">
          <div class="title_tag1">
            <div class="title_tag1_1">动作</div>
          </div>
          <div v-for="item in got_all_tv">
            <div class="movie_card_menu" @click="go_to_play(item.id)">
      
              <div class="menu_card_img">
                <img :src="item.img_url" />
              </div>
      
              <div class="menu_card_content">
                <div class="menu_card_title">{{item.name}}</div>
                <div class="menu_card_score_title">评分：
                  <span class="menu_card_score">{{item.score}}</span>&emsp;日期：
                  <span>{{item.time}}</span>
                </div>
                <div class="menu_card_commet">{{item.introduce}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- end -->
      <!-- show卡片 start-->
      <div  v-show="switch_all_page.show">
          <div class="title_tag1">
            <div class="title_tag1_1">动作</div>
          </div>
          <div v-for="item in got_all_show">
            <div class="movie_card_menu" @click="go_to_play(item.id)">
      
              <div class="menu_card_img">
                <img :src="item.img_url" />
              </div>
      
              <div class="menu_card_content">
                <div class="menu_card_title">{{item.name}}</div>
                <div class="menu_card_score_title">评分：
                  <span class="menu_card_score">{{item.score}}</span>&emsp;日期：
                  <span>{{item.time}}</span>
                </div>
                <div class="menu_card_commet">{{item.introduce}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- end -->
    
    </div>
  </template>
  
    
<script>
  import { mapState } from 'vuex'
  import searchhead from '../header/header'
  export default {
    components: {
      searchhead,
    },
        // 定义过滤器 
        filters: {
        filte_genre_1(arg) {
          if(arg.genre == 1){
            return(arg);
          }
        },
    },
    data() {
      return {
        got_all_moive: [],
        got_all_tv: [],
        got_all_show: [],
        switch_all_page:{
          'movie':false,
          'tv':false,
          'show':false
        }
      };
    },
    computed: {
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    created() {
      this.$store.dispatch('load_movie_menu_img');
      this.get_all_moive()
      this.get_current_list()
    },
    methods: {
      go_to_all() {
        this.$router.push({
          path: '/Movie_menu_all',
          name: 'Movie_menu_all',
          query: {
            from: 'movie'
          }
        })
      },
      get_current_list() {
        switch (this.$route.query.from) {
          case 'movie':
            this.switch_all_page = {
              'movie': true,
              'tv': false,
              'show': false
            }
            break;
          case 'tv':
            this.switch_all_page = {
              'movie': false,
              'tv': true,
              'show': false
            }
            break;
          case 'show':
            this.switch_all_page = {
              'movie': false,
              'tv': false,
              'show': true
            }
            break;
        }
      },
      get_all_moive() {
        setTimeout(() => {
          let all_data = this.movie_menu_img.data;
          all_data.map((item, key, ary) => {
            switch (ary[key].type) {
              case 'movie':
                this.got_all_moive.push(item);
                break;
              case 'tv':
                this.got_all_tv.push(item);
                break;
              case 'show':
                this.got_all_show.push(item);
                break;
            }
          })
        }, 0);
      },
      go_to_play(id) {
        this.$router.push({
          path: '/Movie_play',
          name: 'Movie_play',
          query: {
            playId: id
          }
        })
      }
    }
  }
</script>
  
    <style scoped>
      .movie_card_menu {
        margin: 15px 15px 0 15px;
        border: 1px solid #f9f9f9;
        border-radius: 8px;
        box-shadow: 10px 10px 25px #d3d3d3;
        padding: 15px;
      }
    
      .title_tag1 {
        color: #29395D;
        width: 93%;
        font-size: 30px;
        margin: 15px 15px 0 15px;
        display:  inline-flex;
        justify-content:space-between
      }
    
      .menu_card_img img {
        width: 115px;
        height: 162px;
      }
    
      .menu_card_img {
        float: left;
      }
    
      .menu_card_title {
        font-size: 30px;
      }
    
      .menu_card_score {
        font-size: 20px;
        font-weight: bold;
        color: #e09015;
      }
    
      .menu_card_score_title {
        font-size: 20px;
      }
    
      .menu_card_content {
        color: #29395D;
        text-align: left;
        margin: 0px 0px 0px 130px;
        height: 162px;
      }
    
      .menu_card_commet {
        font-size: 16px;
        line-height: 26px;
        overflow: auto;
        height: 100px;
      }
    </style>
    