import reduxHelper from '../helpers/ReduxHelper';


const DAILY_URL = "/api/members/daily";
const WEEKLY_URL = "/api/members/weekly";


export const getDaily = reduxHelper.get("LeicaDaily", DAILY_URL);
export const getWeekly = reduxHelper.get("LeicaWeekly", WEEKLY_URL);

const LeicaSlice = reduxHelper.getDefaultSlice("LeicaSlice", [getDaily, getWeekly]);

export default LeicaSlice.reducer;