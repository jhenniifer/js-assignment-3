let items = ['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']

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
  
