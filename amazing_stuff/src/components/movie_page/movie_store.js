export default {
    state:{
        movie_menu_img:{
        }
    },
    getter:{

    },
    mutations:{
        change(state){
            state.account_username='b'
        }
    },
    actions:{
        load_movie_menu_img(){
            axios.get('../../static/movie_menu_imglists/movie_menu_imglists.json')
        }
    }
}