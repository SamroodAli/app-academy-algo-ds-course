function pow(base, exponent) {
  if(exponent==0){
      return 1
  }else if(exponent ==1){
      return base
  }
  return exponent > 1 ? base * pow(base,exponent - 1) : 1/(pow(base,exponent *  -1))
}
