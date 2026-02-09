if ("0") {
    alert( 'Hello' );
}
// Will alert be shown? Yes

let name = prompt("What is the 'official' name of JavaScript?", '');
(name == "ECMAScript") ? alert("Right!") : alert("You don't know? 'ECMAScript'!");

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? 'Below' : 'Over';

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message = (login == 'Employee') ? 'Hello' : 
              (login == 'Director') ? 'Greetings' : 
              (login == '') ? 'No login' : 
              '';


let num = +prompt("Enter the number", '');
if(num > 0) alert(1);
else if(num < 0) alert(-1);
else alert(0);