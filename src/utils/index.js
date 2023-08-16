export { findInputError } from './findInputError'
export { isFormInvalid } from './isFormInvalid'

export const addErrorIntoField = (errors) => errors ? { error: true } : { error: false };
export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const pawdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const accountRegEx = /^(\d{14})$/
export const AadharRegEx = /^(\d{12})$/