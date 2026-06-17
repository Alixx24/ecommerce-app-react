import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/solid';

import { Dialog, Menu, Listbox, Transition, Disclosure, Tab } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";
import AppLayout from './layouts/AppLayout';

function Ui() {
    const [isOpenModal, setOpenModal] = useState(false);

    const deleteItem = () => {
        setOpenModal(false)
    }

    // users
    const users = [
        { id: 1, name: 'hessam' },
        { id: 2, name: 'ali' },
        { id: 3, name: 'hatam' },
    ];

    const [selectedUser, setSelectedUser] = useState(users[0]);

    return (
        <>
            <AppLayout />
            <div className="max-w-sm p-10">
                <Menu>
                    <Menu.Button as={Fragment}>
                        {({ open }) => (
                            <button
                                className={`bg-gray-700 text-white px-4 py-2 rounded-md ${open ? 'bg-gray-500' : 'bg-gray-700'
                                    }`}
                            >
                                my dropdown menu
                            </button>
                        )}
                    </Menu.Button>
                    <Menu.Items className="flex flex-col mt-4 p-4 bg-gray-100">
                        <Menu.Item>
                            {({ active }) => (
                                <a href="#" className={`${active ? 'text-red-500 bg-gray-600' : 'text-gray-800'}`}>home</a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a href="#" className={`${active ? 'text-red-500 bg-gray-600' : 'text-gray-800'}`}>process</a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a href="#" className={`${active ? 'text-red-500 bg-gray-600' : 'text-gray-800'}`}>profile</a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>

            {/* dialog */}
            <div>
                <button onClick={() => setOpenModal(true)}>open modal</button>
                <Dialog open={isOpenModal} onClose={() => setOpenModal(false)} className="relative z-50">
                    {/* backdrop (overlay) */}
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                    {/* container برای وسط‌چین کردن پنل */}
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
                            <Dialog.Title className="text-lg font-bold">Delete Item</Dialog.Title>
                            <Dialog.Description className="mt-2 text-gray-600">
                                Please confirm your action
                            </Dialog.Description>
                            <p className="mt-2 text-gray-500">lorem lorem</p>
                            <div className="mt-4 flex gap-2">
                                <button onClick={deleteItem} className="rounded bg-red-600 px-4 py-2 text-white">Delete</button>
                                <button onClick={() => setOpenModal(false)} className="rounded bg-gray-300 px-4 py-2">Cancel</button>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>

            {/* listBox */}
            <div className="p-10">
                <Listbox value={selectedUser} onChange={setSelectedUser}>
                    {({ open }) => (
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pr-3 pl-10 text-right shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedUser.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                enter="transition duration-100"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-100"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                                    {users.map((user) => (
                                        <Listbox.Option
                                            key={user.id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pr-10 pl-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={user}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate text-right ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {user.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-indigo-600">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    )}
                </Listbox>
            </div>

            {/* Disclosure - اکسپنشن پنل شیک */}
            <div className="p-10" dir="rtl">
                <Disclosure>
                    {({ open }) => (
                        <div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-lg">
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-3 text-right text-lg font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75 transition-all">
                                <span>📁 اطلاعات کاربر</span>
                                <ChevronUpDownIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-indigo-600 transition-transform duration-200`}
                                />
                            </Disclosure.Button>
                            <Transition
                                show={open}
                                enter="transition-all duration-300 ease-out"
                                enterFrom="opacity-0 max-h-0 scale-95"
                                enterTo="opacity-100 max-h-96 scale-100"
                                leave="transition-all duration-200 ease-in"
                                leaveFrom="opacity-100 max-h-96 scale-100"
                                leaveTo="opacity-0 max-h-0 scale-95"
                            >
                                <Disclosure.Panel className="p-4 text-gray-700 bg-gray-50 rounded-b-2xl">
                                    <div className="space-y-2">
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-semibold">نام:</span>
                                            <span>{selectedUser?.name || 'نامشخص'}</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2">
                                            <span className="font-semibold">ایمیل:</span>
                                            <span>user@example.com</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">نقش:</span>
                                            <span>مدیر سیستم</span>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                </Disclosure>
            </div>



            {/* Tabs */}
            <div className="p-10" dir="rtl">
                <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white shadow-lg">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-t-2xl bg-indigo-50 p-1">
                            <Tab
                                className={({ selected }) =>
                                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
            ${selected
                                        ? 'bg-white text-indigo-700 shadow-md ring-1 ring-indigo-500/20'
                                        : 'text-gray-600 hover:bg-indigo-100/70 hover:text-indigo-600'
                                    }
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`
                                }
                            >
                                پروفایل
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
            ${selected
                                        ? 'bg-white text-indigo-700 shadow-md ring-1 ring-indigo-500/20'
                                        : 'text-gray-600 hover:bg-indigo-100/70 hover:text-indigo-600'
                                    }
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`
                                }
                            >
                                تنظیمات
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200
            ${selected
                                        ? 'bg-white text-indigo-700 shadow-md ring-1 ring-indigo-500/20'
                                        : 'text-gray-600 hover:bg-indigo-100/70 hover:text-indigo-600'
                                    }
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`
                                }
                            >
                                فعالیت‌ها
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-4 p-4">
                            <Tab.Panel className="rounded-xl bg-gray-50 p-4 transition-all">
                                <div className="space-y-3 text-right">
                                    <h3 class="text-lg font-bold text-gray-800">اطلاعات کاربر</h3>
                                    <div class="border-b border-gray-200 pb-2">
                                        <span class="font-semibold">نام: </span>
                                        <span>{selectedUser?.name || 'کاربر مهمان'}</span>
                                    </div>
                                    <div class="border-b border-gray-200 pb-2">
                                        <span class="font-semibold">ایمیل: </span>
                                        <span>mehrdad@example.com</span>
                                    </div>
                                    <div>
                                        <span class="font-semibold">عضویت از: </span>
                                        <span>۱۴۰۳/۰۱/۰۱</span>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel className="rounded-xl bg-gray-50 p-4 transition-all">
                                <div className="space-y-3 text-right">
                                    <h3 class="text-lg font-bold text-gray-800">تنظیمات نمایش</h3>
                                    <label class="flex justify-between items-center">
                                        <span>حالت شب</span>
                                        <input type="checkbox" class="h-5 w-5 rounded border-gray-300 text-indigo-600" />
                                    </label>
                                    <label class="flex justify-between items-center">
                                        <span>اعلان‌ها</span>
                                        <input type="checkbox" class="h-5 w-5 rounded border-gray-300 text-indigo-600" />
                                    </label>
                                    <button class="mt-2 rounded-lg bg-indigo-100 px-4 py-2 text-indigo-800 hover:bg-indigo-200">
                                        ذخیره تغییرات
                                    </button>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel className="rounded-xl bg-gray-50 p-4 transition-all">
                                <div className="space-y-2 text-right">
                                    <p>✔️ ورود به سیستم - امروز ۱۰:۳۲</p>
                                    <p>✔️ تغییر رمز عبور - دیروز</p>
                                    <p>✔️ آپلود فایل - ۲ روز پیش</p>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    );
}

export default Ui;