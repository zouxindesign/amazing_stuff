<template>
  <div>
    <!-- 卡片 start-->
    <div class=title_tag1 >
  
      <div class="title_tag1_1">最新电影</div>
      <div class="title_tag1_2" @click="go_to_all()">更多&nbsp;<i class="el-icon-arrow-right"></i></div>
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
    <!-- end -->
    
  </div>
</template>

  
<script>
  import {mapState } from 'vuex'

  export default {
    data() {
      return {
        got_all_moive: []
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

    },
    methods: {
      go_to_all(){
        this.$router.push({
          path: '/Movie_menu_all',
          name: 'Movie_menu_all',
          query: {
            from: 'movie'
          }
        })
      },
      get_all_moive() {
        let got_all_moives = [];
        setTimeout(() => {
          let all_data = this.movie_menu_img.data;
          all_data.map((item, key, ary) => {
            if (ary[key].type == 'movie') {
              // console.log(item)
              got_all_moives.push(item);
            }
          })
          this.got_all_moive = got_all_moives.slice(0,3)
          // console.log(this.got_all_moive)
        }, 0);
      },
      go_to_play(id) {
        // console.log(id)
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
      margin: 15px;
      border: 1px solid #f9f9f9;
      border-radius: 8px;
      box-shadow: 10px 10px 25px #d3d3d3;
      padding: 15px;
    }
  
    .title_tag1 {
      color: #29395D;
      font-size: 30px;
      margin: 15px;
      display: flex;
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
  