

const entrada = document.querySelector('[data-js="input"]')


entrada.addEventListener('input',(txt)=>
{
  var words = txt.target.value.split(' ')


  words.forEach((word,index) =>
  {
    if(word == 'de' || word == 'De' || word == 'da' || word == 'Da' || word == 'Do' || word == 'do' || word == 'Dos' || word == 'dos' )
    {
      words[index] = word.toLowerCase()
    }
    else
    {
      words[index] = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      console.log(word)
    }
  });

console.log(words.join(' '))

txt.target.value = words.join(' ')

})
