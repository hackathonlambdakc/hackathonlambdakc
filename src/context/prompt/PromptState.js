import React, { useReducer } from "react";

import uuid from "uuid";

import PromptContext from "./promptContext";

import promptReducer from './promptReducer';

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

const 