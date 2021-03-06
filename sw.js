const URLs = [ 
  '/',
  '/restaurant.html',
  'js/main.js',
  'js/registersw.js',
  'js/dbhelper.js',
  'js/restaurant_info.js',
  'data/restaurants.json',
  'css/responsive-styles.css',
  'css/styles.css',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg', 
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
      Promise.all(URLs.map(function (url) {
          return fetch(url, {
              mode: 'no-cors'
          }).then(function (response) {
              if (response.ok) {
                  caches.open('restaurant-reviews').then(function (cache) {
                      cache.put(url, response);
                  })
              }

          }).catch(function (err) {
              console.log(err);
          });
      }))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(response => {
      if(response) {
        return response;
      }
      return fetch(event.request);
    }
    )
  )
});