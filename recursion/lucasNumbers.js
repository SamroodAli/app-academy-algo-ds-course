function lucasNumber(n) {
  const baseNums = {
      0:2,
      1:1
  }
  if(n in baseNums){
      return baseNums[n]
  }

  return lucasNumber(n - 1) + lucasNumber( n - 2)
}
