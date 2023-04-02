const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

let team = players; // creating reference to players array
let team1 = [...players]; // creating a copy of players array

let cap1 = { ...person }; // creating a copy of person object

export {players,person,team,team1,cap1}
