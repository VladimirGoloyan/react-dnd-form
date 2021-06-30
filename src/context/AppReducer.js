import { actionTypes } from "./actionTypes";

const AppReducer = (state, action) => {
  let curTree;
  switch (action.type) {
    case actionTypes.ADD_FIRST:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Tree before dispatch :", state.tree);
      return {
        ...state,
        tree: [[action.payload.element]],
      };
    case actionTypes.ADD_TOP:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Tree before dispatch :", state.tree);

      curTree = state.tree;
      curTree.unshift([action.payload.element]);
      return {
        ...state,
        tree: curTree,
      };
    case actionTypes.ADD_BOTTOM:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Tree before dispatch :", state.tree);

      curTree = state.tree;
      curTree.push([action.payload.element]);
      return {
        ...state,
        tree: curTree,
      };
    case actionTypes.ADD_LEFT:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Tree before dispatch :", state.tree);
      return {
        ...state,
        tree: state.tree[action.payload.id].unshift(action.payload.element),
      };
    case actionTypes.ADD_RIGHT:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Tree before dispatch :", state.tree);
      return {
        ...state,
        tree: state.tree[action.payload.id].push(action.payload.element),
      };
    case actionTypes.SET_ELEMENT:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Item before dispatch :", state.activeElement);
      return {
        ...state,
        activeElement: action.payload.element,
      };
    case actionTypes.RESET_ELEMENT:
      console.log("Action :", action);
      console.log("Payload :", action.payload);
      console.log("Item before dispatch :", state.activeElement);
      return {
        ...state,
        activeElement: null,
      };
    default:
      return state;
  }
};
export default AppReducer;
