import React, { useReducer } from "react";
// import uuid from "uuid";
import PromptContext from "./promptContext";
import promptReducer from './promptReducer';
import axios from 'axios'; 

import {
  GET_PROMPTS,
  ADD_PROMPT,
  DELETE_PROMPT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROMPT,
  FILTER_PROMPTS,
  CLEAR_PROMPTS,
  CLEAR_FILTER,
  PROMPT_ERROR
} from '../types'

const PromptState = props => {
  const initialState = {
    prompts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(promptReducer, initialState);

  // Get prompts
  const getPrompts = async () => {
    try {
      const res = await axios.get('/api/prompts');

      dispatch({
        type: GET_PROMPTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROMPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Prompt
  const addPrompt = async prompt => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/prompts', prompt, config);

      dispatch({
        type: ADD_PROMPT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROMPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Prompt
  const deletePrompt = async id => {
    try {
      await axios.delete(`/api/prompts/${id}`);

      dispatch({
        type: DELETE_PROMPT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: PROMPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Prompt
  const updatePrompt = async prompt => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/prompts/${prompt._id}`,
        prompt,
        config
      );

      dispatch({
        type: UPDATE_PROMPT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROMPT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Contacts
  const clearPrompts = () => {
    dispatch({ type: CLEAR_PROMPTS });
  };

  // Set Current Prompt
  const setCurrent = prompt => {
    dispatch({ type: SET_CURRENT, payload: prompt });
  };

  // Clear Current prompt
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter prompts
  const filterPrompts = text => {
    dispatch({ type: FILTER_PROMPTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <PromptContext.Provider
      value={{
        prompts: state.promps,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPrompt,
        deletePrompt,
        setCurrent,
        clearCurrent,
        updatePrompt,
        filterPrompts,
        clearFilter,
        getPrompts,
        clearPrompts
      }}
    >
      {props.children}
    </PromptContext.Provider>
  );
};

export default PromptState; 