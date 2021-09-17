import * as yup from 'yup';

const formSchema = yup.object().shape({
    nameInput: yup
        .string()
        .trim() 
        .required()
        .min(2, 'name must be atleast two characters'),
    special: yup
        .string()
        .trim(),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large']),    

    olives: yup.boolean(),
    onions: yup.boolean(),
    mushrooms: yup.boolean(),
    greenPeppers: yup.boolean()

})

export default formSchema;