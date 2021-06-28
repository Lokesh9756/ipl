async function peryearwiner(Data,choice)
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
              var temp=Data[18][1];
              let count=1;
              let array=[];
              for(let i=19;i<Data.length-1;i++)
              {
              if(temp == Data[i][1] )
              count++;
              else
              {
                array.push(temp,count);
                temp=Data[i][1];
                count=1;
              
              }
              }
              array.push(temp,count);
              const data = JSON.stringify(array);
              const fs = require('fs');
              fs.writeFileSync('/home/lokesh/Desktop/ipl/output/outputdata2.csv', data);
              return array;
              break;
            }
  }
}
module.exports=peryearwiner;