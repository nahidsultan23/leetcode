var isValid = function (s) {
    let stringLength = s.length;

    let A = [];
    let j = 0;

    let result = false;
    let broke = false;

    if (!stringLength) {
        result = true;
    } else if (!(stringLength % 2)) {
        for (let i = 0; i < stringLength; i++) {
            let bracket = s[i];

            if (bracket === '(' || bracket === '{' || bracket === '[') {
                A[j] = bracket;
                j++;
            } else {
                if (j > 0) {
                    if (bracket === ')') {
                        if (A[j - 1] === '(') {
                            j--;
                        } else {
                            broke = true;
                            break;
                        }
                    } else if (bracket === '}') {
                        if (A[j - 1] === '{') {
                            j--;
                        } else {
                            broke = true;
                            break;
                        }
                    } else {
                        if (A[j - 1] === '[') {
                            j--;
                        } else {
                            broke = true;
                            break;
                        }
                    }
                } else {
                    broke = true;
                    break;
                }
            }
        }

        if (!(broke || j)) {
            result = true;
        }
    }

    return result;
};

console.log(isValid('()'));
