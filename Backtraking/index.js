class backtraking {
  inAnArray(arr, i) {
    if (i === arr.length) {
      console.log(arr);
      return;
    }

    arr[i] = i + 1;

    this.inAnArray(arr, i + 1);

    arr[i] = i - 1;
  }

  subset(str,res,ind){
    
  }
}

const array = Array(5);

const backtrakingInstance = new backtraking();

let result = 12;
result = backtrakingInstance.inAnArray(array, 0);

// console.log(result);
console.log("result".charAt("a2"), "result"["a2"]);
