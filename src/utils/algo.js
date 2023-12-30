/*
    C + C = 3 / 3 points
    D + C = 5 / 0 points
    C + D = 0 / 5 points
    D + D = 1 / 1 points
*/

export const algo = (playerA, playerB, points, setPoints) => {
  if (playerA === "1" && playerB === "1") {
    setPoints({ A: points.A + 3, B: points.B + 3 });
  } else if (playerA === "0" && playerB === "1") {
    setPoints({ A: points.A + 5, B: points.B + 0 });
  } else if (playerA === "1" && playerB === "0") {
    setPoints({ A: points.A + 0, B: points.B + 5 });
  } else if (playerA === "0" && playerB === "0") {
    setPoints({ A: points.A + 1, B: points.B + 1 });
  }
};

export const current = (pathname) => {
  if (location.pathname === pathname) {
    return "current";
  } else {
    return null;
  }
};
