import Header from "./Header";

export default function AppLayout({ children }) {

    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`;

    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
            </div>
        </>
    )
}
