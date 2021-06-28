async function PerYearWinner(str,choice)
{
  switch(choice)
  {
    case 1:
      {
        if(str!=null)
        return true;
        break;
      }
      case 2:
        {
          if(str!=undefined)
          return true;
          break;
        }
        case 3:
          {
            if(str!=String)
            return true;
            break;
          }
          case 4:
            {
var arr=["Sunrisers Hyderabad","Rising Pune Supergiant","Kolkata Knight Riders","Kings XI Punjab","Royal Challengers Bangalore","Mumbai Indians","Delhi Daredevils","Gujarat Lions","Chennai Super Kings","Deccan Chargers","Rajasthan Royals"]
var ct=[];
let count=0;
for(let j=0;j<arr.length;j++)
{
  count=0;
for(let i=19;i<str.length-1;i++)
{
if(arr[j]==str[i][10])
count++;
}
ct[j]=count;

}

const data = JSON.stringify(arr);
const fs = require('fs');
  fs.writeFileSync('outputdata.csv', data);
  return arr;
            }
          }
        }
module.exports=PerYearWinner;