class bits {
  clearIthBit(num, i) {
    let bitMask = ~(1 << i);

    console.log(num & bitMask);
    // return num & bitMask;
  }

  clearLastIBits(num, i) {
    let bitMask = -1 << i;

    console.log(num & bitMask);
    // return num & bitMask;
  }

  clearRangeInBits(num, i, j) {
    let bitMask1 = -1 << (j + 1);
    let bitMask2 = (1 << i) - 1;
    let finalBitMask = bitMask1 | bitMask2;

    console.log(num & finalBitMask);
    return num & finalBitMask;
  }

  setIthBit(num, i) {
    let bitMask = 1 << i;

    console.log(num | bitMask);
    return num | bitMask;
  }

  checkIfPowerOfTwo(num) {
    console.log((num & (num - 1)) == 0);
    return (num & (num - 1)) == 0;
  }

  countSetBits(num) {
    let count = 0;

    while (num) {
      let lsb = num & 1;

      if (lsb) count++;

      num = num >> 1;
    }

    console.log(count);
  }
}

const bitInstance = new bits();

// bitInstance.countSetBits(7);