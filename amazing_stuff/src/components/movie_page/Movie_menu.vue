<template>
  <div>
    <!-- 卡片 start-->
    <div class=title_tag1 >最新电影</div>
    <div v-for="item in got_all_moive">
      <div class="movie_card_menu" @click="go_to_play(item.id)">

        <div class="menu_card_img">
          <img src="http://img.zxh.net.cn/upload/vod/2018-05/15265516856.jpg" />
        </div>

        <div class="menu_card_content">
          <div class="menu_card_title">{{item.name}}</div>
          <div class="menu_card_score">评分：
            <span>{{item.score}}</span>&emsp;日期：
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
      get_all_moive() {
        setTimeout(() => {
          let all_data = this.movie_menu_img.data;
          all_data.map((item, key, ary) => {
            if (ary[key].type == 'movie') {
              // console.log(item)
              this.got_all_moive.push(item);
            }
          })
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

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .movie_card_menu{
      margin: 15px;
      border: 1px solid #f9f9f9;
      border-radius: 8px;
      box-shadow: 10px 10px 25px #d3d3d3;
      padding: 15px;
    }
    .title_tag1{
      color: #29395D;
      font-size: 32px;
      text-align: left;
      margin: 15px;
    }
    .menu_card_img img{
      width: 115px;
      height: 162px;
    }
    .menu_card_img{
      float: left;
    }
    .menu_card_title{
      font-size: 30px;
    }
    .menu_card_score{
      font-size: 12px;
    }
    .menu_card_content{
      color: #29395D;
      text-align: left;
      margin: 0px 0px 0px 130px;
      height: 162px;
    }
    .menu_card_commet {
    font-size: 20px;
    line-height: 20px;
    overflow: auto;
    height: 90px;
  }
  </style>
  