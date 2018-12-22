if(navigator.serviceWorker !== undefined) {
  navigator.serviceWorker.register('/sw.js')
  .then(reg => {

  })
  .catch(err => {

  });  
}
