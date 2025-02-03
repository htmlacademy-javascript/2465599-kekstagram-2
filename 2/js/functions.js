//первая задача


function comparesStringLenght(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

//вторая задача

const isPalindrome = (string) => {

  string = string.replaceAll(' ','').toLowerCase();

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return string === reversed;
};
