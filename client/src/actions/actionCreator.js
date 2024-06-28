import { REGISTER, REGISTER_FAILED } from "./actionTypes";

const baseUrl = "http://localhost:3000";

export const registerAction = (registered) => ({
  type: REGISTER,
  payload: registered,
});

export const registerActionError = (error) => ({
  type: REGISTER_FAILED,
  payload: error,
});

export const registerMiddleware = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/submit`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw jsonData.message;
    }

    dispatch(registerAction(jsonData));
  } catch (error) {
    dispatch(registerActionError(error));
  }
};
