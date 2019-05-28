// import avatarImg from '../assets/images/2.jpg'
// import avatarImg from '../assets/images/3.jpg'

export default {
  state: {
    teachers: [ {
      id: 'kjbk12345jbkjbkjb',
      name: 'Aleksandr',
      surname: 'Kim',
      avatarImg: '../assets/images/2.jpg',
      shortInfo: 'AUCA, Economics',
      details: '',
      price: 400,
      rating: 5,
      ratingsCount: 55,
      experience: 15
    },
    {
      id: 'kjbk12345jb45kjbkjb',
      name: 'Jhon',
      surname: 'Daw',
      avatarImg: '../assets/images/3.jpg',
      shortInfo: 'КГМА',
      details: 'Подробнее',
      price: '250',
      rating: 3,
      ratingsCount: 100,
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
