import { ref } from 'vue';
import * as yup from 'yup';

export default function useFormValidation(initialValues) {
  const form = ref({ ...initialValues });
  const errors = ref({});

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup
      .string()
      .email('O e-mail é inválido.')
      .required('O e-mail é obrigatório.'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres.')
      .required('A senha é obrigatória.'),
  });

  const validate = async () => {
    try {
      await schema.validate(form.value, { abortEarly: false });
      errors.value = {};
      return true;
    } catch (err) {
      errors.value = err.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      return false;
    }
  };

  const resetForm = () => {
    form.value = { ...initialValues };
    errors.value = {};
  };

  return {
    form,
    errors,
    validate,
    resetForm,
  };
}
