
var TestFunction= require('./extrarun')
const fs = require("fs");
const { string } = require('yargs');
CsvObject = fs.readFileSync("data/deliveries.csv");
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
    return TestFunction(InputDataForTest,1).then(data => {
      expect(data).toEqual(!null);
    });
  });
  test('Test case for undefined input', () => {
    return TestFunction(InputDataForTest,2).then(data => {
      expect(data).toEqual(!undefined);
    });
  });
  test('Test case for correct input', () => {
    return TestFunction(InputDataForTest,3).then(data => {
      expect(data).toEqual(true);
    });
  });
  test('Test case for incorrect input', () => {
    return TestFunction(5,3).then(data => {
      expect(data).toEqual(!string);
    });
  });
  test('Test case for check output number of player who takes extra run', () => {
    return TestFunction(InputDataForTest,4).then(data => {
      expect(data.length).toEqual(18);
    });
  });