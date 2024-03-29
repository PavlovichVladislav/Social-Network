export function validateEmail(value) {
    let error;

    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    
    return error;
}

export const requiredField = (errorText) => (value) => {
    let error;

    if (!value) {
        error = errorText;
    }

    return error; 
}

export const validatePost = (maxLength) => (value) => {
    let error;
    
    if (!value) {
        error = 'Напишите что - нибудь';
    } else if (value.length > maxLength) {
        error = 'Недопустимая длина'
    }

    return error;
}