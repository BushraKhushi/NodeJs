
const XLSX = require ('xlsx');
const workbook = XLSX.readFile('watt.xlsx');
const sheet_name_list= workbook.SheetNames;

// console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
var array =XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])


var hour =[];
var min= [];
var sec =[];
var sec_t= [];
var unix = [];
var date = [];
var time = [];
var watt=[];
var hours =0;
var minutes=0;
var seconds=0;
var time_t =0;
var x=0;
var y =0;
var t_Period=0;
var kwh=0;
var Total=0;

    unix[0] =  (array[0].Time)
    watt[0] = (array[0].Watts)
    date[0] = new Date (unix[0]).toDateString();
    time[0] = new Date (unix[0]).toTimeString();
    
    console.log('Consumed Power "'+watt[0]+'" on '+date[0]+' '+time[0]);

    time_t=(time[0].split(':',3))

    hour[0] = (time_t[0])
    min[0] = (time_t[1])
    sec[0] = (time_t[2])
    sec_t[0]=(sec[0].split('G',1))

    // console.log('DATE IN HUMAN READABLE '+date[0])
    // console.log('TIME HUMAN READABLE'+time[0])  

    for (var i =1;i<array.length;i++){
        unix[i] =  (array[i].Time)
        watt[i] = (array[i].Watts)
        // console.log('UNIX TIME '+unix);
        date[i] = new Date (unix[i]).toDateString();
        time[i] = new Date (unix[i]).toTimeString();        
        console.log('Consumed Power "'+watt[i]+'" on '+date[i]+' '+time[i]);
        // console.log('DATE IN HUMAN READABLE '+date[i])
        // console.log('TIME HUMAN READABLE'+time[i])    
        time_t=(time[i].split(':',3))
        var t2 = i;
        var t1 = i-1;
        hour[t2] = time_t[0]
        // console.log(hour[t2])
        // console.log("STOPHOUR "+hour[t1])
        // console.log("STARTHOUR "+hour[t2])
        min[t2] = (time_t[1])
        // console.log("STOPTMIN"+ min[t1])
        // console.log("STARTMIN"+ min[t2])
        sec[t2] = (time_t[2])
        // console.log("STOPSEC "+sec[t1])
        // console.log("STARTSEC "+sec[t2])
        sec_t[t2]=(sec[t2].split('G',1))
        // console.log("STOPSEC "+sec_t[t1])
        // console.log("STARTSEC "+sec_t[t2])

        if(sec_t[t2] > sec_t[t1]){
            --min[t2];
            sec_t[t2] += 60;
        }

        seconds = sec_t[t1] - sec_t[t2];
        
        if(min[t1] > min[t2]){
            --hour[t2];
            min[t2] += 60;
        }
    
        minutes = min[t2] - min[t1];
        hours = hour[t2] - hour[t1];

        x=minutes/60;
        y= seconds/3600;
        t_Period= hours+x+y;
        
        console.log('TIME PERIOD  :'+hours+':'+minutes+':'+seconds)
        console.log('Time in Hours :'+t_Period.toFixed(3))
        kwh=((watt[i]/1000)*t_Period)
        console.log('KWH is '+kwh.toFixed(3))
        Total+=kwh;
    }
    console.log('Total of kwh:'+Total.toFixed(3));
