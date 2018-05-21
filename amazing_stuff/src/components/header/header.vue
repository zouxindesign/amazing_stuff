<template>
    <div class="search_head">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" >
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search_head{
  margin:12px !important;
}
.el-input{
  height: 60px;
  line-height: 60px;
}
.el-input input{
  height: 60px;
}
</style>
