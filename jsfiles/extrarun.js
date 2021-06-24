 async function extrarun(str,choice)
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
let sum;
for(let j=0;j<arr.length;j++)
{
  sum=0;
for(let i=21;i<str.length-1;i++)
{
  if(str[i][0]>=577&&str[i][0]<=634)
  {
if(arr[j]==str[i][2])
sum+=parseInt(str[i][16]);
}
ct[j]=sum;

}
}
let array=[];
for(j=0;j<arr.length;j++)
{
  array.push(arr[j],ct[j]);
}
const data = JSON.stringify(array);
const fs = require('fs');
  fs.writeFileSync('outputdata.csv', data);
return array;
}
  }
  
}
module.exports=extrarun;