// import function file
const fs = require('fs');
const { string } = require('yargs');
const TestFunction = require('./PerYearWinner');
// Read data from data file using file stream
const CsvObject = fs.readFileSync('data/matches.csv');
try {
  if (CsvObject) {
    // change csv object to string
    const TempArray = CsvObject.toString().split('\r');
    var InputDataForTest = TempArray[0].split(',');
    for (let i = 1; i < TempArray.length; i++) {
      InputDataForTest.push(TempArray[i].split(','));
    }
  } else {
    throw new Error('error in importing data from csv file');
  }
} catch (err) {
  console.log(err);
}
// TEst case to check null value
test('test case for null input', () =>
  TestFunction(InputDataForTest, 1).then((data) => {
    expect(data).toEqual(!null);
  }));
// Test case to test undefined value
test('Test case for undefined input', () =>
  TestFunction(InputDataForTest, 2).then((data) => {
    expect(data).toEqual(!undefined);
  }));
// Test case to test correct input value
test('Test case for correct input', () =>
  TestFunction(InputDataForTest, 3).then((data) => {
    expect(data).toEqual(true);
  }));
// Test case to test incorrect input value
test('Test case for incorrect input', () =>
  TestFunction(5, 3).then((data) => {
    expect(data).toEqual(!string);
  }));
// Test case to test output of function
test('Test case for check output number of team', () =>
  TestFunction(InputDataForTest, 4).then((data) => {
    expect(data.length).toEqual(420);
  }));
