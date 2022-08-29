const fibonacci = function(member) {

    let fibArray=[1,1] ;

    if (member<=0) return 'OOPS'

    if (member>2){
        for (let i=2; i<member ; i++){
            fibArray[i]=fibArray[i-1]+fibArray[i-2];
        }
        
    }
    return fibArray[member-1]

};

// Do not edit below this line
module.exports = fibonacci;
