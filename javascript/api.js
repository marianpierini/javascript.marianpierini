
  const apiKey = "fd4b7f9ebd08c0dfbefd4b773bdcc7b5"
  const pedirDatos = async () => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mar%20del%20Plata&appid=${apiKey}&units=metric`)
    const data = await resp.json()
      const temperatura = document.getElementById('temperatura')
      
      temperatura.textContent = `Temperatura en MDQ:   ${data.main.temp}°C`;
      
    ;
  }

  pedirDatos()