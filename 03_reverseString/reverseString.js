const reverseString = function(string) {
    let lengthOfString = string.length;
    let newStringHolder = [];
    while(lengthOfString >= 0){
        newStringHolder.push(string.charAt(lengthOfString--));
    }
    return newStringHolder.join("");
};

// Do not edit below this line
module.exports = reverseString;
