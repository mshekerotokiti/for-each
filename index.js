
const names = ['sharon','zack','david', 'jane'];
names.forEach(myFunction)
function myFunction(names , index ){
    console.log(`Name:${names}, is at index ${index}`);
}

const age = [10, 15, 28, 3];
const currentAge = [];

age.forEach(function (ages){
       currentAge.push(age + 5);
});
console.log(currentAge);


//iterating through objects
const objMenu = {
    monday: 'Chapati',
    tuesday: 'pilau',
    wednesday: 'matoke'
};
Object.values(objMenu).forEach(values => {
    console.log(values);
});