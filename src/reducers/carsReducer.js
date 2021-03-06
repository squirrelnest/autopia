import {
  GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE
} from 'actions/carsActions';

const initialState = {
  cars: []
}

export default function carsReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CARS_PENDING:
      return {
        ...state,
        loading: true
      }

    case GET_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        page_count: action.payload.data.page_count,
        qualifying_count: action.payload.data.qualifying_count,
        cars: state.cars.concat(action.payload.data.vehicles)
      }

    case GET_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.warnings
      }

    default:
      return state
  }
}
