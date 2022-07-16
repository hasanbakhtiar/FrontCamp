// const product = {
//     brand:function(){
//         return "BMW"
//     }
// }

// const product = {
//     brand:(a,b)=>{
//         return a+b
//     }
// }


// const result = 10;
// console.log(product.brand(result,20));



// const a = function(){}


// function info (ad,soyad){
//         this.name = ad;
//         this.surname = soyad;
//         return this.name+this.surname;
// }


// info.prototype.eyecolor = "brown";

// const myInfo = new info('Samir','Israfilov');
// console.log(myInfo.eyecolor);

// ES5 
// function info(){}

// ES6,7 arrow func
// const info =()=>{}

// const info =()=>{
//     return "Hello";
// }
// const myInfo = new info();
// console.log(info());

// class Info{
//     constructor(ad,soyad){
//         this.name = ad;
//         this.surname = soyad;
//         return this.name+ this.surname;
//     }
// }

// const myInfo = new Info("Samir","Israfilov");
// console.log(myInfo.surname); 




class Human{
    constructor(name){
        this.currentName = name;
    }
    calculateAge(time){
            return `Age is: ${new Date().getFullYear() - time} `
    }
}

const infoHuman = new Human("Jhone",20);

console.log(infoHuman.currentName);
console.log(infoHuman.calculateAge(2000));

class Car extends Human{
     sayHi(hiName){
        return `${hiName} my dear`
     }
}

const infoCar = new Car();
console.log(infoCar.calculateAge(2005));
console.log(infoCar.sayHi("Jhon"));



// console.log(new Date());
// console.log(new Date().getFullYear());