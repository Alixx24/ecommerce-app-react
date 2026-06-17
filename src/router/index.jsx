import { createBrowserRouter } from 'react-router-dom';

// قالب‌ها
import PublicLayout from '../components/layouts/PublicLayout';
import AdminLayout from '../App'; // App فعلی‌ات که سایدبار داره = قالب ادمین

// صفحات عمومی
import Home from '../components/Home/Home';

// صفحات ادمین
import Todos from '../components/Todos';
import Post from '../components/Post';
import Category from '../components/Category';
import RegisterForm from '../components/Formik';
import Ui from '../components/Ui';
import Shadcn from '../components/Shadcn';

const router = createBrowserRouter([
  // ── بخش عمومی (بدون prefix و بدون سایدبار ادمین) ──
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      // مسیرهای عمومی دیگه: about, contact ...
    ],
  },

  // ── بخش ادمین (همه زیر /admin) ──
  {
    path: 'admin',
    element: <AdminLayout />, // همون App که سایدبار/تاپ‌بار داره
    children: [
      { index: true, element: <Todos /> },        // /admin
      { path: 'post', element: <Post /> },          // /admin/post
      { path: 'category', element: <Category /> },  // /admin/category
      { path: 'formik', element: <RegisterForm /> },// /admin/formik
      { path: 'ui', element: <Ui /> },              // /admin/ui
      { path: 'shadcn', element: <Shadcn /> },       // /admin/shadcn
    ],
  },
]);

export { router };