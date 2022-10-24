const checkAvailability = (haystack, needle, i) => {
    let matched = false;
    let insideMatchPosition = 0;
    let checkedPosition = 0;

    for (let j = 0; j < needle.length; j++) {
        if (insideMatchPosition === 0 && haystack[i + j] === needle[0]) {
            insideMatchPosition = j;
        }

        if (haystack[i + j] !== needle[j]) {
            break;
        } else if (j === needle.length - 1) {
            matched = true;
        }

        checkedPosition = j;
    }

    return {
        matched,
        insideMatchPosition,
        checkedPosition,
    };
};

var strStr = function (haystack, needle) {
    const needleFirstChar = needle[0];
    let result = -1;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needleFirstChar) {
            const { matched, insideMatchPosition, checkedPosition } =
                checkAvailability(haystack, needle, i);

            if (matched) {
                result = i;
                break;
            }

            if (insideMatchPosition > 0) {
                i += insideMatchPosition - 1;
            } else {
                i += checkedPosition;
            }
        }
    }

    return result;
};

const haystack = 'mississippi';
const needle = 'pi';
console.log(strStr(haystack, needle));
