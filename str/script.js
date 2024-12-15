const options = {method: 'GET', header: {accept: 'application/json'}, };

let arr = []

fetch('https://api.themoviedb.org/3/trending/all/day?api_key=570c179bcbc6e2432147919b3df04a6d&language=en-US', options)
  .then(res => res.json())
  .then(res =>{ arr.push(res.results)
  displayImage(arr)
})
  .catch(err => console.error(err));

  function displayImage(data) {
    if (data.length > 0) {
      const img1 = document.createElement('img');
      img1.className = "img1"
      const img2 = document.createElement('img');
      img2.className = "img2"
      const img3 = document.createElement('img');
      img3.className = "img3"
      const img4 = document.createElement('img');
      img4.className = "img4"
      const img5 = document.createElement('img');
      img5.className = "img5"
      const img6 = document.createElement('img');
      img6.className = "img6"
      
      img1.src = `https://image.tmdb.org/t/p/original${data[0][0].poster_path}`;
      img2.src = `https://image.tmdb.org/t/p/original${data[0][1].poster_path}`;
      img3.src = `https://image.tmdb.org/t/p/original${data[0][2].poster_path}`;
      img4.src = `https://image.tmdb.org/t/p/original${data[0][3].poster_path}`;
      img5.src = `https://image.tmdb.org/t/p/original${data[0][4].poster_path}`;
      img6.src = `https://image.tmdb.org/t/p/original${data[0][5].poster_path}`;
  
      const card1 = document.getElementById('k1');
      card1.appendChild(img1);
      const card2 = document.getElementById('k2');
      card2.appendChild(img2);
      const card3 = document.getElementById('k3');
      card3.appendChild(img3);
      const card4 = document.getElementById('k4');
      card4.appendChild(img4);
      const card5 = document.getElementById('k5');
      card5.appendChild(img5);
      const card6 = document.getElementById('k6');
      card6.appendChild(img6);
    } else {
      console.error("No data available to display");
    }
  }
  
  


  /*
  API_KEY = 570c179bcbc6e2432147919b3df04a6d
API_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzBjMTc5YmNiYzZlMjQzMjE0NzkxOWIzZGYwNGE2ZCIsIm5iZiI6MTczMTc1NDM4My40OTQ2Mzg0LCJzdWIiOiI2NzM4Nzg2NTI4MWFjOTcyZWE0NGEwNmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S1RH0rRfsHzORSiTtCDKS84Cc5Jn8dDnft5DrkX6Dww
*/