/*
    This is a class that provides 
    a countdown to the new year (2022).
    The class has only one function called 'remains'.

    Eg.: let countdown = new CountNewYear();
*/
class CountNewYear {

    /*
        An empty constructor
        the requires no paramaters.
        The instance variable nextYear
        represents the 0am time of 01/01/2022.        
    */
    constructor() { 
        
        this.nextYear = 1641006000;                
    }
    
    /*
        This function calculates the current time
        and compares it to 2022 arrival,
        doing some math on Unix Timestamps,
        returning the countdown to the new Year in
        hours, minutes and seconds.

        Params:

        callback: A function that requires 3 parametes:
            hr - hours remainig
            min - minutes remaing
            sec -  seconds remains

        arrival: A function without parameters that
        alerts the arrival of the new year.

        Eg.: countdown.remains(function(hr,min,sec){
                some code...
        }, function(){
                other code...
        })
    */
    remains(callback,arrival) {

        let cur = this.nextYear;
        
        setInterval(function () {            
            
            let nowInMilli = new Date().getTime();           
            let inSec= Math.floor(nowInMilli / 1000);
            let diff = cur - inSec;
            let hours = diff / 3600;
            let hoursFiltered = Math.floor(hours); 

            let restOne = hours - hoursFiltered; 
            let bruteTwo = restOne * 60; 
            let minFiltered = Math.floor(bruteTwo); 
            let diffMinutes = bruteTwo - minFiltered; 

            let secBrute = diffMinutes * 60;
            let sec = Math.floor(secBrute); 
                        
            callback(hoursFiltered, minFiltered,sec);

            if(hoursFiltered == 0 && minFiltered == 0 && sec == 0) {
                arrival();
            }

        }, 1000);        
        
    }
}