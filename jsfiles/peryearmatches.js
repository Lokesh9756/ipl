const { string } = require("yargs");

async function PerYearMatches(InputValue,choice)
{
 switch(choice)
 {
   case 1:
     {
       if(InputValue!=null)
       return true;
       break;
     }
     case 2:
       {
         if(InputValue!=undefined)
         return true;
         break;
       }
       case 3:
         {
           if(InputValue!=string)
           return true;
           break;
         }
         case 4:
           {
            var temp=InputValue[18][1];
            let count=1;
            let PerYearMatchesArray=[];
            for(let i=19;i<InputValue.length-1;i++)
            {
            if(temp== InputValue[i][1])
            count++;
            else
            {
              PerYearMatchesArray.push(temp,count);
              temp=InputValue[i][1];
              count=1;
            
            }
            }
            PerYearMatchesArray.push(temp,count);
            const data = JSON.stringify(PerYearMatchesArray);
const fs = require('fs');
  fs.writeFileSync('output/outputdata.csv', data);
            return PerYearMatchesArray;
            break;
           }
 } 
}
module.exports=PerYearMatches