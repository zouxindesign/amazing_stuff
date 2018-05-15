<template>
    <div class="movie_menu">
        <el-row :gutter="1">
            <el-col :xs="8" ><div class="grid-content bg-purple-light" >
              <!-- {{$store.state.movie_store.movie_menu}} -->
            </div></el-col>
            <el-col :xs="8" ><div class="grid-content bg-purple">

            </div></el-col>
            <el-col :xs="8" ><div class="grid-content bg-purple-light">

            </div></el-col>
          </el-row>          
    </div>
  
  </template>
  
  <script>
  
  export default {
    data() {
        return {
        };
      },
      methods: {
      }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .movie_menu{
      padding-top: 16px;
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
  </style>
  