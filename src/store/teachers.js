import avatarImg1 from "../assets/images/2.jpg";
import avatarImg2 from "../assets/images/bussiness.png";
import avatarImg3 from "../assets/images/it.png";

export default {
  state: {
    teachers: [
      {
        id: "kjbk12345jbkjbkjb",
        name: "Aleksandr",
        surname: "Kim",
        avatarImg: avatarImg1,
        shortInfo: "Химия, обладатель премии по разработке новых элементов",
        details: "",
        price: 400,
        rating: 5,
        ratingsCount: 55,
        experience: 15,
        gender: ["Male", "Female"],
        age: 25,
        location: "Бишкек",
        category: "Школьные предметы",
        subject: "Английский",
        qualification:
          "Given my 6+ years writing academic papers (theses, analyses, and reviews), I have developed a seasoned understanding of the how English functions in terms of rhetoric, grammar and articulation. Also, after having studied two foreign languages",
        bioDescription:
          "Hello! I’m Taylah, a cheerful, GRADE-BOOSTING female Tutor! Tutoring sessions for children, teens, college students, lawyers, nurses, businessmen, world-travelers, a heritage-seekers.... I will design a personalized curriculum that will clarify even the most ambiguous concepts in the most memorable ways possible. We will have fun as I evaluate your learning style and help you learn with precise and engaging activities",
        eduDescription: "American University Central Asia",
        commentDescription:
          " I have tried learning English many times, and working with him has been so much more helpful than anything else Ive ever tried b"
      },
      {
        id: "kjbk1234525jb45kjbkjb",
        name: "Jhon",
        surname: "Daw",
        avatarImg: avatarImg2,
        shortInfo: "Бизнес-планирование работа с базой данных",
        details: "Подробнее",
        price: 250,
        rating: 3,
        ratingsCount: 38,
        experience: 10,
        gender: ["Male", "Female"],
        age: 25,
        subject: "Бизнес-планирование"
      },
      {
        id: "kjbk12345278554b45kjbkjb",
        name: "Katy",
        surname: "Brown",
        avatarImg: avatarImg2,
        shortInfo:
          "Творчество, научу правильно кроить и сшить дизайнерскую одежду",
        details: "Подробнее",
        price: 250,
        rating: 3,
        ratingsCount: 38,
        experience: 10,
        gender: ["Male", "Female"],
        age: 25,
        subject: "Бизнес-планирование"
      },
      {
        id: "kjbk12341212145kjbkjb",
        name: "Alina",
        surname: "Radjers",
        avatarImg: avatarImg2,
        shortInfo: "Выпускник Кэмбриджа, 5 летний опыт преподавания",
        details: "Подробнее",
        price: 250,
        rating: 3,
        ratingsCount: 38,
        experience: 10,
        gender: ["Male", "Female"],
        age: 25,
        subject: "Программирование"
      },
      {
        id: "kjbk12345jb45kjbkjb",
        name: "Benekdikt",
        surname: "Kamberbetch",
        avatarImg: avatarImg3,
        shortInfo: "Химия, обладатель премии по разработке новых элементов",
        details: "Подробнее",
        price: 600,
        rating: 4.5,
        ratingsCount: 100,
        experience: 10,
        subject: "Фортепиано",
        gender: ["Male", "Female"],
        age: 25
      },
      {
        id: "kjbk12345jbkj45bkjb",
        name: "Harry ",
        surname: "Potter",
        avatarImg: avatarImg1,
        shortInfo: "Русский язык, Высокий балл по ОРТ",
        details: "",
        price: 400,
        rating: 5,
        ratingsCount: 55,
        experience: 15,
        gender: ["Male", "Female"],
        age: 25,
        subject: "Английский"
      },
      {
        id: "kjbk12345jb78kjbkjb",
        name: "Sherlock",
        surname: "Holms",
        avatarImg: avatarImg1,
        shortInfo: "Англйиский язык, сертификат TOEFl на высоком уровне",
        details: "",
        price: 400,
        rating: 5,
        ratingsCount: 55,
        experience: 15,
        gender: ["Male", "Female"],
        age: 25,
        subject: "Английский"
      },
      {
        id: "kjbk12345jb78kjbkjb",
        name: "Sherlock",
        surname: "Holms",
        avatarImg: avatarImg1,
        shortInfo: "Химия, подготовка к ОРТ",
        details: "",
        price: 450,
        rating: 5,
        ratingsCount: 55,
        experience: 15,
        gender: ["Male", "Female"],
        age: 25,
        subject: "Английский"
      }
    ]
  },
  mutations: {
    SET_TEACHERS(state, payload) {
      state.teachers = payload;
    }
  },
  getters: {
    getTeachers: state => state.teachers
  }
};
