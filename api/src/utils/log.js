export const Error = (label, message = '', data = null) => {
  if (data) {
    console.log(`[Error] - ${label} (${message})`, data);
    return;
  }
  console.log(`[Error] - ${label} (${message})`);
};

export const Info = (label, message = '', data = null) => {
  if (data) {
    console.log(`[Info] - ${label} (${message})`, data);
    return;
  }
  console.log(`[Info] - ${label} (${message})`);
};

export const Log = (label, message = '', data = null) => {
  if (data) {
    console.log(`[Log] - ${label} (${message})`, data);
    return;
  }
  console.log(`[Log] - ${label} (${message})`);
};
