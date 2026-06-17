// src/lib/yupConfig.js
import { setLocale } from 'yup';

setLocale({
  mixed: { required: ({ path }) => `فیلد ${path} الزامی است` },
  string: { min: ({ path, min }) => `حداقل طول ${path} ${min} کاراکتر می‌باشد` },
});