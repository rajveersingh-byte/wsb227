import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [token, setToken] = useState(() => Cookies.get('authtoken'));

    useEffect(() => {
        const syncAuthState = () => setToken(Cookies.get('authtoken'));
        window.addEventListener('auth-change', syncAuthState);
        return () => window.removeEventListener('auth-change', syncAuthState);
    }, []);

    const logoutUser = () => {
        Cookies.remove('authtoken', { path: '/' });
        setToken(undefined);
        window.dispatchEvent(new Event('auth-change'));
    };

    return (
        <header className="sticky w-full z-20 top-0 start-0 bg-white">
            <nav className="bg-neutral-primary">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                            WsCube Tech
                        </span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {!token ? (
                            <Link
                                to="/login"
                                className="text-sm font-medium text-fg-brand hover:underline"
                            >
                                Login
                            </Link>
                        ) : (
                            <Link
                                to="/"
                                onClick={logoutUser}
                                className="text-sm font-medium text-fg-brand hover:underline"
                            >
                                Logout
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            <nav className="bg-neutral-secondary-soft border-y border-default border-default">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-heading hover:underline" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-heading hover:underline">
                                    Cart
                                </a>
                            </li>
                            <li>
                                <Link to={'checkout'} className="text-heading hover:underline">
                                    Checkout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
