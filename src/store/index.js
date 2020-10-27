import Vue from 'vue'
import Vuex from 'vuex'
import { docsCollection,accidentsCollection}  from './firedb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docs:[],
    accidents:[]
  },
  mutations: {
    SET_DOCS:(state,data)=>{
      state.docs=[...data];
    },
    SET_ACCIDENTS:(state,data)=>{
      state.accidents=[...data]
    },
    SET_DOC:(state,data)=>{
      state.docs.unshift(data);
    }
  },
  actions: {

    async getAccidents({commit}){
      let accidentData= await accidentsCollection.get();
      let dataD=[];
      accidentData.forEach(doc=>{
        dataD.push(doc.data());
      });
      commit("SET_ACCIDENTS",dataD);
    },

    /// get docs
   async getAllDocs({commit}){
      let dataDocs= await docsCollection.get();
      let dataD=[]
      dataDocs.forEach(doc=>{
        dataD.push(doc.data());
      });
      commit("SET_DOCS",dataD);
    },
    async addCarData({commit},data){
     await docsCollection.add(data);
      commit("SET_DOC",data)
    }
  },
  modules: {
  }
})
