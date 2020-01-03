import {
    GET_PROMPTS,
  ADD_PROMPT,
  DELETE_PROMPT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROMPT,
  FILTER_PROMPTS,
  CLEAR_FILTER,
  PROMPT_ERROR,
  CLEAR_PROMPTS
  } from '../types'

  export default (state, action) => {
    switch (action.type) {
      case GET_PROMPTS:
        return {
          ...state,
          prompts: action.payload,
          loading: false
        };
      case ADD_PROMPT:
        return {
          ...state,
          prompts: [action.payload, ...state.prompts],
          loading: false
        };
      case UPDATE_PROMPT:
        return {
          ...state,
          prompts: state.prompts.map(prompt =>
            prompt._id === action.payload._id ? action.payload : prompt
          ),
          loading: false
        };
      case DELETE_PROMPT:
        return {
          ...state,
          prompts: state.prompts.filter(
            prompt => prompt._id !== action.payload
          ),
          loading: false
        };
      case CLEAR_PROMPTS:
        return {
          ...state,
          prompts: null,
          filtered: null,
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case FILTER_PROMPTS:
        return {
          ...state,
          filtered: state.prompts.filter(prompt => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return prompt.name.match(regex) || prompt.email.match(regex);
          })
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
      case PROMPT_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };