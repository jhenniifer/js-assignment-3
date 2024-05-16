let items = ['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM',]

//number one
function checkDataType(){
for(let i of items){
  console.log(typeof i)
  return i
}
}

checkDataType()

 //number two
function reverseItems(){
    let copiedItems = items.slice()
    //console.log(copiedItems)
   let revitem = items.reverse()
   console.log(revitem)
    return revitem
}
reverseItems()

//Number three
 
let numbers = [1,2,3,4,5,6,7,8,9,10]
function sumOfEven(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i +=2){
    sum += i
  }
  console.log(sum)
  return sum
}
sumOfEven(numbers)

//number four
function modifyArray(array){
  
}


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
  }

  //number five
  for (let x in users){
    console.log(`${x}`)
  }

  //number six
  for(let y in users){
    console.log(users[y])
  }

  //number seven
  
