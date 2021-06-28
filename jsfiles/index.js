const fs = require("fs");
var Promise = require('promise');
const extrarun = require("./extrarun.js");
const peryearmatches = require("./peryearmatches.js");
const peryearwiner = require("./peryearwiner.js");
csv1 = fs.readFileSync("matches.csv");
csv2 = fs.readFileSync("deliveries.csv");
try{ 
if(csv1)
 {
   
        let array1 = csv1.toString().split("\r");
        var string1=array1[0].split(",");
for(let i=1;i<array1.length;i++)
{
string1.push(array1[i].split(","));
}
     }
 
 else{
     throw "error in importing matches.csv file"
 }  
}
catch(err){
console.log(err);
}
try{
if(csv2)
{
let array2=csv2.toString().split("\r");


var string2=array2[0].split(",");
for(let i=1;i<array2.length;i++)
{
string2.push(array2[i].split(","));
}
}
else{
    throw "error in importing deliveries.csv file"
}
}
catch(err)
{
    console.log(err);
}
try {
 let peryearmatchesfunction= require('./peryearmatches.js');
if(peryearmatchesfunction)
{
/* peryearmatchesfunction(string1,4).then(function(){
     console.log("Successfully calculated count of per year matches")
 }).catch(function(){ 
    console.log("Failed to calculate count of per year matches");
});*/
}
else{
    throw "error peryearmatches file not found";
}
}
catch(err)
{
    console.log(err);
}
try{
 let peryearwinnerfunction= require('./peryearwiner.js');
if(peryearwinnerfunction)
{
 /*peryearwinnerfunction(string1,4).then(function(){
     console.log("Successfully calculated count of per year winner teams")
 }).catch(function(){
    console.log("Failed to calculate count of per year winner teams");
});*/
}
else{
    throw "error peryearwiner file not found"
}
}
catch(err)
{
    console.log(err);
}
try{
let extrarun= require('./extrarun.js');
if(extrarun)
{
/*extrarunfunction(string2,4).then(function(){
console.log("Successfully calculated extra run of player")
}).catch(function(){
    console.log("Failed to calculate extra run of player");
});*/
}
else{
    throw "error extrarun file not found"
}
}
catch(err)
{
    console.log(err);
}
try{

 let top10economicbowler= require('./top10economicbowler.js');
 if(top10economicbowler)
 {
/*ec(string2,4).then((message) => {
    console.log("successfully calculate top 10 bowler");
}).catch((message) =>{
    console.log("Failed in calculate top 10 bowler");
});*/
 }
 else
 {
     throw "top10economicbowler file not found"
 }
}
catch(err)
{
  console.log(err);
}
Promise.all(top10economicbowler(string1,4),peryearmatches(string1,4),peryearwiner(string1,4),extrarun(string1,4)).then(results =>{console.log("All function run succesfully")}).catch(error =>{console.log("Failed! All function not run succesfully")});