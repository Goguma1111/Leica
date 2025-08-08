/**
 * Redux Slice for Leica data
 */
import reduxHelper from '../helpers/ReduxHelper';

const API_URL = '/leica';

export const getList = await reduxHelper.get("LeicaSlice/getList", API_URL);

const LeicaSlice = reduxHelper.getDefaultSlice("LeicaSlice", [getList]);

export default LeicaSlice.reducer;