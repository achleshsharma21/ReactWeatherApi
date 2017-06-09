// var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
//     console.log('forEach', name);
//     //console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// } );

// var returnMe = (name) => name + '!'; //Arrow functions take parents this binding
// console.log(returnMe('Karan'));

// var person = {
//     name: 'Karan',
//     greet: function(){
//         names.forEach(function(name){
//             console.log(this.name + 'says hi! to' + name);
//         });
//     }
// };

// person.greet();


//addStatement
//addExpresiion

var addStatement = (a, b) => {
    return a+b;
}

console.log(addStatement(4,7));
//console.log(add(9,0));

var addExpression = (a,b) => a + b;
console.log(addExpression(3,-2));