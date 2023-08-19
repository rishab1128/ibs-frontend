export { findInputError } from './findInputError'
export { isFormInvalid } from './isFormInvalid'

export const addErrorIntoField = (errors) => errors ? { error: true } : { error: false };
export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const pawdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const accountRegEx = /^([0-9]{14})$/;
export const aadharRegEx = /^([0-9]{16})$/;
export const panRegEx = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
