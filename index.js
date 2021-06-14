const fs = require("fs");
csv1 = fs.readFileSync("matches.csv");
csv2 = fs.readFileSync("deliveries.csv");
 
var array1 = csv1.toString().split("\r");
var array2=csv2.toString().split("\r");

var string1=array1[0].split(",");
for(let i=1;i<array1.length;i++)
{
string1.push(array1[i].split(","));
}
var string2=array2[0].split(",");
for(let i=1;i<array2.length;i++)
{
string2.push(array2[i].split(","));
}
 var py= require('./peryearmatches.js');
py(string1);
 var pw= require('./peryearwiner.js');
pw(string1);
var et= require('./extrarun.js');
et(string2);
 var ec= require('./economicrun.js');
ec(string2);
