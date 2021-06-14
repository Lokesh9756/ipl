module.exports=function peryear(str)
{
  return new Promise(function(resolve,reject){
    
 
var temp=str[18][1];
let count=1;
console.log("Matches played per year:")
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
const error =true;
if(!error)
{
  resolved();
}
else{
  reject();
}
})
}
