var isPalindrome = function (x) {
    let result = false;
    const string = x.toString();
    const reversedString = string.split('').reverse().join('');
    const reversedNumber = Number(reversedString);

    if ((reversedNumber === 0 || reversedNumber) && reversedNumber === x) {
        result = true;
    }

    return result;
};

console.log(isPalindrome(121));
