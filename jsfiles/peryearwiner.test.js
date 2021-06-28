
var TestFunction= require('./PerYearWinner')
const fs = require("fs");
const { string } = require('yargs');
CsvObject = fs.readFileSync("data/matches.csv");
try{
    if(CsvObject)
    {
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

test('test case for null input', () => {
    return testfunction(inputdatafortest,1).then(data => {
      expect(data).toEqual(!null);
    });
  });
  test('Test case for undefined input', () => {
    return testfunction(inputdatafortest,2).then(data => {
      expect(data).toEqual(!undefined);
    });
  });
  test('Test case for correct input', () => {
    return testfunction(inputdatafortest,3).then(data => {
      expect(data).toEqual(true);
    });
  });
  test('Test case for incorrect input', () => {
    return testfunction(5,3).then(data => {
      expect(data).toEqual(!string);
    });
  });
  test('Test case for check output number of team', () => {
    return testfunction(inputdatafortest,4).then(data => {
      expect(data.length).toEqual(11);
    });
  });