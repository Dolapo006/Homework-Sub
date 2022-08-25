const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//Every//////

// 1. 
for (let i = 0; i <= nums.length; i++) {
    if (nums[i] >= 0) {
        console.log(nums[i])
    }
}


// 2. 

for (let i = 0; i < panagram.length; i++) {
    let pana = panagram[i]
    if( panagram[i].length < 8) {
        console.log('It is less than eight')
    }
}

//Filter

// 1. 

const lessThan = nums.filter(number => number < 4);
console.log(lessThan)

//2. 

const even = panagram.filter(word => word % 3 !== 0 ) 
console.log(even)


//Find

// 1. 
const find = nums.find(num => num % 5 == 0);
console.log(find)

// 2. 
const found = panagram.find(word => word > 5);
console.log(found); 

//Find Index

// 1. 
const divideThree = (number) => number % 3 === 1;
console.log(nums.findIndex(divideThree));

// 2.
const findWord = (word) => word < 2;
console.log(panagram.findIndex(findWord))

const multiplyThree = [];
nums.forEach(function(number, index) {
    multiplyThree[index] = number * 3
})

let newWords = new Word(panagram.length);
for(i = 0; i < panagram.length; i++) {
    newWords[i] = '!' + Word[i]
}
console.log(newWords)