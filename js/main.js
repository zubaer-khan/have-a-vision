
  const url = 'https://api.nasa.gov/planetary/apod?api_key=AhOPMjy79busCidDjiGBzVW5lKOXOxVmLJ5AMV9y&count=1'


    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('div').style.backgroundImage = `url(${data[0].hdurl})`;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

  const quotes = 'https://type.fit/api/quotes'
  
  fetch(quotes)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let num = Math.ceil(Math.random() * 1643)
        document.querySelector('h2').innerText = data[num].text.toString()
        document.querySelector('h4').innerText = data[num].author !== null ? data[num].author.toString() : "Unknown"
      })
      .catch(err => {
          console.log(`error ${err}`)
      });