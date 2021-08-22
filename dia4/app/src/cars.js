import{get,post, del} from '/src/http'

const url = 'http://localhost:3333/cars'
const carform = document.querySelector('[data-js="cars-form"]')
const cartable = document.querySelector('[data-js="table"]')

const getFormElement = (event) => (elementName) =>
{
  return event.target.elements[elementName]
}

const elementTypes =
{
  image:createImage,
  text:createText,
  color:createColor
}
function createImage(value)
{
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = value
  img.width = 100
  td.appendChild(img)
  return td


}
function createText(value)
{
  const td = document.createElement('td')
  td.textContent = value
  return td

}
function createColor(value)
{
  const td = document.createElement('td')
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  td.appendChild(div)
  return td

}

carform.addEventListener('submit', async (e) =>
{

  e.preventDefault()
  const getElement = getFormElement(e)

  const data =
  {
    image: getElement('image').value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value
  }

  const result = await post(url, data)
  if (result.error)
  {
    console.log('Erro ao cadastrar', result.message)
    return
  }

  const noContent = document.querySelector('[data-js="no-content"]')
  if (noContent) {
    cartable.removeChild(noContent)
  }
  createTableRow(data)




  e.target.reset()
  image.focus()
})

function createTableRow(data)
{
  const elements =
  [
    {type:'image', value: data.image},
    {type:'text', value: data.brandModel},
    {type:'text', value: data.year},
    {type:'text', value: data.plate},
    {type:'color', value: data.color}
  ]

  const tr = document.createElement('tr')
  tr.dataset.plate = data.plate

  elements.forEach(element=>
    {
      const td = elementTypes[element.type](element.value)
      tr.appendChild(td)
    })

    const button = document.createElement('button')
    button.textContent = 'Excluir'
    button.dataset.plate = data.plate

    button.addEventListener('click', handleDelete)

    tr.appendChild(button)

  cartable.appendChild(tr)
}

async function handleDelete(e)
{
  const button = e.target

  const plate = button.dataset.plate
  const result = await del(url, {plate})

  if(result.error)
  {
    console.log('erro ao deletar', error.message)
    return
  }

  const tr = document.querySelector(`tr[data-plate="${plate}"]`)
  cartable.removeChild(tr)
  button.removeEventListener('click', handleDelete)

  const allTrs = cartable.querySelector('tr')
  if(!allTrs)
  {
    createNoCarRow()
  }
}

function createNoCarRow()
{
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const ths = document.querySelectorAll('table th')

  td.setAttribute('colspan', ths.length)
  td.textContent = 'Nenhum carro encontrado'

  tr.dataset.js = 'no-content'
  tr.appendChild(td)
  cartable.appendChild(tr)


}

async function main()
{
  const result = await get(url)
  if(result.error)
    {
      console.log('erro ao receber dados do servidor!',result.message)
      return
    }


  if(result.length ===0)
  {
    createNoCarRow()
    return
  }


  result.forEach(createTableRow)




}

main()
