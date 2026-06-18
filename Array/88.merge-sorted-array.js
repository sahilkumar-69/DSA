/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = 0;

  while (left >= 0 && right < n) {
    if (nums1[left] > nums2[right]) {
      [nums1[left], nums2[right]] = [nums2[right], nums1[left]];
      left--;
      right++;
    } else break;
  }
  left = m;
  right = 0;
  while (left < m + n) {
    nums1[left] = nums2[right];
    left++;
    right++;
  }

  nums1.sort((a, b) => a - b);
};
// @lc code=end
