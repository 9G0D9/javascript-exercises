const palindromes = function (str) {

    let reversedString='' ;
    let normalString='';
    let alphabet=['a','b' , 'c' , 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    for (let i=0 ; i<str.length ; i++){
        if (alphabet.indexOf(str[i].toLowerCase())>-1){
            normalString+=str[i].toLowerCase();
        }
    }

    for (let i=(normalString.length -1) ; i>=0 ; i--){
        reversedString+=normalString[i] ;
    }

    return normalString === reversedString ;

};

// Do not edit below this line
module.exports = palindromes;
