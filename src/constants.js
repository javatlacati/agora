export const API_URL = 'http://agora.mikenabil.net/'

export const AUTH_HEADER = {
  headers: { 'Authorization': 'bearer ' + window.localStorage.getItem('jwt') }
}

export const announcements = [
  {
    'title': 'Party!!!!',
    'up_votes': 56,
    '_id': '12345678',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis itaque, pariatur incidunt eius quasi possimus voluptatibus iste, ad libero est blanditiis laudantium totam provident, nobis quam facilis. Dolor, reiciendis.'
  },
  {
    'title': 'Learn my secret',
    'up_votes': 59,
    '_id': '98765434',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officiis itaque, pariatur incidunt eius quasi possimus voluptatibus iste, ad libero est blanditiis laudantium totam provident, nobis quam facilis. Dolor, reiciendis.'
  }
]

export const comments = {
  '12345678': [
    {
      'text': 'I am in.',
      'user': 'Maria'
    }
  ],
  '98765434': [
    {
      'text': 'I do not like this.',
      'user': 'Nicole'
    },
    {
      'text': 'This really happened?',
      'user': 'Alfred'
    },
    {
      'text': 'I am out!',
      'user': 'Jackson'
    },
    {
      'text': 'When is this happening?',
      'user': 'Marx'
    }
  ]
}
