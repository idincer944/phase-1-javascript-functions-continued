// code your solution here
function saturdayFun(arg) {
    if(!arg) {
        return "This Saturday, I want to roller-skate!";
    } else {
        return `This Saturday, I want to ${arg}!`;
    };
};

function mondayWork(arg) {
    if(!arg) {
        return "This Monday, I will go to the office.";
    } else {
        return `This Monday, I will ${arg}.`;
    };
};

function wrapAdjective(arg1) {
    if(arg1 === "*"){
       return function(arg2) {
            return `You are *${arg2}*!`;
        };
    } else {
        return function(arg2) {
            return `You are ||${arg2}||!`;
        };
    };
};

console.log(wrapAdjective("||")("hard worker"))