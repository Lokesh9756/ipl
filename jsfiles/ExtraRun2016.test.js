//import function file
var TestFunction= require('./ExtraRun2016')
const fs = require("fs");
const { string } = require('yargs');
//Fetch data from data file 
CsvObject = fs.readFileSync("data/deliveries.csv");
try{
    if(CsvObject)
    {
      //convert csv object to string
        var TempArray = CsvObject.toString().split("\r");
        var InputDataForTest=TempArray[0].split(",");
        for(let i=1;i<TempArray.length;i++)
        {
        InputDataForTest.push(TempArray[i].split(","));
        }
        
    }
    else{
        throw "error in importing data from csv file";
    }
}
catch(err)
{
    console.log(err);
}
//Test case to test null value
test('test case for null input', () => {
    return TestFunction(InputDataForTest,1).then(data => {
      expect(data).toEqual(!null);
    });
  });
  //Test case to test undefined value
  test('Test case for undefined input', () => {
    return TestFunction(InputDataForTest,2).then(data => {
      expect(data).toEqual(!undefined);
    });
  });
  //Test case to test correct value
  test('Test case for correct input', () => {
    return TestFunction(InputDataForTest,3).then(data => {
      expect(data).toEqual(true);
    });
  });
  //Test case to test incorrect value
  test('Test case for incorrect input', () => {
    return TestFunction(5,3).then(data => {
      expect(data).toEqual(!string);
    });
  });
  //Test case for test function output
  test('Test case for check output number of player who takes extra run', () => {
    return TestFunction(InputDataForTest,4).then(data => {
      expect(data.length).toEqual(18);
    });
  });