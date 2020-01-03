import {
    ADD_PROMPT,
    DELETE_PROMPT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROMPT,
    FILTER_PROMPTS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
  } from '../types'

  export default (state, action) => {
      switch(action.type){
          case ADD_PROMPT:
          return{
              ...state,
              prompts: action.payload,
              loading: false
          };
          case UPDATE_PROMPT:
          return{
              ...state,
              prompts: state.prompts.map(prompt => 
                prompt.id === action.payload.id ? action.payload : prompt
            ),
            loading: false
          };
          case DELETE_PROMPT:
          return{
              ...state,
              prompts: state.prompts.filter(
                  prompt => prompt.id !== action.payload
              ),
              loading: false
          };
          case SET_CURRENT:
          return{
              ...state,
              current: action.payload
          }
          case CLEAR_CURRENT:
          return{
              ...state,
              current: null
          };
          case FILTER_PROMPTS:
          return{
              ...state,
              filtered: null
          }
          case CLEAR_FILTER:
          return{
              ...state,
              filtered: null
          }
          case SET_ALERT:
          return{
              ...state,
              alert: action.payload
          }
          case REMOVE_ALERT:
          return{
              ...state,
              alert: null
          }
      }
  }