import axios from 'axios'
import { createStore } from 'vuex'
import Stalling from '../models/Stalling'
const state = {}
const getters = {}
const actions = {}
const mutations = {}

export const store = createStore({
    state () {
        return {
            stallingen: []
        }
    }, 
    mutations: {
        refreshStallingen(state) {
            axios.get('https://data.stad.gent/explore/dataset/real-time-bezettingen-fietsenstallingen-gent/download/?format=json&timezone=Europe/Brussels&lang=en')
            .then(results => {
                let stallingen = [];
                for(let result in results.data){
                    stallingen.push(new Stalling(
                        result.fields.facilityname,
                        result.fields.bezetting,
                        result.fields.freeplaces,
                        result.fields.totalplaces,
                        result.fields.locatie))

                }
                state.stallingen = stallingen
            })
        }
    },
    getters: {
        getStallingen(state) {
            return state.stallingen
        }
    }
})

export default {
    state,
    getters,
    actions,
    mutations
}