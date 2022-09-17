const findSameCharacterPalindrome = (s, currentPosition) => {
    const currentChar = s[currentPosition];
    let palindromeLength = 2;
    let currentPalindrome = currentChar + currentChar;

    for (let k = 1; ; k++) {
        const nextCharPosition = currentPosition + k;
        if (nextCharPosition > s.length - 1) {
            break;
        }

        if (s[nextCharPosition] === currentChar) {
            currentPalindrome += currentChar;
            palindromeLength++;
        } else {
            break;
        }
    }

    return {
        palindrome: currentPalindrome,
        palindromeLength,
    };
};

const findPalindrome = (
    s,
    currentPortion,
    currentPortionLength,
    reversePosition,
    forwardPosition
) => {
    let currentPalindrome = currentPortion;
    let palindromeLength = currentPortionLength;

    for (let j = 0; ; j++) {
        const leftCharPosition = reversePosition - j;
        const rightCharPosition = forwardPosition + j;

        if (leftCharPosition >= 0 && rightCharPosition < s.length) {
            if (s[leftCharPosition] === s[rightCharPosition]) {
                palindromeLength += 2;
                currentPalindrome =
                    s[leftCharPosition] +
                    currentPalindrome +
                    s[leftCharPosition];
            } else {
                break;
            }
        } else {
            break;
        }
    }

    return {
        palindrome: currentPalindrome,
        palindromeLength,
    };
};

var longestPalindrome = function (s) {
    let longestLength = 0;
    let longestPalindrome = '';

    if (s) {
        longestLength = 1;
        longestPalindrome = s[0];
    }

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        let previousChar = '';
        let nextChar = '';

        if (i > 0) {
            previousChar = s[i - 1];
        }

        if (i < s.length - 1) {
            nextChar = s[i + 1];
        }

        let findPalindromeResult = {};

        if (nextChar && currentChar === nextChar) {
            // Same characters are a palindrome themselves.
            // Check how many consecutive same characters are present in the string.
            const findSameCharacterPalindromeResult =
                findSameCharacterPalindrome(s, i + 1);

            // Check if the same characters make a different palindrome with some surrounding characters.
            // Start checking from the previous character of the same character palindrome and the next character of the same character palindrome.
            // The same character palindrome will always remain at the middle.
            findPalindromeResult = findPalindrome(
                s,
                findSameCharacterPalindromeResult.palindrome,
                findSameCharacterPalindromeResult.palindromeLength,
                i - 1,
                i + findSameCharacterPalindromeResult.palindromeLength
            );

            // If a different palindrome is present by keeping the same character palindrome at the middle, that will be bigger in length than the same character palindrome.
            if (
                findSameCharacterPalindromeResult.palindromeLength >
                findPalindromeResult.palindromeLength
            ) {
                findPalindromeResult = {
                    palindrome: findSameCharacterPalindromeResult.palindrome,
                    palindromeLength:
                        findSameCharacterPalindromeResult.palindromeLength,
                };
            }

            // No need to check inside the same character palindrome again as the biggest palindrome within this scope has already been determined.
            // Skip to the end of the same character palindrome so that i++ in the loop increases it by 1 and start searching for palindromes from just after the next character of the same character palindrome.
            i += findSameCharacterPalindromeResult.palindromeLength - 1;
        } else if (previousChar && nextChar && previousChar === nextChar) {
            findPalindromeResult = findPalindrome(
                s,
                previousChar + currentChar + nextChar,
                3,
                i - 2,
                i + 2
            );
        }

        if (findPalindromeResult.palindromeLength > longestLength) {
            longestLength = findPalindromeResult.palindromeLength;
            longestPalindrome = findPalindromeResult.palindrome;
        }
    }

    return longestPalindrome;
};

console.log(longestPalindrome('abbbbba'));
