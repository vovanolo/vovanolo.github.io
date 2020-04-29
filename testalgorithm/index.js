let available = [100, 2, 305];
let allowed = [100, 2, 305];
let preferred = [3];

// код який закоментований можна використовувати якщо дані потрібно зчитувати з клавіатури
// let inputavailable = prompt('введіть значення через пробіл');
// let inputallowed = prompt('введіть дозволені значення через пробіл');
// let inputpreferred = prompt('введіть біжані значення через пробіл');

// available = inputavailable.split(' ');
// allowed = inputallowed.split(' ');
// preferred = inputpreferred.split(' ')

// Відсортую усі три масиви по зростанню
available.sort((a, b) => a - b);
allowed.sort(function (a, b) {
    return a - b;
});
preferred.sort(function (a, b) {
  return a - b;
});

console.log(available);
console.log(allowed);
console.log(preferred);

function attempt(a, b, c) {
  // порівняю масив вхідний з дозволеним щоб відсіяти непотрібні значення
  let result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        result.push(b[j]); // якщо немає співпадінь буде пустий масив
      }
    }
  }
  let finres = [...new Set(result)]; // робимо вихідний масив щоб виводився без повторень
  console.log(дозволені значення: ${finres}); // виводимо масив дозволених значень для зручності

  //порівняю значення які пройшли перевірку із бажаними щоб відслідкувати співпадіння
  let finalarr = [];
  for (let i = 0; i < finres.length; i++) {
    for (let j = 0; j < c.length; j++) {
      if (finres[i] == c[j]) {
        // перевіряємо співпадіння із бажаними значеннями, у випадку не співпадіння отримаємо пустий масив
        finalarr.push(finres[i]);
      }
    }
  }

  // Шукаємо найближчі значення
  if (finalarr.length <= 0) {
    let lessThen = [];
    let moreThen = [];

    // Шукаємо значення які є більшими за бажані
    for (let i = 0; i < finres.length; i++) {
      for (let j = 0; j < c.length; j++) {
        if (finres[i] > c[j]) {
          moreThen.push(finres[i]);
          break;
        }
      }
    }

    // Якщо більших немає то шукаємо менші
    if (moreThen.length <= 0) {
      for (let i = 0; i < finres.length; i++) {
        for (let j = 0; j < c.length; j++) {
          if (finres[i] < c[j] && moreThen.length <= 0) {
            lessThen.push(finres[i]);
          }
        }
      }
    }

    if (lessThen.length > 0) {
      // Якщо є менше найближче значення то додаємо його до фільного масиву
      finalarr = lessThen[lessThen.length - 1];
    } else if (moreThen.length > 0) {
      // Якщо є більше найближче значення то додаємо його до фільного масиву
      finalarr = moreThen[0];
    }
  }

  console.log(`фінальні значення: ${finalarr}`); // виводимо результати нашого алгоритму
}

attempt(available, allowed, preferred);
