module.exports= function perwiner(str)
{
  return new Promise(function(resolve,reject){ 
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

