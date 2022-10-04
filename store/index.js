import Vuex from 'vuex'

const createStore = ()=>{
    return new Vuex.Store({
        state:{
            cus:[]
        },
        mutations:{
            setCus(state, cus){
                state.cus=cus
            }
        },
        actions:{
            setCus(vuexContext,cus){
                vuexContext.commit('setCus',cus)
            }
        },
        getters:{
            cus(state){
                return state.cus
            }
        }

    })
}

export default createStore