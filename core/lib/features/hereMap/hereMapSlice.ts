import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../../services/httpService';


interface IMapState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: Error | null;
    visits: any[];
    visitsCount: number;
}

const initialState: IMapState = {
    status: 'idle',
    error: null,
    visits: [],
    visitsCount: 0,
};

export const fetchData = createAsyncThunk(
    'Map/fetchData',
    async (req: any) => {
        var list: any = [];
        let functionRequest: any = {
            formId: req.formId,
            objectId: req.objectId,
            accessRight: '0x0008',
            rpcDto: {
                rpcName: 'getMapData',
                parameters: {
                    p_am_oid: req.oid,
                    p_top: req.rows,
                    p_skip: 0,
                    p_is_asc: req.order === 1,
                    p_datebegin: req.from,
                    p_dateend: req.to,
                    p_filters: null,
                    p_filters_sum: null,
                    p_sort: null,
                },
            },
        };
        await http.post('/data/rpc', functionRequest).then((res) => {
            list = res.data;
        });
        return list;
    }
);

const hereMapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setValue: (state:any, action:any) => {
            var newState = action.payload;
            Object.keys(newState).forEach((element) => {
                state[element] = newState[element];
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading';
                state.visits = [];
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'loading';
                state.visits = [];
                if (action.payload?.error == null) {
                    state.visits = [];
                    state.status = 'succeeded';
                    state.error = null;
                    if (action.payload.data)
                        state.visits = state.visits.concat(action.payload.data);
                    state.visitsCount = action.payload.count;
                } else {
                    state.visits = [];
                    state.status = 'failed';
                    state.error = action.payload.message;
                }
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as any;
            });

    },
});

export const { setValue } = hereMapSlice.actions;

export default hereMapSlice.reducer;
