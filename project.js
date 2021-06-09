function peryear(str)
{
var temp=str[18][1];
let count=1;
for(let i=19;i<str.length-1;i++)
{
if(temp== str[i][1])
count++;
else
{
  console.log('matches played in '+ temp + ' is: '+count);
  temp=str[i][1];
  count=1;

}
}
console.log('matches played in '+ temp + ' is: '+count);
}
function perwiner(str)
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
for(j=0;j<arr.length;j++)
{
  console.log(arr[j]+ " win "+ct[j]);
}
}
function extrarun(str)
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
for(j=0;j<arr.length;j++)
{
  console.log(arr[j]+ " takes "+ct[j]+" extra runs");
}
}
function economic(str)
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
console.log("Top 10 economic bowler of year 2015");
for(j=0;j<10;j++)
{
console.log(arr[j]);
}
}
const fs = require("fs");
csv1 = fs.readFileSync("matches.csv");
csv2 = fs.readFileSync("deliveries.csv");
 
var array1 = csv1.toString().split("\r");
var array2=csv2.toString().split("\r");

var string1=array1[0].split(",");
for(let i=1;i<array1.length;i++)
{
string1.push(array1[i].split(","));
}
var string2=array2[0].split(",");
for(let i=1;i<array2.length;i++)
{
string2.push(array2[i].split(","));
}
let ch=0;
var readline=require("readline-sync");
while(ch!=5)
{
  console.log("select fuction choice");
  console.log("press 1 for count per year matches");
  console.log("press 2 for count win matches per team");
  console.log("press 3 for count extra run per team in 2016");
  console.log("press 4 for print top 10 economical bowler of 2015");
  ch=Number(readline.question());
  switch(ch)
  {
    case 1:
      {
        peryear(string1);
        break;
      }
      case 2:
        {
          perwiner(string1);
          break;
        }
        case 3:
          {
            extrarun(string2);
            break;
          }
          case 4:
            {
              economic(string2);
              break;
            }
            default:
              {
                console.log("enter correct choice");
              }
  }
}



