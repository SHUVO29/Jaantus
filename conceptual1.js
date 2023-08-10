


// var x = 5;
// var y = 10;
// var z = x+y;

// console.log(z)  



// var arr = [10, 15, 20, 30]
// console.log(arr.length)
// var num1 = arr[0]

// console.log(num1)

// var hasan = ["sadia","nadia"]
// hasan.push("jorina")
// hasan.push("sokina")


// console.log(hasan)

// var ex = hasan.pop()
// hasan.pop()

// console.log(hasan)
// console.log(ex)


// var age = 25;

// if(age >= 18){
//     console.log("you r adulttttts")
// }else{
//     console.log("tumi baccha aco")
// }


// var mark = 17;

//  if(mark >= 80){
//     console.log("you got A+")
//  }else if(mark >= 70){
//     console.log("you got A")
//  }else if(mark >= 60){
//     console.log("you got B")
//  }else if(mark >= 50){
//     console.log("you got C")
//  }else if(mark >= 40){
//     console.log("you got D")
//  }else {console.log("you got F")
//  }
 
// var temperature = 25;
// var isRaining = true;

// if(temperature > 30){
//     console.log("It is a hot day");
//     if(isRaining === true){
//         console.log("but it is raining")
//     }else{
//         console.log("It is not raining")
//     }
// }else{
//     console.log("It is a cold day");
//     if(isRaining){
//         console.log("but it is raining")
//     }else{
//         console.log("and it is not raining")
//     }
// }


// var i = 0;

// while(i <= 10) {
//     console.log("I am sorry");
//     i++;
// }


// var i = 1;
// while(i <= 20) {
//     console.log("i am sorru.....",i);
//     i++;
//     // i = i + 1;
// }
 
// for(var x = 1; x<= 10; x++){
//     console.log("i am sorry .....",x);
// }





var arr = [10, 20, 30, 40, 50];
// console.log(arr.indexOf(400))


// var x =0;
// while(x<arr.length){
//     console.log(arr[x]);
//     x++
// }

// for (var i = 0; i < arr.length; i++){
//     if(arr[i] === 30){
//         break;
//     }
//     console.log(arr[i])
// }



// for(var i = 0; i < arr.length; i++ ){
  
//     if(arr[i] === 30){
//         continue;
//     }
//       console.log(arr[i])
// }


// comparison operator


// var x = '5';

// if(x === '5'){
//     console.log('equal to 5')   
// }else{
//     console.log('not equal to 5')
// }


// var raining = true;
// var umbrella = false;

// if(raining == true && umbrella == true){
//     console.log('baire jabo')
// }else{
//     console.log('baire jabo na')
// }

// var raining = true;
// var umbrella = false;

// if(raining === false || umbrella === true){
//     console.log('baire jabo')
// } else{
//     console.log('jabona baire')
// }

// %modulas


// var x = 51;
// var y = 5;

// console.log(x/y)

// var remain = x % y;
// console.log(remain);

// abul vai biye korbe , per bus 50 , per car 11, bad baki jabe riksay per person 70

// var peoples = 176;

// var peopleForCar = peoples % 50 ;
// var peopleForRiksaw = peopleForCar % 11;

// var totalVara = peopleForRiksaw * 70

// console.log(totalVara)


// ternary operator

// var raining = true;

// if(raining === true){
//     console.log("baire jabona");
// }else{
//     console.log("baire jabo")
// }

// raining === true ? console.log('baire jabona') : console.log("baire jabo")

// nested condition
var age = 25;
var hasLicence = false;

if (age >= 18){
    if(hasLicence === true){
        console.log('ADULT WITH LICENCE')
    }else{
        console.log("adult but has no licence")
    }
}else{
    console.log("You r not adult")
}

age >= 18 ? hasLicence === true ? console.log('ADULT WITH LICENCE') : console.log('adult but has licence') : console.log("you r not adult")






