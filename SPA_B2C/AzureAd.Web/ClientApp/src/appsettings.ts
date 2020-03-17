const NODE_ENV = process.env.NODE_ENV;

export const isDevelopment = NODE_ENV === 'development';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || 'Client-id-not-set';
export const TENANT_ID = process.env.REACT_APP_TENANT_ID || 'Tenant-id-not-set';
export const TENANT_NAME = process.env.REACT_APP_TENANT_NAME || 'Tenant-Name-not-set';
export const SUSI_FLOW_ID = process.env.REACT_APP_SUSI_FLOW_ID || 'Tenant-Name-not-set';
export const authority = `https://${TENANT_NAME}.b2clogin.com/${TENANT_NAME}.onmicrosoft.com/${SUSI_FLOW_ID}`;