class sortColor {
  bruteForce(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;

    for (let num of nums) {
      switch (num) {
        case 0:
          red++;
          break;
        case 1:
          white++;
          break;
        case 2:
          blue++;
          break;
        default:
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (red > 0) {
        nums[i] = 0;
        red--;
      } else if (white > 0) {
        nums[i] = 1;
        white--;
      } else if (blue > 0) {
        nums[i] = 2;
        blue--;
      }
    }
  }
}

const colorArray = [1, 0, 1, 2];

const sortColorInstance = new sortColor();

sortColorInstance.bruteForce(colorArray);

console.log(colorArray);
