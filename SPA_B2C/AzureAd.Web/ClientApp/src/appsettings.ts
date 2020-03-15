const NODE_ENV = process.env.NODE_ENV;

export const isDevelopment = NODE_ENV === 'development';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || 'Client-id-not-set';
export const TENANT_ID = process.env.REACT_APP_TENANT_ID || 'Tenant-id-not-set';
export const authority = `https://login.microsoftonline.com/${TENANT_ID}`;