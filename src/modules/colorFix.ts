const CHANGE_COLOR = "CHANGE_COLOR" as const;
const MODAL_SHOW = "NMODAL_SHOW" as const;

export const changeColor = (col1: string, col2: string, col3: string) => ({
  type: CHANGE_COLOR,
  payload: { col1, col2, col3 }
});
export const modalShow = () => ({ type: MODAL_SHOW });

type ColorsAction =
  | ReturnType<typeof changeColor>
  | ReturnType<typeof modalShow>;

type ColorState = {
  colorSky: string;
  colorSun: string;
  colorOcean: string;
  show: boolean;
};
const initialState: ColorState = {
  colorSky: "#3a9cbf",
  colorSun: "#ba2a3a",
  colorOcean: "#08287f",
  show: false
};

function colorFix(state: ColorState = initialState, action: ColorsAction) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        colorSky: action.payload.col1,
        colorSun: action.payload.col2,
        colorOcean: action.payload.col3
      };
    case MODAL_SHOW:
      return {
        ...state,
        show: !state.show
      };
    default:
      return state;
  }
}

export default colorFix;
