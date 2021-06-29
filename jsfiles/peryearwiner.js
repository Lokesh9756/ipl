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
              var TeamArray=[];
              let j=0;
              for(let i=18;i<Data.length-1;i++)
               {
                 if(Data[i][10])
                 {
                 if(TeamArray.includes(Data[i][10]))
                   {}
                 else
                 {
                   TeamArray[j]=Data[i][10];
                   j++;
                 }
                }
              }
              let WinnerCount=0;
              var PerYearWinnerArray=[];
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=77;i<135;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2008,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=135;i<192;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2009,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=192;i<252;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2010,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=252;i<325;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2011,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=325;i<399;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2012,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=399;i<475;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2013,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=475;i<535;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2014,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=535;i<594;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2015,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=594;i<654;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2016,TeamArray[j],WinnerCount);
                    }
                    for(j=0;j<TeamArray.length;j++)
                    {
                      WinnerCount=0;
                      for(i=18;i<77;i++)
                      {
                        if(TeamArray[j] == Data[i][10])
                        {
                          WinnerCount++;
                        }
                      }
                      PerYearWinnerArray.push(2017,TeamArray[j],WinnerCount);
                    }
                    const data = JSON.stringify(PerYearWinnerArray);
                   const fs = require('fs');
                   fs.writeFileSync('/home/lokesh/Desktop/ipl/output/outputdata2.csv', data);
                   console.log("PerYear Winner  Teams count successfully write to the output file");
                   return PerYearWinnerArray;
                   break;
             }
  }
}
module.exports=peryearwiner;