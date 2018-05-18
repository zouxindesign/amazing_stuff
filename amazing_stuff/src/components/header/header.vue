<template>
  <div class="footer">
        <el-row>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button icon="el-icon-search" circle></el-button>
          </el-row>
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
<style scoped>
.footer{
  /* position: fixed; */
  top: 0;
  width: 100%;
}
</style>
