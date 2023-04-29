
function countWorkDaysUntilDate(holidays, days, endDate) {

    let currentDate = new Date();
    let count = 0;

    while (currentDate < endDate) {

        const currentDayOfWeek = currentDate.getDay();

        // In case of multiple occurences per day
        const isWeekday = days.filter((element) => element === currentDayOfWeek).length;

        const isHoliday = holidays.some(holiday => {
            return holiday.getMonth() === currentDate.getMonth() &&
                    holiday.getDate() === currentDate.getDate();
        });

        if (isWeekday && !isHoliday) count += isWeekday;
        currentDate.setDate(currentDate.getDate() + 1);
        
    }

    return count;

}

function getDatesBetween(startDate, endDate) {
    // Create an array to hold the dates
    var dates = [];
  
    // Copy the start date
    var currentDate = new Date(startDate);
  
    // Loop until we reach the end date
    while (currentDate <= new Date(endDate)) {
      // Add the current date to the array
      dates.push(new Date(currentDate));
  
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    // Return the array of dates
    return dates;
  }

export default countWorkDaysUntilDate
export { getDatesBetween }