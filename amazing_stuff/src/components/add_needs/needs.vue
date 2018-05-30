<template>
  <div>
    <el-card class="box-card">
      <div style="margin: 20px;"></div>
      <el-form label-position="left" label-width="80px" :model="need_film">
        <el-form-item label="电影名称：">
          <el-input v-model="need_film.name"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <el-button plain @click="onSubmit">点击求片哟~</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        need_film: {
          name: ''
        }
      };
    },
    methods: {
      onSubmit() {
        let needFilms = Bmob.Object.extend("needFilms");
        let needfilms = new needFilms();
        needfilms.save(this.need_film, {
          success: function (needfilms) {
            alert('求片成功，我会尽快更新');
            this.need_film.name=''

          },
          error: function (model, error) {
            console.log(error)
            console.log(model)
          }
        })
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box-card {
    width: 90%;
    margin: 50% auto 50px auto;
  }

  .el-form {
    margin: 15px;
    text-align: center;
  }
</style>