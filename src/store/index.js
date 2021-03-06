import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userinfo:{
            ID_card:"",
            password:"",
            username:"",
            header:"",
            hometown:"",
            address:"",
            nation:"",
            wxNum:"",
            qqNum:"",
            education:"",
            jobRank:"",
            joinPartyTime:"",
            lastPayTime:"",
            partyIdentity:"",
        },
        token:"",
        login:""
    },
    mutations:{
        USERINFO (state,userinfo){
            state.userinfo = userinfo
        },
        TOKEN (state,token){
            state.token = token
        },
        LOGIN (state,login){
            state.login = login
        }
    },
    actions:{

    },
    plugins:[createPersistedState({
        storage:{
            getItem:key => sessionStorage.getItem(key),
            setItem:(key,value)=> sessionStorage.setItem(key,value),
            removeItem: key => sessionStorage.removeItem(key),
        }
    })]
})
export default store