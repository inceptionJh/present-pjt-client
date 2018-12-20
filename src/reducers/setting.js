import { handleActions } from 'redux-actions';
import {
  SETTING_CLOCK_ENABLE,
  SETTING_CLOCK_DISABLE,
  SETTING_MANTRA_ENABLE,
  SETTING_MANTRA_DISABLE,
  SETTING_QUOTE_ENABLE,
  SETTING_QUOTE_DISABLE,
  SETTING_HELLOYOU_ENABLE,
  SETTING_HELLOYOU_DISABLE,
  SETTING_WEATHER_ENABLE,
  SETTING_WEATHER_DISABLE,
  SETTING_TODO_ENABLE,
  SETTING_TODO_DISABLE,
  SETTING_SEARCH_ENABLE,
  SETTING_SEARCH_DISABLE
} from '../actions/setting';

const initialState = {
  isClockEnable: true,
  isMantraEnable: true,
  isQuoteEnable: true,
  isHelloyouEnable: true,
  isWeatherEnable: true,
  isTodoEnable: true,
  isSearchEnable: true
};

export default handleActions(
  {
    [SETTING_CLOCK_ENABLE]: (state, action) => {
      return { ...state, isClockEnable: true };
    },
    [SETTING_CLOCK_DISABLE]: (state, action) => {
      return { ...state, isClockEnable: false };
    },
    [SETTING_MANTRA_ENABLE]: (state, action) => {
      return { ...state, isMantraEnable: true };
    },
    [SETTING_MANTRA_DISABLE]: (state, action) => {
      return { ...state, isMantraEnable: false };
    },
    [SETTING_QUOTE_ENABLE]: (state, action) => {
      return { ...state, isQuoteEnable: true };
    },
    [SETTING_QUOTE_DISABLE]: (state, action) => {
      return { ...state, isQuoteEnable: false };
    },
    [SETTING_HELLOYOU_ENABLE]: (state, action) => {
      return { ...state, isHelloyouEnable: true };
    },
    [SETTING_HELLOYOU_DISABLE]: (state, action) => {
      return { ...state, isHelloyouEnable: false };
    },
    [SETTING_WEATHER_ENABLE]: (state, action) => {
      return { ...state, isWeatherEnable: true };
    },
    [SETTING_WEATHER_DISABLE]: (state, action) => {
      return { ...state, isWeatherEnable: false };
    },
    [SETTING_TODO_ENABLE]: (state, action) => {
      return { ...state, isTodoEnable: true };
    },
    [SETTING_TODO_DISABLE]: (state, action) => {
      return { ...state, isTodoEnable: false };
    },
    [SETTING_SEARCH_ENABLE]: (state, action) => {
      return { ...state, isSearchEnable: true };
    },
    [SETTING_SEARCH_DISABLE]: (state, action) => {
      return { ...state, isSearchEnable: false };
    }
  },
  initialState
);
