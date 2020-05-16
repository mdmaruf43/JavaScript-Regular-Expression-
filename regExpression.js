console.log('Hello Awesome People');
let re = /Maruf/; 
re = /Marf/g;
//re = /Maruf/i; 

let str = 'My name is Maruf. Maruf is programmer.'

//1. exce() ---
let result = re.exec(str);
console.log(result);

result = re.exec(str);
console.log(result);


//2. text() -- 

let result = re.test(str);
console.log(result);

//3. match()
let result = str.match(re);
console.log(result);

//4. search() 

let result = str.search(re);
console.log(result);

//5. replace()

let result = str.replace(re, 'Rajib');
console.log(result);