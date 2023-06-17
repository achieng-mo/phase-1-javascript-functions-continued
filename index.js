//define saturdayFun function

function saturdayFun(activity = 'roller-skate'){
    console.log(`This Saturday, I want to', ${activity}`)
}
let activity = 'bathe my dog!'
console.log(saturdayFun(activity))

//function2

function mondayWork(location = 'go to the office'){
    console.log(`This Monday, I will', ${location}`)
}
let location = 'work from home'
console.log(saturdayFun(location))

//function3

function wrapAdjective(initial = '*', initial2 = '||'){
    return function (adjective = 'hard worker'){
        return `You are ${initial} a ${adjective} ${initial}`
    }
    return function (result = "||", adjective2 = 'a dedicated programmer'){
        return `You are ${initial2} a ${adjective2} ${initial2}`
    }
}
//console.log(wrapAdjective()) =>> [Function (anonymous)] ??












