// 这是一个使用示例
export default {
    namespace: 'userinfo',
    state: {
      hasUserInfoActive: false,
      info: undefined,
    },
    reducers: {
      // 打开个人资料
      open(state) {
        return {
          ...state,
          hasUserInfoActive: true,
        };
      },
      // 关闭个人资料
      stop(state) {
        return {
          ...state,
          hasUserInfoActive: false,
        };
      },
      saveUserInfo(state, { payload: data }) {
        return {
          ...state,
          info: data,
        };
      },
    },
    effects: {
      * init({ callback }, { put, select }) {
        try {
          const list = yield DATABASE.UserInfo.getSelfInfo();
          callback && callback();
          yield put({ type: 'saveUserInfo', payload: list });
        } catch (e) {
          console.error(e);
          callback && callback(-1);
        }
      },
    },
  };