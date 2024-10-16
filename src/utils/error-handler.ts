const errorHandler = (error: any): string => {
  if (error.response) {
    return error.response.data.message;
  } else if (error.request) {
    if (!navigator.onLine) {
      return "Network error. Please check your connection.";
    } else {
      return "It seems the server is currently down. Please try again later.";
    }
  } else {
    return "An unexpected error occurred. Please try again.";
  }
};

export default errorHandler;
