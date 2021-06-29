const fs = require("fs");
var Promise = require('promise');
//import matcches data from  matches csv file
Csv1 = fs.readFileSync("/home/lokesh/Desktop/ipl/data/matches.csv");
//import deliveries data from deliveries data file
Csv2 = fs.readFileSync("/home/lokesh/Desktop/ipl/data/deliveries.csv");
  try
  { 
    if(Csv1)
     {
   //convert matches csv object data into string
     let Array1 = Csv1.toString().split("\r");
     var string1=Array1[0].split(",");
     for(let i=1;i<Array1.length;i++)
      {
        string1.push(Array1[i].split(","));
      }
     }
      else
       {
         throw "error in importing matches.csv file"
       }  
   }
    catch(err)
     {
       console.log(err);
     }
try
 {
  if(Csv2)
    {
    //convert deliveries csv object data into string
     let Array2=Csv2.toString().split("\r");
     var string2=Array2[0].split(",");
      for(let i=1;i<Array2.length;i++)
        {
          string2.push(Array2[i].split(","));
        }
 }
    else
    {
      throw "error in importing deliveries.csv file"
    }
 }
  catch(err)
    {
      console.log(err);
    }
 try 
  {
    //import function file peryearmatches
     var PerYearMatchesFunction= require('./PerYearMatches.js');
     if(PerYearMatchesFunction)
       {
         console.log("Peryearmatches function file fetch succesfully");
       }
     else
       {
        throw "error peryearmatches file not found";
       }
  }
 catch(err)
    {
      console.log(err);
    }
try
   {
     //import function file peryearwinner
     var PerYearWinnerFunction= require('./PerYearWinner.js');
     if(PerYearWinnerFunction)
       {
         console.log("Peryearwinner function file fetch succesfully");
       }
      else
       {
         throw "error peryearwiner file not found"
       }
    }
 catch(err)
    {
     console.log(err);
    }
try
 {
   //import function file extrarun2016
   var ExtraRunFunction= require('./ExtraRun2016.js');
   if(ExtraRunFunction)
     {
       console.log("Extrarun function file fetch succesfully");
     }
    else
      {
        throw "error extrarun file not found"
      }
 }
  catch(err)
    {
      console.log(err);
    }
try
  {
    //import top10economic bowler function file
    var Top10EconomicBowlerFunction= require('./Top10EconomicBowler2015.js');
    if(Top10EconomicBowlerFunction)
     {
      console.log("Top10economic bowler function file fetch succesfully");
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
  //call all function by using promise all
Promise.all(PerYearMatchesFunction(string1,4),PerYearWinnerFunction(string1,4),ExtraRunFunction(string2,4),Top10EconomicBowlerFunction(string2,4)).then(results =>{console.log("All function run succesfully")}).catch(error =>{console.log("Failed! All function not run succesfully")});