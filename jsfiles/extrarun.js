 async function extrarun(Data,choice)
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
            if(Data!=String)
            return true;
            break;
          }
          case 4:
            {
              console.log(Data[21]);
  var TeamArray=["Sunrisers Hyderabad","Rising Pune Supergiant","Kolkata Knight Riders","Kings XI Punjab","Royal Challengers Bangalore","Mumbai Indians","Delhi Daredevils","Gujarat Lions","Chennai Super Kings","Deccan Chargers","Rajasthan Royals"]
var ExtraRunCount=[];
let sum;
for(let j=0;j<TeamArray.length;j++)
{
  sum=0;
for(let i=21;i<Data.length-1;i++)
{
  if(Data[i][0]>=577&&Data[i][0]<=634)
  {
if(TeamArray[j]==Data[i][2])
sum+=parseInt(Data[i][16]);
}
ExtraRunCount[j]=sum;

}
}
let ExtraRunByTeam=[];
for(j=0;j<TeamArray.length;j++)
{
  ExtraRunByTeam.push(TeamArray[j],ct[j]);
}
const data = JSON.stringify(ExtraRunByTeam);
const fs = require('fs');
  fs.writeFileSync('outputdata.csv', data);
return ExtraRunByTeam;
}
  }
  
}
module.exports=extrarun;