const { string } = require('yargs');

async function PerYearMatches(Data, choice) {
  switch (choice) {
    // Case 1 to test null value
    case 1: {
      if (Data != null) return true;
      break;
    }
    // Case 2 to test undefined value
    case 2: {
      if (Data != undefined) return true;
      break;
    }
    // Case 3 to test incorrect input value
    case 3: {
      if (Data != string) return true;
      break;
    }
    // Case 4 to test correct value
    case 4: {
      // Array to store years
      const YearArray = [];
      let j = 0;
      for (let i = 18; i < Data.length - 1; i++) {
        if (Data[i][1]) {
          if (YearArray.includes(Data[i][1]));
          else {
            YearArray[j] = Data[i][1];
            j++;
          }
        }
      }
      // Varaible to store number of count
      let MatchesCount = 0;
      // Array to store per year matches count
      const MatchesArray = [];
      for (j = 0; j < YearArray.length; j++) {
        MatchesCount = 0;
        for (let i = 19; i < Data.length; i++) {
          if (YearArray[j] === Data[i][1]) MatchesCount++;
        }
        MatchesArray.push(YearArray[j], MatchesCount);
      }
      // stringfy array using  JSON
      const data = JSON.stringify(MatchesArray);
      const fs = require('fs');
      // write data to output file
      fs.writeFileSync('/home/lokesh/Desktop/ipl/output/outputdata1.csv', data);
      console.log(
        'PerYear matches count successfully write to the output file'
      );
      return MatchesArray;
    }
    default: {
      console.log('please select correct choice');
    }
  }
}
module.exports = PerYearMatches;
