export const Error = (label, message, data = {}) => {
  console.log(`[Error] - ${label} ${message}`, data);
};

export const Info = (label, message, data = {}) => {
  console.log(`[Info] - ${label} ${message}`, data);
};

export const Log = (label, message, data = {}) => {
  console.log(`[Log] - ${label} ${message}`, data);
};
