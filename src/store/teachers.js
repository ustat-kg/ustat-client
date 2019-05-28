import avatarImg1 from '../assets/images/2.jpg'
import avatarImg2 from '../assets/images/3.jpg'

export default {
  state: {
    teachers: [ {
      id: 'kjbk12345jbkjbkjb',
      name: 'Aleksandr',
      surname: 'Kim',
      avatarImg: avatarImg1,
      shortInfo: 'AUCA, Economics',
      details: '',
      price: 400,
      rating: 5,
      ratingsCount: 55,
      experience: 15
    },
    {
      id: 'kjbk1234525jb45kjbkjb',
      name: 'Jhon',
      surname: 'Daw',
      avatarImg: avatarImg2,
      shortInfo: 'КГМА',
      details: 'Подробнее',
      price: '250',
      rating: 3,
      ratingsCount: 38,
      experience: 10
    },
    {
      id: 'kjbk12345jb45kjbkjb',
      name: 'Benekdikt',
      surname: 'Kamberbetch',
      avatarImg: avatarImg2,
      shortInfo: 'Graduted of Oxford major English Language',
      details: 'Подробнее',
      price: '600',
      rating: 4.5,
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
