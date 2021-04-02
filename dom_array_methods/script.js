const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

// Double eveyones money
function doubleMoney() {
    data = data.map(user => {
      return { ...user, money: user.money * 2 };
    });
  
    updateDOM();
  }

  // Sort users by richest
function sortByRichest() {
    console.log(123);
    data.sort((a, b) => b.money - a.money);
  
    updateDOM();
  }
  
  // Filter only millionaires
  function showMillionaires() {
    data = data.filter(user => user.money > 1000000);
  
    updateDOM();
  }