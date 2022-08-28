const reverseString = function (string) {

    let inversedString = ''

    for (let i = string.length - 1; i >= 0; i--) {

        inversedString+=string[i] ;
    }

    return inversedString ;

};

// Do not edit below this line
module.exports = reverseString;
