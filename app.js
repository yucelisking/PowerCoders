const powerCoders = () => {
    for (let index = 1; index <= 100; index++) {
      if (index % 35 === 0) {
        console.log('Power Coders');
      } else if (index % 5 === 0) {
        console.log('Power');
      } else if (index % 7 === 0) {
        console.log('Coders');
      } else {
        console.log(index);
      }
    }
  }
  
  powerCoders();