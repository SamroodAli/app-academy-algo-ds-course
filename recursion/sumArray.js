function sumArray(array) {
  if(!array.length){
      return 0
  }
  return array[0] + sumArray(array.slice(1))
}


// using destructuring
function sumArray(array){
  if(!array.length){
    return 0
  }
  const [head,...body] = array
  return head + sumArray(body)
}
