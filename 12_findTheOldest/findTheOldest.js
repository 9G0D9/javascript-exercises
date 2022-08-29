const findTheOldest = function (array) {

    let ages = [];
    let oldest = { name: '', age: 0 };

    


    for (let i = 0; i < array.length; i++) {
        ages[i] = {};
        ages[i].name = array[i].name

        if (array[i].yearOfDeath === undefined) {
            
            ages[i].age = 2022 - array[i].yearOfBirth;
        }
        else{
            ages[i].age = array[i].yearOfDeath - array[i].yearOfBirth;}

    }
    oldest = { name: '', age: 0 };
    for (let j = 0; j < ages.length; j++) {
        if (ages[j].age > oldest.age) {
            oldest = ages[j];
        }
    }

    return oldest;

}


// Do not edit below this line
module.exports = findTheOldest;
