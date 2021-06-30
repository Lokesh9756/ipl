async function ExtraRun2016(Data, choice) {
  switch (choice) {
    // case 1 for checking null value
    case 1: {
      if (Data != null) return true;
      break;
    }
    // case 2 for checking undefined value
    case 2: {
      if (Data !== undefined) return true;
      break;
    }
    // case 3 for checking incoorect input value
    case 3: {
      if (Data !== String) return true;
      break;
    }
    // case 4 for calculate result with correct input value
    case 4: {
      // Array for holding teams
      const TeamArray = [];
      let j = 0;
      for (let i = 21; i < Data.length - 1; i++) {
        if (Data[i][0] >= 576 && Data[i][0] <= 636) {
          if (TeamArray.includes(Data[i][2]));
          else {
            TeamArray[j] = Data[i][2];
            j++;
          }
        }
      }
      // Array for hold count of extrarun per team
      const ExtraRunCount = [];
      let sum;
      for (let j = 0; j < TeamArray.length; j++) {
        sum = 0;
        for (let i = 21; i < Data.length; i++) {
          if (Data[i][0] >= 577 && Data[i][0] <= 634) {
            if (TeamArray[j] === Data[i][2]) sum += parseInt(Data[i][16]);
          }
        }
        ExtraRunCount[j] = sum;
      }
      const ExtraRunByTeam = [];
      for (j = 0; j < TeamArray.length; j++) {
        ExtraRunByTeam.push(TeamArray[j], ExtraRunCount[j]);
      }
      // convert Array data into string using JSON
      const data = JSON.stringify(ExtraRunByTeam);
      const fs = require('fs');
      fs.writeFileSync('/home/lokesh/Desktop/ipl/output/outputdata3.csv', data);
      console.log(
        'Extra run of year 2016 successfully write to the output file'
      );
      return ExtraRunByTeam;
    }
    default: {
      console.log('select correct choice');
    }
  }
}
module.exports = ExtraRun2016;
