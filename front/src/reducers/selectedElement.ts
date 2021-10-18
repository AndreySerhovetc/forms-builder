import { createAction, createFeatureSelector, createSelector, props } from "@ngrx/store";
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
          selectedElement: action,
        })
    default:
      {
        return state
      }
  }
}

// export const addElementSelector = (state = initialState, action: any): StateElements => {
//   switch (action.type) {
//     case "[Element]":
//         return({...state,
//           listElements: state.listElements.concat(action)
//         })
//     default:
//       {
//         return state
//       }
//   }
// }

export const featureSelector = createFeatureSelector<StateElements> ('initialState');
export const addSelectElementSelector = createSelector(featureSelector, state => state.selectedElement)
// export const addElementSelector = createSelector(featureSelector, state => state.listElements)