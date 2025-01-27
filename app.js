const username = 'David';

function greet(username) {
  if (!username) return console.log("Please provide your username");
  console.log(`Hello, ${username}!`);
}

greet(username);
