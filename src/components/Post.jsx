// src/components/Post.jsx
import { useFormik } from 'formik';
import AppLayout from './layouts/AppLayout';

const Post = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      mailAddress: '',
    },
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <>
     <AppLayout />
      <form className='max-w-sm mx-auto' onSubmit={formik.handleSubmit}>
        <div className="mt-5">
          <div className='mb-5 '>
            <label className='block mb-2.5 text-sm font-medium text-heading'>name</label>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="Ali"
              required
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label>username</label>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder='Ali666'
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label>email</label>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label>password</label>
            <input
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required />
          </div>



          <button
            type="submit"
            className="text-gray-900 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
          >
            send
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;