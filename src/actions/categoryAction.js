

export const createCategory = data => async dispatch => {
    console.log(data);
    dispatch({
      type: "ADD_CATEGORY",
      payload: data
    });
  };