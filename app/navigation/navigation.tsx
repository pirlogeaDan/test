import * as React from "react";

export const navigationRef: any = React.createRef();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}

function navigateBack() {
  navigationRef.current?.goBack();
}

export const goBack: () => void = () => {
  navigateBack();
};

export const goHome: (jump?: boolean, params?: any) => void = (
  jump: boolean = false,
  params?: any
) => {
  if (jump) {
    navigate("AppStack", {
      screen: "Home",
      params: {
        screen: "Home",
        params,
      },
    });
  } else {
    navigate("Home", params);
  }
};
