import axios from 'axios'
export default {
    state:{
        movie_menu_img:''
    },
    getter:{

    },
    mutations:{
        get_movie_menu_img(state,res){
            state.movie_menu_img = res
        }
    },
    actions:{
        load_movie_menu_img(context, res){
            axios.get('../../static/movie_menu_imglists/movie_menu_imglists.json').then((res)=>{
                context.commit("get_movie_menu_img",res)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}