class greedy {
  maxMeetings(s, f) {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
      arr.push({
        start: s[i],
        end: f[i],
        pos: i + 1,
      });
    }

    arr.sort((a, b) => a.end - b.end);

    let meetings = [arr[0].pos];

    let freeOn = arr[0].end;

    for (let i = 1; i < s.length; i++) {
      if (arr[i].start > freeOn) {
        meetings.push(arr[i].pos);
        freeOn = arr[i].end;
      }
    }
    return meetings.sort((a, b) => a - b);
  }

  minPlatform(arr, dep) {
    // code here
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let count = 1;
    let max = 1;

    let a = 1;
    let d = 0;
    // 		let lastDep = dep[0]

    while (a < arr.length && d < arr.length) {
      if (arr[a] <= dep[d]) {
        a++;
        count++;
        max = Math.max(count, max);
      } else {
        count--;
        d++;
      }
    }
    return max;
  }
}
