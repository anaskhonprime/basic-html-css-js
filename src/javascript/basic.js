
/*****   Getting random number between  two values     *******/

function getRandomNumber (min, max) {
    return Math.random() * (max-min) + min;
}

console.log(getRandomNumber(1,20));




/*****   Getting integer random number between  two values     *******/

function setRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.random() * (max- min) + min; 
}

