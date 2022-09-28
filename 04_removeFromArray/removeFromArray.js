const removeFromArray = function(oldArray, ...values) {
    const newArray = [];
    oldArray.forEach(item => {
        values.forEach(value => {
            if(item !== value){

                // If the new array doesn't have the item already 
                // (because it has been added at a previous value check)
                // AND the item is NOT in the values to be removed array
                // (even if it isn't equal to the currently checked value)
                
                if (!newArray.includes(item) && !values.includes(item)){
                    newArray.push(item); 
                } 
            }
        });        
       });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
