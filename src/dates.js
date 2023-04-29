
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

export default countWorkDaysUntilDate