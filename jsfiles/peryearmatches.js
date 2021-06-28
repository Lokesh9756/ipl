const { string } = require("yargs");

async function peryearmatches(str,choice)
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
           if(str!=string)
           return true;
           break;
         }
         case 4:
           {
            var temp=str[18][1];
            let count=1;
            let array=[];
            for(let i=19;i<str.length-1;i++)
            {
            if(temp== str[i][1])
            count++;
            else
            {
              array.push(temp,count);
              temp=str[i][1];
              count=1;
            
            }
            }
            array.push(temp,count);
            const data = JSON.stringify(array);
const fs = require('fs');
  fs.writeFileSync('/home/lokesh/Desktop/ipl/output/outputdata.csv', data);
            return array;
            break;
           }
 } 
}
module.exports=peryearmatches