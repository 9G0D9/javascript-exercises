const getTheTitles = function(array) {
    books=[] ;
    for (let i=0 ; i< array.length;i++){
        books[i]=array[i].title ;
    }
    return books ;
};

// Do not edit below this line
module.exports = getTheTitles;
