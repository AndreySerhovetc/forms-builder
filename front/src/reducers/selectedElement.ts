import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { Element } from "src/app/Element";

export const addSelectElement = createAction('[Element]', props<{element: Element}>());

export interface StateElements {
  listElements: Element[],
  selectedElement: Element
}

export const initialState: StateElements = {
  listElements: [],
  selectedElement: {},
}

export const selectedElementReducer = (state = initialState, action: any): StateElements => {
  switch (action.type) {
    case "[Element]":
        return({...state,
          selectedElement: action
        })
    default:
      {
        return state
      }
  }
}

export const featureSelector = createFeatureSelector<StateElements> ('initialState');
export const addSelectElementSelector = createSelector(featureSelector, state => state.selectedElement)