import Vuex from 'vuex'
import userModule from './user'
import generalModule from './general'
import teachersModule from './teachers'

export default () => new Vuex.Store({
  modules: {
    userModule,
    generalModule,
    teachersModule
  }
})
