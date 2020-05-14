import ColorPickerStyled from "./ColorPickerStyled.vue";

export const routes = [
  {
    path: "/",
    component: ColorPickerStyled,
  },
  {
    path: "/unstyled",
    component: () => import("./ColorPickerUnstyled.vue"),
  },
];
