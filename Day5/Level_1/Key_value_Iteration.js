let car = {brand:"Toyota",model:"Corolla",year:"2020"};
let car_info = "";
for(let i in car){
    car_info += car[i] + " ";
}
console.log(car_info)