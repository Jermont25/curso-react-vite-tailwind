/**
 * This function gets the date in Colombia's time zone.
 * @returns {date, string}
*/

import { formatInTimeZone } from 'date-fns-tz';

export const getDateCol = ()=> {
    const date = new Date();
    const formatDateCol = formatInTimeZone(date, 'America/Bogota', 'yyyy-MM-dd');

    return formatDateCol;
};
