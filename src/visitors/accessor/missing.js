import isArray from '../../helpers/isArray';
import variable from '../../operations/accessor/variable'

function missing() {
  /*
  Missing can receive many keys as many arguments, like {"missing:[1,2]}
  Missing can also receive *one* argument that is an array of keys,
  which typically happens if it's actually acting on the output of another command
  (like 'if' or 'merge')
  */

  const missing = [];
  const keys = isArray(arguments[0]) ? arguments[0] : arguments;

  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = variable.call(this, {"var": key}, arguments);

    if(value === null || value === "") {
      missing.push(key);
    }
  }

  return missing;
};

export default missing;