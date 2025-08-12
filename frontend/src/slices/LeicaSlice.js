import reduxHelper from '../helpers/ReduxHelper';


const API_URL = "/api/members/daily";


export const getList = reduxHelper.get("LeicaSlice", "getList", API_URL);

const LeicaSlice = reduxHelper.getDefaultSlice("LeicaSlice", [getList]);

export default LeicaSlice.reducer;