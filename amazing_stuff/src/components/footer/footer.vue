<template>
  <div class="footer">
        <!-- <div class="tab">
            <div>电影</div>
            <div>音乐</div>
            <div>等待</div>
            <div>个人</div>
        </div> -->
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">电影</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">音乐</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">等待</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">个人</div></el-col>
          </el-row>
  </div>

</template>

<script>

export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  width: 96%;
  height: 50px;
  line-height: 50px;
  z-index: 1000;
}
.tab{
    display: flex;
    justify-content: space-between;
}
</style>
