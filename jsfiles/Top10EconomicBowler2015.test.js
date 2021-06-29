
var testfunction= require('./Top10EconomicBowler2015')
const fs = require("fs");
const { string } = require('yargs');
CsvObject = fs.readFileSync("data/deliveries.csv");
try{
    if(CsvObject)
    {
        var TempStringVariable = CsvObject.toString().split("\r");
        var InputDataForTest=TempStringVariable[0].split(",");
        for(let i=1;i<TempStringVariable.length;i++)
        {
        InputDataForTest.push(TempStringVariable[i].split(","));
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

test('test case for null input', () => {
    return testfunction(InputDataForTest,1).then(data => {
      expect(data).toEqual(!null);
    });
  });
  test('Test case for undefined input', () => {
    return testfunction(InputDataForTest,2).then(data => {
      expect(data).toEqual(!undefined);
    });
  });
  test('Test case for correct input', () => {
    return testfunction(InputDataForTest,3).then(data => {
      expect(data).toEqual(true);
    });
  });
  test('Test case for incorrect input', () => {
    return testfunction(5,3).then(data => {
      expect(data).toEqual(!string);
    });
  });
  test('Test case for check output count of economic bowler', () => {
    return testfunction(InputDataForTest,4).then(data => {
      expect(data.length).toEqual(99);
    });
  });