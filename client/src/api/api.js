import channelLogoOne from '../assets/img/first_channel.svg'
import channelLogoTwo from '../assets/img/two_and_two.svg'
import channelLogoThree from '../assets/img/rbc.svg'
import channelLogoFour from '../assets/img/amedia.svg'
import moveItemOne from '../assets/img/move_item_1.jpg'
import moveItemTwo from '../assets/img/move_item_2.jpg'
import moveItemThree from '../assets/img/move_item_3.jpg'
import moveItemFour from '../assets/img/move_item_4.jpg'
import * as axios from "axios";

const TIMEOUT = 500 // Искуственная задержка для демонстрации.

export const channelsApi = { // Имитация запроса на сервер для получения списка каналов.
  getChannels() {
    return new Promise(resolve => {
      const result = [
        {
          id: 0,
          channelLogoSrc: channelLogoOne,
          title: 'Первый канал',
          tvProgram: [
            {
              time: '13:00',
              title: 'Новости (с субтитрами)'
            }, {
              time: '14:00',
              title: 'Давай поженимся'
            }, {
              time: '15:00',
              title: 'Другие новости'
            }
          ]
        }, {
          id: 1,
          channelLogoSrc: channelLogoTwo,
          title: '2x2',
          tvProgram: [
            {
              time: '13:00',
              title: 'МУЛЬТ ТВ. Сезон 4, 7 серия'
            }, {
              time: '14:00',
              title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'
            }, {
              time: '15:00',
              title: 'БУРДАШЕВ. Сезон 1, 20 серия'
            }
          ]
        }, {
          id: 2,
          channelLogoSrc: channelLogoThree,
          title: 'РБК',
          tvProgram: [
            {
              time: '13:00',
              title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'
            }, {
              time: '14:00',
              title: 'ДЕНЬ. Главные темы'
            }, {
              time: '15:00',
              title: 'Главные новости'
            }
          ]
        }, {
          id: 3,
          channelLogoSrc: channelLogoFour,
          title: 'AMEDIA PREMIUM',
          tvProgram: [
            {
              time: '13:00',
              title: 'Клиент всегда мёртв'
            }, {
              time: '14:00',
              title: 'Голодные игры: Сойка-пересмешница. Часть I'
            }, {
              time: '15:00',
              title: 'Секс в большом городе'
            }
          ]
        }, {
          id: 4,
          channelLogoSrc: channelLogoOne,
          title: 'Первый канал',
          tvProgram: [
            {
              time: '13:00',
              title: 'Новости (с субтитрами)'
            }, {
              time: '14:00',
              title: 'Давай поженимся'
            }, {
              time: '15:00',
              title: 'Другие новости'
            }
          ]
        }, {
          id: 5,
          channelLogoSrc: channelLogoTwo,
          title: '2x2',
          tvProgram: [
            {
              time: '13:00',
              title: 'МУЛЬТ ТВ. Сезон 4, 7 серия'
            }, {
              time: '14:00',
              title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'
            }, {
              time: '15:00',
              title: 'БУРДАШЕВ. Сезон 1, 20 серия'
            }
          ]
        }, {
          id: 6,
          channelLogoSrc: channelLogoThree,
          title: 'РБК',
          tvProgram: [
            {
              time: '13:00',
              title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'
            }, {
              time: '14:00',
              title: 'ДЕНЬ. Главные темы'
            }, {
              time: '15:00',
              title: 'Главные новости'
            }
          ]
        }, {
          id: 7,
          channelLogoSrc: channelLogoFour,
          title: 'AMEDIA PREMIUM',
          tvProgram: [
            {
              time: '13:00',
              title: 'Клиент всегда мёртв'
            }, {
              time: '14:00',
              title: 'Голодные игры: Сойка-пересмешница. Часть I'
            }, {
              time: '15:00',
              title: 'Секс в большом городе'
            }
          ]
        }
      ] // Имитация получения результата с сервера.
      setTimeout(() => {
        resolve(result)
      }, TIMEOUT)
    })
  }
}

export const moviesApi = { // Имитация запроса на сервер для получения списка фильмов.
  getMovies() {
    return new Promise(resolve => {
      const result = [
        {
          id: 0,
          photoSrc: moveItemOne,
          title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!'
        }, {
          id: 1,
          photoSrc: moveItemTwo,
          title: 'Новый Бэтмен',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!'
        }, {
          id: 2,
          photoSrc: moveItemThree,
          title: 'Однажды... в Голливуде',
          description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». ' +
            'Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'
        }, {
          id: 3,
          photoSrc: moveItemFour,
          title: 'Стриптизёрши',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores expedita impedit incidunt quia velit!'
        },

      ] // Имитация получения результата с сервера.
      setTimeout(() => {
        resolve(result)
      }, TIMEOUT)
    })
  }
}

export const authApi = {
  registration(email, password, name) {
    return axios.post('api/auth/registration', {email, password, name})
  },
  login(email, password) {
    return axios.post('api/auth/login', {email, password})
  }
}

export const profileApi = {
  getOwnerProfile(token){
    return axios.get('api/profile/info', {headers: {'Authorization': 'Bearer ' + token}})
  },
  updateName(token, name) {
    return axios.post('api/profile/updateName', {name}, {headers: {'Authorization': 'Bearer ' + token}})
  }
}