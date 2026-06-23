let a = "apple"
console.log(a);
let item = "pen";
let quantity = 5;
let rate = "10";
let total = quantity * rate;
console.log("total Amount is:" + total)
let cart = [
    {item: "pencil", qty: 10, rate: 3},
    {item: "chips", qty: 5, rate: 3},
    {item: "golisoda", qty: 25, rate: 3}
];

let grandtotal = 0;

console.log("---------- RECEIPT ----------");
console.log("Item      | Qty | Rate | Total");
console.log("------------------------------");

for(let i = 0; i < cart.length; i++) {
    let item = cart[i].item;
    let qty = cart[i].qty;
    let rate = cart[i].rate;
    let itemTotal = qty * rate;
    
    // Bill format lo print cheyyadam
    console.log(item + "  | " + qty + "   | " + rate + "    | " + itemTotal);
    
    grandtotal += itemTotal;
}

console.log("------------------------------");
console.log("Grand Total          : " + grandtotal);
console.log("------------------------------");
console.log(".....Additions......")
let c = 50;
let d = 10;
console.log("Result is:", c + d);
console.log("....Assignment ante.....")//+,-,*,/ veenite assignment antaru
console.log("..comparision opratiors....")
let itemquantity = 5;
if (itemquantity > 3)
{
    console.log("meeku discount vostadi");
}
else{
    console.log("meeku discount raadu");
}
console.log("..logical operations..");
let itemlist = 10;
let itemrate = 7
if (itemlist > 9 && itemrate > 6  )
{
    console.log(" congrats! your are elegible for discount ")
}
else
{
    console.log("Sorry! your are not eligible for discount ")
}
// now chapter is control and conditional statement
let ind = 157;
let pak = 146
if(pak > ind){
    console.log("Congrats! Pakistan won the match")
}
else if(pak == ind){
console.log("Match is tie")
}
else{
    console.log("india won the mathch")
}
let cameToSchool = true;
let homeworkDone = false;

if (!cameToSchool) {
    console.log("Leave pettandi.");
} else if (homeworkDone) {
    console.log("Homework submit cheyyandi.");
} else {
    console.log("Reason cheppandi.");
}
let marks = 90;
if( marks >=90  ){
console.log ("Grade A");}
else if(marks >=75){
console.log("Grade B")
}
else if (marks <= 50){
    console.log("Grade C")
}
else{
    console.log("Fail")
}
let fruit = "Banana";
let price;
switch(fruit){
    case "Apple":
    price = 60
    break;
    case "Mango":
    price = 90
    break;
    case  "Grape":
    price = 150
    break;
    case "Straberry":
    price = 350
    break;
    default:
    price =" Not available";

}
console.log("Fruit price per kg is:", price )
// e roju for loop class
for (let y = 1; y<=5; y++){
    console.log("Number is :"+y);
}
let rates = [
    {Ornament: "Gold;", Qty: 100, rate: 13500},
    {Ornament: "Silver", Qty: 50, rate: 1100},
    {Ornament: "Diamond", Qty: 20, rate: 18500}
    ]
for(let y =0; y <rates.length; y++){
    let name = rates[y].Ornament;
    let Qty = rates[y].Qty;
    let rate = rates[y].rate;
    let total = Qty * rate;
    console.log(name + "| "+ Qty +"" |"+ rate +" | total)

    
}


let x = 1;

while(x <= 3){
    console.log(x);
    x++;
}
let n = 2;

for(let i = 1; i <= 3; i++){
    n = n * 2;
    n = n * 2;
}

console.log(n);

for (let z = 1; z<=10; z++){
    console.log("10x" + z + "=" +(z*1));
}
odd = 1
for(let odd = 1; odd<=3; odd++){
    odd = odd + 1;
    odd = odd + 2;
    odd = odd + 3;

}
console.log(odd);
for(let num = 1; num<=5; num++){
    console.log(num);
}
for (let rev = 10;  rev>=1; rev--){ 

console.log(rev)
}; 
//odd number raavataniki syntax
let oddnum = 1
for (let oddnum = 1; oddnum<=9; oddnum+=2 ){
    console.log(oddnum);
}
let print = 3
console.log("print cost is: ", print * 10);
// even number raavataniki syntax

let even = 2
for(even = 2; even<=10; even +=2){
    console.log(even);
}
// deeni ans reverse lo vostali like 5 4 3 2 1 (edi while loop)
let w = 5;

while (w >=1){

console.log(w);

w--;

}

let xy = 1;

while (xy < 10) {
    console.log(xy);
    xy = xy + 3;
}
let fruits = ["Blue Berry", "Straberry", "Rasberry"];
console.log(fruits[0]); // edi output vochesi blue berry endukante array lo zero nunchi start avuddi
fruits.push("Orange")// push means last lo add cheyatam
console.log(fruits[3]);
fruits.pop() // ikkada pop raasinam kabatti original print lo orange anedi raadu
console.log(fruits);// ekkada malli call chesinam kabatti orange dislplay ledu
fruits.unshift("Grapes");// edi vochesi first lo add cheyataniki
console.log(fruits);// ela raste add ayindo ledo telustundi
fruits.shift();// ela raaste first item delete avataniki
console.log(fruits);
let colours = ["Red", "Green", "Blue", "Yellow"];
colours[1] = "Purple";
console.log(colours.length);
fruits.splice(1,1, "Kiwi"); // ekkada first ante start index, taravata 2 items  delete cheyatam
console.log(fruits)
let fooda = "chapathi"
let foodb = "rice"
console.log(fooda);
let queue = ["Suresh", "Ramesh"];
queue.push("Naresh")
queue.shift();
queue.unshift("Mahesh");
console.log(queue);
let onqueue = ["Nani", "Balu", "Chanti"];
onqueue.push("Srinivas");
onqueue.shift();
console.log(onqueue);
let lunch = ["Rice", "Dal", "Curd"];
lunch.unshift("Chicken Biryani");
lunch.pop();
console.log(lunch);
let score = [10,20,30];
score.pop();
score.unshift(30);
console.log(score);
score.splice(1,1,"80")
console.log(score)
let weekmenu = ["Rice", "Pappu", "Sambar", "Chicken Biryani", "Mutton Biryani"];
let weekendspl = weekmenu.slice(3,5); // slice valla just manaki am kavalo avi teesukovatam
// slice lo 3rd to 5th item madyalo 3rd and 4th varaki manam pick chesukovataniki slice vadatam
console.log(weekmenu);
console.log(weekendspl);
// next topic includes()
let passengers = ["Ramu", "Paparao", "Subba Rao", "Venkat Rao"];
let check1 = passengers.includes("Paparao"); //out put just true ani vostadi
console.log(check1);
let check2 = passengers.includes("Apparao"); // out put just false ani vostadi
console.log(check2);
let penscompany = ["doms", "ox", "flair", "unomax"];
console.log(penscompany.indexOf("flair"));// indulo ans vunte index no cheptadi
console.log(penscompany.indexOf("Hauser"));// indulo and lekapothe -1 ani ans estadi
//js lo for of loop class ippudu type chesedi
let stationeryitems = ["Book", "Sharper", "Clay"];
for (let bookitems of stationeryitems ){
console.log(bookitems);
}






