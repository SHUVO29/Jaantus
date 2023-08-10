// problem -01


function cubeNumber(input) {
    // যদি ইনপুট একটি সংখ্যা না হয় তাহলে "Invalid Input" রিটার্ন করা হবে
    if (typeof input !== 'number') {
        return "Invalid Input";
    }

    // সংখ্যাটির কিউব গণনা করে result রিটার্ন করা হবে
    const result = input ** 3;
    return result;
}

// স্যাম্পল টেস্টকেসঃ
console.log(cubeNumber(3));  // 27 রিটার্ন করবে
console.log(cubeNumber('a'));  // "Invalid Input" রিটার্ন করবে






// problem-02

function matchFinder(str1, str2) {
    // স্ট্রিং গুলি যাচাই করা
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return false; // যদি দুটি স্ট্রিং না হয়, তাহলে false রিটার্ন করা হবে
    }
  
    // মিল খুঁজে বের করা
    if (str1.includes(str2)) {
      return true; // যদি মিল পাওয়া যায়, তাহলে true রিটার্ন করা হবে
    } else {
      return false; // যদি মিল না পাওয়া যায়, তাহলে false রিটার্ন করা হবে
    }
  }
  
  // ফাংশন টেস্ট
  console.log(matchFinder("আমি একটি স্ট্রিং", "স্ট্রিং")); // true
  console.log(matchFinder("এই একটি স্ট্রিং", "অথবা")); // false
  console.log(matchFinder("প্রথম স্ট্রিং", 42)); // false
  


// ------------------------------



function matchFinder(string1, string2) {
    // যদি str2 পূর্ণভাবে str1 এর সাথে মিল যায়
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
  
  // ফাংশন টেস্ট
  const string1 = "আমি একটি স্ট্রিং";
  const string2 = "স্ট্রিং";
  
  const result = matchFinder(string1, string2);
  console.log(result); // আউটপুট: true
  



// Problem-03

function sortMaker(arr) {
    // অ্যারেতে দুটি উপাদান আছে তা যাচাই করা হচ্ছে
    if (arr.length !== 2) {
        return "Invalid Input";
    }

    // প্রথম উপাদানের মান ধরা হচ্ছে
    let firstElement = arr[0];
    
    // দ্বিতীয় উপাদানের মান ধরা হচ্ছে
    let secondElement = arr[1];
    
    // যদি দুটি উপাদান সংখ্যা হয়
    if (typeof firstElement === 'number' && typeof secondElement === 'number') {
        // যদি দুটি উপাদান সংখ্যা একই হয়
        if (firstElement === secondElement) {
            return "equal";
        } else {
            // দুটি উপাদান সংখ্যা এবং এগুলি পজিটিভ সংখ্যা
            return [Math.min(firstElement, secondElement), Math.max(firstElement, secondElement)];
        }
    } else {
        return "Invalid Input";
    }
}

// স্যাম্পল টেস্টকেসঃ
console.log(sortMaker([5, 3]));  // [3, 5] রিটার্ন করবে
console.log(sortMaker([3, 3]));  // "equal" রিটার্ন করবে
console.log(sortMaker([2, 'a']));  // "Invalid Input" রিটার্ন করবে





// problem -04


function findAddress(addressObj) {
    // আপেক্ষিকভাবে, যদি অবজেক্টে street, house, society প্রপার্টিগুলি না থাকে তাহলে "Invalid Input" রিটার্ন করা হবে
    if (!addressObj.hasOwnProperty('street') || !addressObj.hasOwnProperty('house') || !addressObj.hasOwnProperty('society')) {
        return "Invalid Input";
    }

    // প্রদত্ত অবজেক্ট এর প্রপার্টিগুলি একত্রিত করে ফরম্যাটে প্রকাশ করা হবে
    const formattedAddress = `${addressObj.street},${addressObj.house},${addressObj.society}`;
    return formattedAddress;
}

// স্যাম্পল ইনপুট অবজেক্ট
const inputAddress = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};

// findAddress() ফাংশন কল করা
const output = findAddress(inputAddress);

console.log(output);  // 10,15A,Earth Perfect রিটার্ন করবে


// problem-05


function canPay(coinArray, chipPrice) {
    // আরে যদি empty অ্যারে হয়, তাহলে মিনিংফুল মেসেজ রিটার্ন করা হবে
    if (coinArray.length === 0) {
      return false;
    }
  
    // খুচরা টাকা গুলির মোট যোগফল
    const totalCoins = coinArray.reduce((sum, coin) => sum + coin, 0);
  
    // খুচরা টাকা গুলির মোট যোগফল চি প্স এর দামের সমান বা তার বেশি হলে true রিটার্ন করা হবে
    if (totalCoins >= chipPrice) {
      return true;
    } else {
      return false;
    }
  }
  
  // ফাংশন টেস্ট
  console.log(canPay([1, 2, 5], 10)); // false (1 taka + 2 taka + 5 taka = 8 taka, which is less than 10 taka)
  console.log(canPay([1, 5, 5], 10)); // true (1 taka + 5 taka + 5 taka = 11 taka, which is greater than 10 taka)
  console.log(canPay([], 5)); // false (empty array)
  