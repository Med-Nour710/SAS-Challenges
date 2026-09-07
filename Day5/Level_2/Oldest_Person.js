//Oldest Person: Given an array of person objects (each with a name and age),
// write a function to find and return the name of the oldest person.
const people_array = [{name:"Mohamed",age:21},
                        {name:"Hatim",age:20},
                        {name:"Saad",age:23},
                        {name:"Adam",age:30},
                        {name:"Hemza",age:27}
                        ];
  function oldest_person(array) {

    let oldestAge = array[0].age;
    let oldestName = array[0].name ;

            for(let i =0;i < array.length;i++){
                 if(oldestAge < array[i].age )
            {
                oldestAge = array[i].age
                oldestName = array[i].name;
            }
        }
    return oldestName
    }
    console.log(oldest_person(people_array))