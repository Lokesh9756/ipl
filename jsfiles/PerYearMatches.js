const { string } = require("yargs");

async function PerYearMatches(Data,choice)
{
 switch(choice)
 {
   case 1:
     {
       if(Data!=null)
       return true;
       break;
     }
     case 2:
       {
         if(Data!=undefined)
         return true;
         break;
       }
       case 3:
         {
           if(Data!=string)
           return true;
           break;
         }
         case 4:
           {
            var YearArray=[];
            let j=0;
            for(let i=18;i<Data.length-1;i++)
             {
               if(Data[i][1])
               {
               if(YearArray.includes(Data[i][1]))
                 {}
               else
               {
                 YearArray[j]=Data[i][1];
                 j++;
               }
              }
            }
            let MatchesCount=0;
            let MatchesArray=[];
            for(j=0;j<YearArray.length;j++)
            {
              MatchesCount=0;
            for(let i=19;i<Data.length;i++)
            {
            if(YearArray[j] == Data[i][1])
            MatchesCount++;
            }
            MatchesArray.push(YearArray[j],MatchesCount);
           }
            const data = JSON.stringify(MatchesArray);
            const fs = require('fs');
            fs.writeFileSync('/home/lokesh/Desktop/ipl/output/outputdata1.csv', data);
            console.log("PerYear matches count successfully write to the output file");
            return MatchesArray;
            break;
           }
 } 
}
module.exports=PerYearMatches;