export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state };
    case "REGISTER":
      return { ...state };
  }
};
