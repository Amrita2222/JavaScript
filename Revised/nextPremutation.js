function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
    /* swap i & j */
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i + 1, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

let nums1 = [1, 2, 3, 4];
nextPermutation(nums1);
console.log(nums1); 

let nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log(nums2); 

let nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log(nums3); 

