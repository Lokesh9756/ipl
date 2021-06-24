
var testfunction= require('./peryearwiner')
const fs = require("fs");
const { string } = require('yargs');
csvobject = fs.readFileSync("data/deliveries.csv");
try{
    if(csvobject)
    {
        var temparray = csvobject.toString().split("\r");
        var inputdatafortest=temparray[0].split(",");
        for(let i=1;i<temparray.length;i++)
        {
        inputdatafortest.push(temparray[i].split(","));
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
  test('Test case for check output number of player who takes extra run', () => {
    return testfunction(inputdatafortest,4).then(data => {
      expect(data.length).toEqual(11);
    });
  });