// import the function file
const fs = require('fs');
const { string } = require('yargs');
const testfunction = require('./Top10EconomicBowler2015');
// Read the data file using filestream
CsvObject = fs.readFileSync('data/deliveries.csv');
try {
  if (CsvObject) {
    // convert object data into string
    const TempStringVariable = CsvObject.toString().split('\r');
    var InputDataForTest = TempStringVariable[0].split(',');
    for (let i = 1; i < TempStringVariable.length; i++) {
      InputDataForTest.push(TempStringVariable[i].split(','));
    }
  } else {
    throw 'error in importing data from csv file';
  }
} catch (err) {
  console.log(err);
}
// test case to check null value
test('test case for null input', () =>
  testfunction(InputDataForTest, 1).then((data) => {
    expect(data).toEqual(!null);
  }));
// test case to check unefined value
test('Test case for undefined input', () =>
  testfunction(InputDataForTest, 2).then((data) => {
    expect(data).toEqual(!undefined);
  }));
// Test case to check for correct input
test('Test case for correct input', () =>
  testfunction(InputDataForTest, 3).then((data) => {
    expect(data).toEqual(true);
  }));
// Test case to check incorrect input
test('Test case for incorrect input', () =>
  testfunction(5, 3).then((data) => {
    expect(data).toEqual(!string);
  }));
// Test case to check output value
test('Test case for check output count of economic bowler', () =>
  testfunction(InputDataForTest, 4).then((data) => {
    expect(data.length).toEqual(99);
  }));
