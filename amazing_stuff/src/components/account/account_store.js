export default {
    state:{
        show:false,
        account_username:'a',
        account_info:{
            age:'12',
            height:12
        }
    },
    mutations:{
        change(state){
            state.account_username='b'
        }
    }
}