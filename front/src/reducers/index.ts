import {
  ActionReducer,
  ActionReducerMap,
  createAction,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  props
} from '@ngrx/store';
import { Element } from 'src/app/Element';
import { environment } from '../environments/environment';
import { selectedElementReducer, StateElements } from './selectedElement';

export interface State {
  initialState: StateElements,
}

export const reducers: ActionReducerMap<State> = {
  initialState: selectedElementReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
