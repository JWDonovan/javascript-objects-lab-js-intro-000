function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  let temp = object;
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
