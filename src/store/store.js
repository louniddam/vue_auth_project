import Vuex from "vuex";
import Vue from 'vue';
import 'es6-promise/auto';


Vue.use(Vuex);


//Le store sert à centraliser les informations
const store = new Vuex.Store({
    state: {
        //La connexion comme elle est de base dans sign-in
        tokens: null,
    },
    mutations: {
        //La mutation sera notre user qui est maintenant connecté, les muta s'écrvient en majuscules
        ADD_TOKEN: (state, token) =>{
            state.tokens = token;
        }
    },
   
    getters: {
        //faire un getter qui check si tokens est true en mode fonction
        get_token: (state)=>{
            return state.tokens;
        }
    },
    actions: {
        addToken(context, token){
            context.commit('ADD_TOKEN', token); //pour l'envoyer à la mutation
        }
    }
});


export default store;
