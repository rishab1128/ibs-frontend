export const name_validation = {
  name: 'name',
  label: 'Name',
  type: 'text',
  id: 'name',
  placeholder: 'Write your name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const accountNo_validation = {
  name: 'accountNumber',
  label: 'Account Number',
  type: 'text',
  id:'num',
  placeholder: 'Type your Account Number',
  validation:{
    required:{
      value:true,
      message: 'required',
    },
    pattern:{
      value:/^(\d{14})$/,
      message: 'Account number should be of 14 digits'
    },
  },
}

export const userId_validation = {
  name: 'userId',
  label: 'User ID',
  type: 'text',
  id: 'userId',
  placeholder: 'Set your User ID',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 10,
      message: '10 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'Password',
  type: 'password',
  id: 'password',
  placeholder: 'Type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const confirm_password_validation = {
  name: 'confirm_password',
  label: 'Confirm Password',
  type: 'password',
  id: 'confirm_password',
  placeholder: 'Confirm password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern:{
      value:'John',
      message: 'Passwords do not match'
    }
  },
}


export const email_validation = {
  name: 'email',
  label: 'Email',
  type: 'email',
  id: 'email',
  placeholder: 'Email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const about_validation = {
  name: 'about',
  label: 'About',
  id: 'description',
  placeholder: 'About you',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}