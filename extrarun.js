module.exports=function extrarun(str)
{
  return new Promise(function(resolve,reject){
  var arr=["Sunrisers Hyderabad","Rising Pune Supergiant","Kolkata Knight Riders","Kings XI Punjab","Royal Challengers Bangalore","Mumbai Indians","Delhi Daredevils","Gujarat Lions","Chennai Super Kings","Deccan Chargers","Rajasthan Royals"]
var ct=[];
let sum;
console.log("Extra run taken by per team in 2016:");
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
const error =false;
if(!error)
{
  resolved();
}
else{
  reject();
}
})
}
