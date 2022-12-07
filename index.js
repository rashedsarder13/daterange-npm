//Today calculation
const fromDate = new Date();
fromDate.setHours(0);
fromDate.setMinutes(0);
fromDate.setSeconds(0);
const toDate = new Date();
toDate.setHours(23);
toDate.setMinutes(59);
toDate.setSeconds(59);
//Yesterday calculation
const yesterdayToDate = new Date();
yesterdayToDate.setHours(23);
yesterdayToDate.setMinutes(59);
yesterdayToDate.setSeconds(59);
const yesterdayFromDate = new Date();
yesterdayFromDate.setHours(0);
yesterdayFromDate.setMinutes(0);
yesterdayFromDate.setSeconds(0);
const yesterdayFrom = yesterdayFromDate.setDate(yesterdayFromDate.getDate() - 1);
const yesterdayTo = yesterdayToDate.setDate(yesterdayToDate.getDate() - 1);
//This month calculation
const thisMonth = moment().clone().startOf('month').format('YYYY-MM-DD hh:mm');
const thisMonthFrom = new Date(new Date(thisMonth).setHours(0));
//This week calculation
const thisWeek = moment().clone().startOf('week').format('YYYY-MM-DD hh:mm');
const thisWeekFrom1 = new Date(new Date(thisWeek).setHours(0));
const thisWeekFrom = thisWeekFrom1.setDate(thisWeekFrom1.getDate() - 1);
//Last week calculation
const lastWeek = moment().clone().startOf('week').format('YYYY-MM-DD hh:mm');
const lastWeekFrom1 = new Date(new Date(lastWeek).setHours(0));
const lastWeekFrom2 = new Date(new Date(lastWeek).setHours(23));
lastWeekFrom2.setMinutes(59)
lastWeekFrom2.setSeconds(59)
const lastWeekFrom = lastWeekFrom1.setDate(lastWeekFrom1.getDate() - 8);
const lastWeekTo = lastWeekFrom2.setDate(lastWeekFrom2.getDate()-2);

//Previous month calculation
const fDate = new Date();
fDate.setHours(0);
fDate.setMinutes(0);
fDate.setSeconds(0);
fDate.setMonth(fDate.getMonth() -1);
let previousMonthFrom = fDate.setDate(1);
let previousMonthTo = new Date().setDate(0);


const dayEnum = {
    today:'TODAY',
    yesterday:'YESTERDAY',
    thisWeek:'THIS_WEEK',
    lastWeek:'LAST_WEEK',
    thisMonth:'THIS_MONTH',
    lastMonth:'LAST_MONTH',
}

function daterange(dateType)
{

}

module.export.daterange = daterange;