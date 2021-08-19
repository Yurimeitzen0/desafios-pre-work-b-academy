

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
