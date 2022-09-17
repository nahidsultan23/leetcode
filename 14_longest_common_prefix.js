const getCommonPrefix = (str, prefix) => {
    const prefixLength = prefix.length;
    const slicedStr = str.slice(0, prefixLength);
    let result = '';

    if (slicedStr === prefix) {
        result = prefix;
    } else {
        if (prefixLength > 1) {
            const newPrefix = prefix.substring(0, prefixLength - 1);
            result = getCommonPrefix(str, newPrefix);
        }
    }

    return result;
};

var longestCommonPrefix = function (strs) {
    let smallestStr = strs[0];
    let smallestLength = strs[0].length;
    let smallestStrPosition = 0;
    let commonPrefix = strs[0];

    if (strs.length > 1) {
        for (let i = 1; i < strs.length; i++) {
            const strLength = strs[i].length;

            if (strLength < smallestLength) {
                smallestStr = strs[i];
                smallestLength = strLength;
                smallestStrPosition = i;
                commonPrefix = strs[i];
            }
        }
    }

    strs.splice(smallestStrPosition, 1);

    for (const str of strs) {
        commonPrefix = getCommonPrefix(str, commonPrefix);

        if (!commonPrefix) {
            break;
        }
    }

    return commonPrefix;
};

const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
