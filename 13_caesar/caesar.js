const caesar = function (str, numb) {

    let encodedStr = '';
    let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    if (numb<0){
        numb=26+numb ;
    }

    if (numb > 26) {
        numb = numb % 26;
    }

    for (let i = 0; i < str.length; i++) {

        if (ALPHABET.indexOf(str[i]) !== -1) {

            let index = (ALPHABET.indexOf(str[i]) + numb) % 26;
            encodedStr += ALPHABET[index];
        }

        else if (alphabet.indexOf(str[i]) !== -1) {

            let index = (alphabet.indexOf(str[i]) + numb) % 26;
            encodedStr += alphabet[index];
        }

        else {
            encodedStr += str[i]
        }

    }

    return encodedStr;

};

// Do not edit below this line
module.exports = caesar;
