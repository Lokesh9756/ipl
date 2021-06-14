module.exports= function perwiner(str)
{
var arr=["Sunrisers Hyderabad","Rising Pune Supergiant","Kolkata Knight Riders","Kings XI Punjab","Royal Challengers Bangalore","Mumbai Indians","Delhi Daredevils","Gujarat Lions","Chennai Super Kings","Deccan Chargers","Rajasthan Royals"]
var ct=[];
let count=0;
console.log("Matches win by teams per year:");
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
