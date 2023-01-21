
//      Main objectiv
//      Make an object that conains: number, string, boolean, function and array

let backPack = {
    owner: "Ali",
    size: "medium",
    sidePockets: 2,
    zippers: 2,
    waterProof: false,
    items: ["pencil", "calculator", "books"],
    canFit(objectSize){
        if (typeof objectSize === "string"){
            if (objectSize === "Small"){
                console.log("it shall fit");
            } else if (objectSize === "Medium"){
                console.log("Maybe... try it");
            } else {
                console.log("nah i dont think so");
            }
        } else {
            console.warn("please write either: Small, Medium, Large");
        }
    }
}



//  Objective 2         
// display a object in a page " i tried my best" . The actual code is further down
const bus01 = {
    number: 02,
    size: "mini",
    wheels: 6,
    seats: 11,
    color: "green",
    startTime: "11:30",
    rout: 36,
};
const bus02 = {
    number: 12,
    size: "mini",
    wheels: 6,
    seats: 11,
    color: "yellow",
    startTime: "11:40",
    rout: 21,
};
const bus03 = {
    number: 22,
    size: "mini",
    wheels: 6,
    seats: 11,
    color: "red",
    startTime: "11:50",
    rout: 28,
};

let busList = [
    bus01,
    bus02,
    bus03,
]


let searchBus = 22;
let foundBus = busList.find(function (jeff){
    return jeff.number === searchBus;
});

console.log(foundBus);



//      i coulsnt figuer out how to display all properties in an object and not just: {object, Object}
//      so i had to make a for loop to try to display actual values but thet exclided the keys
//      now it will only show the values which is not what i wanted 

//  when you press busButt it will display the bus01 object
const busButt = document.querySelector(".butt-show-buss").addEventListener("click", showBus);
let myBus = "";
function showBus() {
    for (let i in bus01){
        myBus += bus01[i] + " ";
    };
    document.querySelector(".buss-list").innerHTML = myBus;
} 
    





