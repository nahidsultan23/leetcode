var lengthOfLongestSubstring = function (s) {
    const A = [];
    let firstPosition = 0;
    let biggestLength = 0;

    if (s) {
        biggestLength = 1;

        for (let i = 0; i < s.length; i++) {
            if (A[s[i]]) {
                if (A[s[i]].position >= firstPosition) {
                    firstPosition = A[s[i]].position + 1;
                }
            }

            A[s[i]] = {
                position: i,
            };

            const length = i - firstPosition + 1;
            if (length > biggestLength) {
                biggestLength = length;
            }
        }
    }

    return biggestLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
