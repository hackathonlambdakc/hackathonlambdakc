import React, { useReducer } from "react";
import uuid from "uuid";
import PromptContext from "./promptContext";
import promptReducer from './promptReducer';
import axios from 'axios'; 

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

const PromptState = props => {
  const initalState = {
    prompts: null,
    current: null,
    filtered: null, 
    alert: null
  }; 

  const [state, dispatch] = useReducer(promptReducer, initalState); 

  //Add Prompts
  const addPrompts = async prompt => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try{
      const res = await axios.post('/api/prompts', prompt, config);
      dispatch({
        type: ADD_PROMPT,
        payload: res.data
      })
    } catch(err){
      dispatch({
        type: SET_ALERT,
        payload: err.response.msg
      })
    }
  };
  //Delete Prompt
  const deletePrompt = async id => {
    try{
      await axios.deleter(`/api/prompts/${id}`);

      dispatch({
        type: DELETE_PROMPT,
        payload: id
      });
    } catch (err){
      dispatch({
        type: SET_ALERT,
        payload: err.response.msg
      });
    }
  };
  const updatePrompt = async prompt => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try{
      const res = await axios.put(
        `api/prompts/${prompt.id}`,
        prompt,
        config
      );
      dispatch({
        type: UPDATE_PROMPT,
        payload: res.data
      });
    } catch (err){
      dispatch({
        type: SET_ALERT,
        payload: err.response.msg
      });
    }
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  const filterPrompts = text => {
    dispatch({ type: FILTER_PROMPTS, payload: text });
  };
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  const removeAlerts = () => {
    dispatch({type: REMOVE_ALERT})
  }
  return(
    <PromptContext.Provider
      value={{
        prompts: state.prompts,
        current: state.current,
        filtered: state.filtered,
        alert: state.alert,
        addPrompts,
        deletePrompt,
        setCurrent,
        clearCurrent,
        updatePrompt,
        removeAlerts,
        clearFilter,
        filterPrompts,
      }}
    >
    {props.childern}
    </PromptContext.Provider>
  );
};

export default PromptState; 