const endPoint = "https://jsonplaceholder.typicode.com/photos?_limit="
const limit = 9
axios.get(endPoint + limit)
  .then(res => {
    let i = 0
     if(res.status === 200){
      document.querySelector('.row').innerHTML = ''
      res.data.forEach(foto => printCard(foto))
     }

     })

     //FUNCTIONS

     function printCard(foto){
      const {title, url} = foto
      console.log(title, url)
      return   document.querySelector('.row').innerHTML +=`<div class="col">
      <div class="card p-3 my-1 rounded-0 mn-card">
        <img src="img/pin.svg" alt="PIN">
        <img src="${url}" class="card-img-top rounded-0" alt="FOTO">
        <div class="card-body p-0 py-1">
          <p class="card-text">${title}</p>
        </div>
      </div>
    </div>`
     }
