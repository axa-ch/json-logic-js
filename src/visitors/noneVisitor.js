function noneVisitor(data, values) {
  const filtered = apply({'filter' : values}, data);

  return filtered.length === 0;
}

export default noneVisitor;