export default {
  state: {
    teachers: [ {
      id: 'kjbk12345jbkjbkjb',
      name: 'Aleksandr',
      surname: 'Kim',
      avatarImg: 'kjbkj123b',
      shortInfo: 'AUCA, Economics',
      details: '',
      price: 400,
      rating: 5,
      experience: 15
    },
    {
      id: 'kjbk12345jb45kjbkjb',
      name: 'Jhon',
      surname: 'Daw',
      avatarImg: 'kjbk111jb',
      shortInfo: 'КГМА',
      details: 'Подробнее',
      price: '250',
      rating: 3,
      experience: 10
    }

    ]
  },
  mutations: {
    SET_TEACHERS (state, payload) {
      state.teachers = payload
    }
  },
  getters: {
    getTeachers: (state) => state.teachers

  }
}
