import './style.css'

const link = document.querySelector('[data-js="link"]')
const app = document.querySelector('[data-js="app"]')

document.querySelector('[data-js="app"]').innerHTML = ` <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

link.addEventListener('click', () =>
{
  event.preventDefault()
  if(app.style.display == "block")
  {
    app.style.display = "none"
  }
  else
  {
    app.style.display = "block"
  }



},false)
