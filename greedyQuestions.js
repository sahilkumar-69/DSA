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

  jobSequencing(deadline, profit) {
    let lastDeadLine = 0;
    let netProfit = 0;
    let totalJobs = 0;
    let jobs = [];

    for (let i = 0; i < profit.length; i++) {
      jobs.push([deadline[i], profit[i]]);
      lastDeadLine = Math.max(lastDeadLine, deadline[i]);
    }

    jobs.sort((a, b) => b[1] - a[1]);

    let indexingArray = Array.from({ length: lastDeadLine + 1 }).fill(false);

    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i][0] == 0 && jobs[i][1] == 0) continue;
      let j = jobs[i][0];
      if (!indexingArray[j]) {
        indexingArray[j] = true;
        netProfit += jobs[i][1];
        totalJobs++;
      } else {
        for (let n = j; n > 0; n--) {
          if (!indexingArray[n]) {
            indexingArray[n] = true;
            netProfit += jobs[i][1];
            totalJobs++;
            break;
          }
        }
      }
    }

    return [totalJobs, netProfit];
  }

  fractionalKnapsack(val, wt, capacity) {
    // code here
    let combination = [];
    let score = 0;

    for (let i = 0; i < wt.length; i++) {
      combination.push([val[i], wt[i]]);
    }

    combination.sort((a, b) => b[0] / b[1] - a[0] / a[1]);

    for (let combo of combination) {
      if (capacity >= combo[1]) {
        score += combo[0];
        capacity -= combo[1];
      } else {
        score += (combo[0] / combo[1]) * capacity;
        break;
      }
    }

    return score;
  }
}

