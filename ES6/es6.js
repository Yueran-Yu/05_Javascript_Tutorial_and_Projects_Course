const author = "Some Author"
const statement = "Some Statement"
const pn = 'hh'
const quote = hightlight`Here is the ${statement} by ${author} and it could not be more true ${pn}`
console.log(quote)
const result = document.getElementById("result")
result.innerHTML = quote
function hightlight(text, ...vars) {
  console.log({ text, vars })
  return 'ello world'
}