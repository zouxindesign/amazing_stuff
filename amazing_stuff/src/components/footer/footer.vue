<template>
  <div class="footer">
        <div class="tab">
            <div>电影</div>
            <div>音乐</div>
            <div>等待</div>
            <div>个人</div>
        </div>
  </div>

</template>

<script>

export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  position: absolute;
  bottom: 0;
  /* display: flex; */
  width: 96%;
  /* justify-content: space-between; */
}
.tab{
    display: flex;
    justify-content: space-between;
}
</style>
