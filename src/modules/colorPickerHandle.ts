const COLOR_PICKER_OPEN = "COLOR_PICKER_OPEN" as const;
const COLOR_PICKER_CLOSE = "COLOR_PICKER_CLOSE" as const;

export const colorPickerOpen = (name: string) => ({
  type: COLOR_PICKER_OPEN,
  payload: name
});
export const colorPickerClose = () => ({
  type: COLOR_PICKER_CLOSE
});

type PickerCloseAction =
  | ReturnType<typeof colorPickerOpen>
  | ReturnType<typeof colorPickerClose>;

type ColorPickerState = {
  SkyPickerState: boolean;
  SunPickerState: boolean;
  OceanPickerState: boolean;
};
const initialState: ColorPickerState = {
  SkyPickerState: false,
  SunPickerState: false,
  OceanPickerState: false
};

function colorPickerHandle(
  state: ColorPickerState = initialState,
  action: PickerCloseAction
) {
  switch (action.type) {
    case COLOR_PICKER_OPEN:
      switch (action.payload) {
        case "colorSky":
          return {
            ...state,
            SkyPickerState: !state.SkyPickerState
          };
        case "colorSun":
          return {
            ...state,
            SunPickerState: !state.SunPickerState
          };
        case "colorOcean":
          console.log(state.OceanPickerState);
          return {
            ...state,
            OceanPickerState: !state.OceanPickerState
          };
      }
    case COLOR_PICKER_CLOSE:
      console.log(state.SkyPickerState);
      console.log("closing");
      return (state = {
        SkyPickerState: false,
        SunPickerState: false,
        OceanPickerState: false
      });
    default:
      return state;
  }
}
export default colorPickerHandle;
