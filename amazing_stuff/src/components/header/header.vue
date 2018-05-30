<template>
    <div class="search_head">
      <!-- <div class="nav">
        <div><i class="el-icon-back"></i></div>
        <div></div>
      </div> -->
        <el-col :span="24">
          <!-- 输入后匹配输入建议 -->
            <el-autocomplete
              class="inline-input"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              :trigger-on-focus="false"
              @select="handleSelect"
            >
            <el-button slot="append" icon="el-icon-search" @click="loadAll"></el-button>
          </el-autocomplete>
        </el-col>
    </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        input: '',
        restaurants: [],
        state2: '',
        state1: '',
        tip_search_list:[],
      }
    },
    computed: {
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    created() {
      this.$store.dispatch('load_movie_menu_img');
    },
    methods: {
      querySearch(queryString, cb) {
        
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        if(results.length > 0 ){
          console.log(results)
          cb(results);
        } else {
          results = [{
            "id":'none',
            "value":'没有找到？点击提交你要找的资源'
          }]
          cb(results);
        }
      },
      createFilter(queryString) {
        return (restaurant) => {
          console.log(restaurant.value.toLowerCase().indexOf('极限'))
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        this.movie_menu_img.data.map((item, key, ary) => {
          let tip_search_list_item = {
            "id" : item.id,
            "value":item.name
          }
          this.tip_search_list.push(tip_search_list_item);
          this.restaurants = this.tip_search_list;
        })

      },
      handleSelect(item) {
        if(item.id == 'none'){
          this.$router.push({
          path: '/needs',
          name: 'needs',
        })
        } else {
          this.$router.push({
          path: '/Movie_play',
          name: 'Movie_play',
          query: {
            playId: item.id
          }
        })
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.loadAll();
      }, 0);
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-autocomplete{
  height: 80px;
  line-height: 80px;
  width: 100%;
  margin-bottom: 20px;
}
.el-input input{
  height: 80px;
}
</style>
