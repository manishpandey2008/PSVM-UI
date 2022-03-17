import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeDifferenceService {

  timeDifference(date1:any,date2:any) {
    var difference = date1.getTime() - date2.getTime();

    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);


    return ({day:daysDifference,hours:hoursDifference,minutes:minutesDifference,second:secondsDifference})
}
}
