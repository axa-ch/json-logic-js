function lower(a, b, c) {
  return (c === undefined) ? a < b : (a < b) && (b < c);
}

export default lower;