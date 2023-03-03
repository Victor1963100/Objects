function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length){
      return arr1.every((element, index) => element === arr2[index]);
    } else return false;
  }
  
  function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter( user => user.gender === gender).reduce((accumulator, current, index, array) => accumulator + current.age / array.length, 0);
    return result;
  }