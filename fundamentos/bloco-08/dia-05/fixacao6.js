const greeting = (user = 'Insira um nome') => console.log(`Welcome ${user}!`);

// greeting(); // Welcome Insira um nome!

const multiply = (number, value = 1) => {
  return number * value
};

// console.log(multiply(8)); // 8