const getParens = (result, s, open, close, n) => {
    if (open === n && close === n) {
        result.push(s);
        return;
    }

    if (open < n) {
        getParens(result, s + '(', open + 1, close, n);
    }

    if (close < open) {
        getParens(result, s + ')', open, close + 1, n);
    }
};

var generateParenthesis = function (n) {
    const result = [];
    getParens(result, '', 0, 0, n);
    return result;
};

console.log(generateParenthesis(4));
