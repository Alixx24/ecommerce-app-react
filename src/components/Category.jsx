import { useState } from 'react';
import * as yup from 'yup';
import AppLayout from './layouts/AppLayout';

function Category() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({    // اسم state رو اصلاح کردم (erros -> errors)
    email: null,
    password: null,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    let FormSchema = yup.object({
      email: yup.string().required().min(8),
    });

    try {
      await FormSchema.validate(form, {
        abortEarly: false,
      });
      // اگه اعتبارسنجی موفق بود خطاها رو پاک کن
      setErrors({ email: null, password: null });
      console.log('فرم معتبر است', form);
    } catch (error) {
      let allErrors = {};
      error.inner.forEach((err) => {        // foreach -> forEach
        allErrors[err.path] = err.message;
      });
      setErrors(allErrors);                  // خطاها رو توی استیت ذخیره کن
    }
  };

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
     <AppLayout />
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input name="email" value={form.email} onChange={onChangeInput} />
        {errors.email ? <span>{errors.email}</span> : null}
        <br />
        <label>passw</label>
        <input name="password" value={form.password} onChange={onChangeInput} />
        {errors.password ? <span>{errors.password}</span> : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Category;