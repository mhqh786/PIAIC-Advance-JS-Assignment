var userName = "Muhammad Hassan";

function modifyUserName() {
        userName = "Kamran Hassan";
    };

function showUserName() {
        alert(userName);
    };

alert(userName); // display Muhammad Hassan

modifyUserName();
showUserName();// display Kamran Hassan


// ----------------------------

var age = 100;
function go(){
 var age = 200;
 var hair =  'black';
 console.log(age);
 console.log(hair);
}
go();
console.log(age);

// OUTPUT  200 
// OUTPUT  black 
// OUTPUT  100 