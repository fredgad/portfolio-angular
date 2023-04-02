// import { Action, createReducer, on } from '@ngrx/store';
// import { ChatBotBodyResponse } from '@lentau/lu/common/app-wide/shared';
// import { getErrorMessageFromErrorList } from '@lentau/lu/common/core/shared/helpers/texting';

// import * as CubeActions from './app-wide.actions';
// import { CubeStatePropsI } from '../shared/interfaces';

// export const storeFeatureKey = 'appWide';

// export const initialState: CubeStatePropsI = {
//   data: {
//     CubePositions: []
//   }
// };

// const cubeReduce = createReducer(
//   initialState,
//   on(AppWideActions.getPageData, (state) => ({ ...state, loading: true })),
//   on(AppWideActions.getPageFail, (state) => ({ ...state, loading: false })),
//   on(AppWideActions.getPageSuccess, (state, { data }): AppWideStateProps => ({ ...state, data, loading: false })),
// );

// export function reducer(state: AppWideStateProps | undefined, action: Action) {
//   return cubeReducer(state, action);
// }
