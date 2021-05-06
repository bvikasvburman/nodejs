function sumOfThreeElements(...elements){

    console.log(elements);
    return new Promise(
        (resolve,reject)=>
        {
            if (elements.length > 3 ) {
                reject("Only three elements or less are allowed");
            } else {
                
                let sum = 0;
                let i = 0;
                while(i < elements.length){
                    sum += elements[i];
                    i++;
                }

                console.log('vvv', sum);
                resolve("Sum has been calculated: " + sum);
            }
        })
  }

  sumOfThreeElements(7, 8, 9,6)
  .then(
      result => console.log('summ.. ', result)
    )
    .catch(error => console.log('Error', error));
