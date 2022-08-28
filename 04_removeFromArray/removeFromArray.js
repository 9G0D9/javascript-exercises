const removeFromArray = function (array) {

    for (let i=1 ; i< arguments.length ; i++){

        let index=array.indexOf(arguments[i]) ;

        if (index!=-1){

            array.splice(index, 1);
        }
        else continue ;
    }
    
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
