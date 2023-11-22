const restaurantData = [
    { 
      key: 'mcdonalds', 
      image: require('../assets/mcdonalds3.png'), 
      text: 'McDonalds',
      type: 'restaurant',
      details: {
        location: 'Calle Gorlero',
        phone: '+598 4223 6352',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'burguerking', 
      image: require('../assets/burguerking.png'), 
      text: 'Burguer King',
      type: 'restaurant',
      details: {
        location: 'Calle Gorlero',
        phone: '+598 4231 8876 ',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'artico', 
      image: require('../assets/artico.png'), 
      text: 'Artico',
      type: 'restaurant',
      details: {
        location: 'El Trinquete, Puerto',
        phone: '+598 4244 1951',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'chivipizza', 
      image: require('../assets/chivipizza.png'),
      text: 'Chivipizza',
      type: 'restaurant',
      details: {
        location: 'Av. Pedragosa Sierra',
        phone: '+598 4247 7777',
        openingHours: 'Lunes a Viernes: 7:00 - 02:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'kfc', 
      image: require('../assets/kfc.png'), 
      text: 'KFC',
      type: 'restaurant',
      details: {
        location: 'Calle Gorlero',
        phone: '+598 4255 4375',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'mostaza', 
      image: require('../assets/mostaza.png'), 
      text: 'Mostaza',
      type: 'restaurant',
      details: {
        location: 'Calle Gorlero, Punta del Este',
        phone: '+598 4255 6587',
        openingHours: 'Lunes a Viernes: 08:00 - 00:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'la pasiva', 
      image: require('../assets/lapasiva.png'), 
      text: 'La Pasiva',
      type: 'restaurant',
      details: {
        location: 'Av. Roosevelt',
        phone: '+598 4224 7575',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'dominos', 
      image: require('../assets/dominos.png'),
      text: 'Dominos Pizza',
      type: 'restaurant',
      details: {
        location: 'Centro',
        phone: '+598 4233 6779',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: '100artesanal', 
      image: require('../assets/100artesanal.png'),
      text: '100% Artesanal',
      type: 'restaurant',
      details: {
        location: 'Av. Pedragosa Sierra',
        phone: '+598 4247 6103',
        openingHours: 'Lunes a Viernes: 11:00 - 23:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'medialunas', 
      image: require('../assets/medialunas.png'),
      text: 'ML Calentitas',
      type: 'restaurant',
      details: {
        location: 'La Barra',
        phone: '+598 4277 2347',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'labarra', 
      image: require('../assets/labarra.png'),
      text: 'La Barra',
      type: 'restaurant',
      details: {
        location: 'Centro',
        phone: '+598 4224 4395',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: '481', 
      image: require('../assets/481.png'),
      text: '481',
      type: 'restaurant',
      details: {
        location: 'Av. Pedragosa Sierra',
        phone: '+598 4249 7647',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'donjoaquin', 
      image: require('../assets/donjoaquin.png'),
      text: 'Don Joaquín',
      type: 'restaurant',
      details: {
        location: 'Joaquín de Viana',
        phone: '+598 4224 1561',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'freddo', 
      image: require('../assets/freddo.png'),
      text: 'Freddo',
      type: 'restaurant',
      details: {
        location: 'Calle Gorlero',
        phone: '+598 4244 4864',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'grido', 
      image: require('../assets/grido.png'),
      text: 'Grido',
      type: 'restaurant',
      details: {
        location: 'Calle Sarandí',
        phone: '+598 4244 4864',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'elnoble', 
      image: require('../assets/elnoble.png'),
      text: 'El Noble',
      type: 'restaurant',
      details: {
        location: 'Gorlero',
        phone: '+598 4255 9111',
        openingHours: 'Lunes a Viernes: 12:00 - 01:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
    { 
      key: 'mccafe', 
      image: require('../assets/mccafe.png'),
      text: 'Mc Cafe',
      type: 'restaurant',
      details: {
        location: 'Punta Shopping',
        phone: '+598 4223 6352',
        openingHours: 'Lunes a Viernes: 9:00 - 22:00, Sábado y Domingo: 10:00 - 23:00'
      }
    },
  ];

  /* DEFINIMOS LOS SHOWS */
  const showData = [
    { key: 'show1', 
    image: require('../assets/show1.png'), 
    text: 'Música general',
    type: 'show',
    details: {
      description: 'Festival de música general con artistas de todos los generos musicales.',	
      location: 'Campus de Maldonado',
      phone: '+598 98 116 354',
      date: 'Viernes 24 de noviembre, 21:00'
    } },
    { key: 'show2', 
    image: require('../assets/show2.png'), 
    text: 'Rock',
    type: 'show',
    details: {
      description: 'Festival de rock donde se presentarán bandas históricas.',
      location: 'San Carlos',
      phone: '+598 98 116 354',
      date: 'Sábado 25 de noviembre, 21:30'
    } },
    { key: 'show3', 
    image: require('../assets/show3.png'), 
    text: 'Jazz', 
    type: 'show',
    details: {
      description: 'Festival de jazz para todos los amantes del género.',
      location: 'Centro de convenciones',
      phone: '+598 98 116 354',
      date: 'Martes 28 de noviembre, 19:00'
    } },
    { key: 'show4', 
    image: require('../assets/show4.png'), 
    text: 'Música tropical', 
    type: 'show',
    details: {
      description: 'Festival de música tropical, ideal para pasarla bien.',
      location: 'Parador Playa Mansa ',
      phone: '+598 98 116 354',
      date: 'Jueves 30 de noviembre, 22:00'
    } },
    { key: 'show5', 
    image: require('../assets/show5.png'), 
    text: 'Música electrónica', 
    type: 'show',
    details: {
      description: 'Festival de música electrónica con los mejores DJs de la región.',
      location: 'La Barra',
      phone: '+598 98 116 354',
      date: 'Sábado 2 de diciembre, 23:00'
    } }
  ];
  
  export { restaurantData, showData };
