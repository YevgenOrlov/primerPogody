let zip = {
    // "RU": "Russian Federation",
    // "SA": "Saudi Arabia",
    // "SG": "Singapore",
    // "SK": "Slovakia",
    // "SI": "Slovenia",
    // "ES": "Spain",
    // "LK": "Sri Lanka",
    // "SE": "Sweden",
    // "CH": "Switzerland",
    // "TJ": "Tajikistan",
    // "TH": "Thailand",
    // "TR": "Turkey",
    // "TM": "Turkmenistan",
    // "UA": "Ukraine",
    // "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UZ": "Uzbekistan"
  }
  const addListCnt = function() {
    let bank = '';
    for (let key in zip) {
      bank += `<option value="${key}">${zip[key]}</option>`;
      console.log(bank)
    };
    return bank;
    
  };
  
  (function() {
    document.querySelector(`.cnt`).innerHTML = addListCnt();
  }());
  //
  //
  document.querySelector('.getWeather').onclick = function() {
  
    for (key in zip) {
      let city = document.querySelector('.city').value;
      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city},${key.toLowerCase()}&appid=70e1ed322b02acbc57d443dd91065f3e`)
        .then(function(resp) {
          return resp.json()
        })
        .then(function(data) {
          console.log(data);
          document.querySelector('.package-name').textContent = data.name;
          document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
          document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
          document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function() {
          //         catch any errors
        });
    }
  }