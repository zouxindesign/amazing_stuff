<template>
    <div>
        <el-card class="box-card" :model="new_data_temp">
            <div style="margin: 20px;"></div>

            <!-- id -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="id：">
                    <el-input v-model="new_data_temp.id"></el-input>
                </el-form-item>
            </el-form>

            <!-- name -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="name：">
                    <el-input v-model="new_data_temp.name" ></el-input>
                </el-form-item>
            </el-form>

            <!-- type -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="type：">
                    <el-input v-model="new_data_temp.type" placeholder="movie tv show"></el-input>
                </el-form-item>
            </el-form>

            <!-- genre -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="genre：">
                    <el-input v-model="new_data_temp.genre" placeholder="1动作片 2惊悚片 3 爱情片 4喜剧片 5剧情  6科幻"></el-input>
                </el-form-item>
            </el-form>

            <!-- location -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="location：">
                    <el-input v-model="new_data_temp.location" placeholder="哪国片"></el-input>
                </el-form-item>
            </el-form>

            <!-- describe -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="describe：">
                    <el-input v-model="new_data_temp.describe"></el-input>
                </el-form-item>
            </el-form>

            <!-- score -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="score：">
                    <el-input v-model="new_data_temp.score"></el-input>
                </el-form-item>
            </el-form>

            <!-- time -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="time：">
                    <el-input v-model="new_data_temp.time"></el-input>
                </el-form-item>
            </el-form>

            <!-- director -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="director：">
                    <el-input v-model="new_data_temp.director"></el-input>
                </el-form-item>
            </el-form>

            <!-- lead -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="lead：">
                    <el-input v-model="new_data_temp.lead"></el-input>
                </el-form-item>
            </el-form>

            <!-- img_url -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="img_url：">
                    <el-input v-model="new_data_temp.img_url"></el-input>
                </el-form-item>
            </el-form>

            <!-- introduce -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="introduce：">
                    <el-input v-model="new_data_temp.introduce"></el-input>
                </el-form-item>
            </el-form>

            <!-- latest -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="latest：">
                    <el-input v-model="new_data_temp.latest"></el-input>
                </el-form-item>
            </el-form>

            <!-- play_url -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="play_url：">
                    <el-input v-model="new_data_temp.play_url[0].a" placeholder="a"></el-input>
                    <el-input v-model="new_data_temp.play_url[0].b" placeholder="b"></el-input>
                    <el-input v-model="new_data_temp.play_url[0].c" placeholder="c"></el-input>
                </el-form-item>
            </el-form>

            <!-- vip_url -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="vip_url：">
                    <el-input v-model="new_data_temp.vip_url[0].iqiyi" placeholder="iqiyi"></el-input>
                </el-form-item>
            </el-form>

            <!-- baiduyun_url -->
            <el-form label-position="left" label-width="80px">
                <el-form-item label="baiduyun_url：">
                    <el-input v-model="new_data_temp.baiduyun_url[0].url" placeholder="url"></el-input>
                    <el-input v-model="new_data_temp.baiduyun_url[0].code" placeholder="code"></el-input>
                </el-form-item>
            </el-form>
        </el-card>

        <el-button plain @click="onSubmit">添加</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                new_data_temp: {
                    id: 0,
                    name: "",
                    type: "",
                    genre: "",
                    location: "",
                    describe: "",
                    score: "",
                    time: "",
                    director: "",
                    lead: "",
                    img_url: "",
                    introduce: "",
                    latest: "",
                    play_url: [
                        {
                            "a": "",
                            "b": "",
                            "c": ""
                        }
                    ],
                    vip_url: [
                        {
                            "iqiyi": ""
                        }
                    ],
                    baiduyun_url: [
                        {
                            "url": "",
                            "code": ""
                        }
                    ]
                }
            };
        },
        methods: {
            onSubmit() {
                console.log(this.new_data_temp)
                let allData = Bmob.Object.extend("allData");
                let alldata = new allData();
                alldata.save(this.new_data_temp, {
                    success: function (alldata) {
                        console.log(alldata)
                    },
                    error: function (model, error) {
                        console.log(error)
                        console.log(model)
                    }
                });
                // this.new_data_temp
            }
        }
    }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box-card {
        width: 90%;
        margin: 0 auto;
    }

    .el-form {
        margin: 15px;
        text-align: center;
    }
</style>