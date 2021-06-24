 async function top10economicbowler(str,choice)
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
  var arr=[];
  var ct=[];
let sum;
let j=0;
for(let i=21;i<str.length-1;i++)
{
  if(str[i][0]>=518 && str[i][0]<=576)
  {
if(arr.includes(str[i][8]))
{}
else{

  arr[j]=str[i][8];
  j++;
}
}
}
for(i=0;i<arr.length;i++)
{
  sum=0;
  for(j=21;j<str.length-2;j++)
  {
   
    if(arr[i]==str[j][8])
    {
      sum=sum+parseInt(str[j][17]);
    }
  }
  ct[i]=sum;
}
let temp;
var temp1;

for(i=0;i<ct.length-1;i++)
{
  for(j=i+1;j<ct.length;j++)
  {
if(ct[i]>ct[j])
{
  temp=ct[i];
  temp2=arr[i];
  ct[i]=ct[j];
  arr[i]=arr[j];
  ct[j]=temp;
  arr[j]=temp2;
}
  }
}
const data = JSON.stringify(arr);
const fs = require('fs');
  fs.writeFileSync('outputdata.csv', data);
  return arr;
}
}
}
module.exports=top10economicbowler;