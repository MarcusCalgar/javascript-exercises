const sumAll = function(num1, num2) {
    let result = 'ERROR';
    if((typeof num1 =='number' && num1 > 0) && (typeof num2 == 'number' && num2 > 0)){
        result = 0;
        if(num1 > num2){
            for(num2; num2 <= num1; num2++){
                result += num2;
            }
        } else {
            for(num1; num1 <= num2; num1++){
                result += num1;
            }
        }
        return result;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
