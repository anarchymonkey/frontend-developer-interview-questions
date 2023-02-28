export const isElementAnObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);

export const isNullOrUndefined = (value) => value === null || value === undefined;

export const objectKeys = (obj) => Object.keys(obj);
