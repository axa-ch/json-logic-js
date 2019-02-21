function isLogic(logic) {
  return (
    typeof logic === "object" && // An object
    logic !== null && // but not null
    !Array.isArray(logic) && // and not an array
    Object.keys(logic).length === 1 // with exactly one key
  );
}

export default isLogic;