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
        add_token: (state, token) =>{
            state.tokens = token;
            console.log(state.tokens);
        }
    },
   
    getters: {

    },
    actions: {
        addToken(context, token){
            context.commit('add_token', token); //pour l'envoyer à la mutation
        }
    }
});

global.store = store;

export default store;
