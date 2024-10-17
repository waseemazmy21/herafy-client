const errorHandler = (error: any): string[] => {
  if (error?.response) {
    console.log(error.response.data.errors);
    return [error.response.data.message, ...(error.response.data.errors || [])];
  } else if (error?.request) {
    if (!navigator.onLine) {
      return ["Network error. Please check your connection."];
    } else {
      return ["It seems the server is currently down. Please try again later."];
    }
  } else {
    return ["An unexpected error occurred. Please try again."];
  }
};

export default errorHandler;
