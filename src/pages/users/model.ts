import { connect, Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from './service';
import { editRecord } from './service';
const UserModel = {
  namespace: 'users',
  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {},
    *getRemote(action, {call, put}) {
      const data = yield call(getRemoteList);
      yield put({
        type: 'getList',
        payload: data,
      });
    },

    *edit({payload: {id, values}}, {call, put}) {
      console.log(id);
      console.log(values);

      yield call(editRecord, {id, values});

    }

  },
  reducers: {
    getList(state, {payload}) {
      return payload;
    }

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};

export default UserModel;
