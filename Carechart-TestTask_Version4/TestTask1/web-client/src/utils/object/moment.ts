import moment, { Moment } from 'moment';

export const getTimestampedDocId = (date = moment().startOf('day')) =>
  date.utc(true).valueOf().toString();

export const clearTimezone = (moment: Moment) => moment.utc(true);
