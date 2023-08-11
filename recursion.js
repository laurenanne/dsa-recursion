/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;

  let maxLen = words[0].length;

  return words[0].length < longest(words.slice(1))
    ? (maxLen = longest(words.slice(1)))
    : maxLen;
}
/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let n = str.length - 1;
  if (str.length <= 1) return true;

  if (str[0] !== str[n]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, n));
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, count = 0) {
  if (arr.length === 0) return -1;

  if (arr[0] === val) {
    return count;
  } else {
    return findIndex(arr.slice(1), val, (count += 1));
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, subStr = "") {
  let n = str.length - 1;

  if (subStr.length === str.length) return subStr;

  subStr += str[n];
  return subStr + revString(str.slice(0, n));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, newArr = []) {
  let arr = Object.values(obj);

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      gatherStrings(arr[i], newArr);
    } else {
      if (typeof arr[i] === "string") {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);

  if (left > right) return -1;

  if (arr[mid] === val) {
    return mid;
  }

  if (mid > 0 && arr[mid - 1] <= val && val < arr[mid]) {
    return mid - 1;
  }

  if (val < arr[mid]) {
    return binarySearch(arr, val, left, mid - 1);
  }

  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
