function sumOfThreeElements(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length > 3 ){
      reject("Only three elements or less are allowed");
    }
    else{
      let sum = 0;
      let i = 0;
      while(i < elements.length){
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: "+sum);
    }
  })
}

// Here we will get Promise object to handle this object see sum2 function
function sum1() {
  const v = sumOfThreeElements(2, 9, 8);
  console.log('v: ', v);
}

// Handle promise object via then and catch
function sum2() {
  sumOfThreeElements(2, 9, 8)
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// with async and await to getting promise information easy way. We do not need to use then and catch funtion.
async function sum3() {
  const v = await sumOfThreeElements(2, 9, 8);
  console.log('v: ', v);
}

sum3();
