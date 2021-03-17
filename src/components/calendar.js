import React from 'react'
import '../css/calendar.css'

class Calendar extends React.Component {
    
    render() {
        let date = new Date();
        let month = date.getMonth();
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        
        return (
            <div className="calendarContainer">
              <h3 className="date">{months[month]}</h3>
              <h2 className="time">{date.getDate()}</h2>
            </div>
        );   
    }    
}


export default Calendar;
