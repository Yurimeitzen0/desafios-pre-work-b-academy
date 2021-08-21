

const entrada = document.querySelector('[data-js="input"]')


entrada.addEventListener('input',(txt)=>
{
  var words = txt.target.value.toLowerCase().split(' ')


  words.forEach((word,index) =>
  {
    if(word == 'de' || word == 'da' || word == 'do' || word == 'dos' )
    {
      words[index] = word.toLowerCase()
    }
    else
    {
      words[index] = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    }
  });


txt.target.value = words.join(' ')

})

let colors = new Map([
  ['vermelho', '#AB0000'],
  ['amarelo', '#FFC80D'],
  ['verde', '#22B14B'],
  ['laranja', '#FF7E26'],
  ['azul', '#3F47CC']
]);


const indexform = document.querySelector('[data-js="form"]')
const formselect = document.createElement('select')

const colorbox = document.createElement('div')
colorbox.style.display = 'flex'

colors.forEach((key,value)=>
{
  const option = document.createElement('option')
  option.value = key
  option.textContent = value
  formselect.appendChild(option)
})

formselect.addEventListener('change', (e)=>
{
  colorbox.innerHTML = ''
  Array.from(e.target.selectedOptions).map(option =>
    {
      const div = document.createElement('div')
      div.style.width = '100px'
      div.style.height = '100px'
      div.style.background = option.value
      colorbox.appendChild(div)
    })
})

indexform.appendChild(formselect)
formselect.setAttribute('multiple', '')
document.body.appendChild(colorbox)
