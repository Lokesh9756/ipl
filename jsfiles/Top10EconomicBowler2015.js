async function Top10EconomicBowler2015(Data, choice) {
  switch (choice) {
    case 1: {
      if (Data != null) return true;
      break;
    }
    case 2: {
      if (Data !== undefined) return true;
      break;
    }
    case 3: {
      if (Data !== String) return true;
      break;
    }
    case 4: {
      const TempArray = [];
      const RunCount = [];
      let sum;
      let j = 0;
      let i;
      for (i = 21; i < Data.length - 1; i++) {
        if (Data[i][0] >= 518 && Data[i][0] <= 576) {
          if (TempArray.includes(Data[i][8]));
          else {
            TempArray[j] = Data[i][8];
            j++;
          }
        }
      }
      for (i = 0; i < TempArray.length; i++) {
        sum = 0;
        for (j = 21; j < TempArray.length - 2; j++) {
          if (TempArray[i] === Data[j][8]) {
            sum += parseInt(Data[j][17]);
          }
        }
        RunCount[i] = sum;
      }
      let TempVariable1;
      let TempVariable2;

      for (i = 0; i < RunCount.length - 1; i++) {
        for (j = i + 1; j < RunCount.length; j++) {
          if (RunCount[i] > RunCount[j]) {
            TempVariable1 = RunCount[i];
            TempVariable2 = TempArray[i];
            RunCount[i] = RunCount[j];
            TempArray[i] = TempArray[j];
            RunCount[j] = TempVariable1;
            TempArray[j] = TempVariable2;
          }
        }
      }
      const data = JSON.stringify(TempArray);
      const fs = require('fs');
      fs.writeFileSync('../output/outputdata4.csv', data);
      console.log(
        'Top 10 Bowler of year 2015 successfully write to the output file'
      );
      return TempArray;
    }
    default: {
      console.log('select correct choice');
    }
  }
}
module.exports = Top10EconomicBowler2015;
