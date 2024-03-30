import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar/sidebar';

export default function Authenticated({ user, header, children }) {

    return (
        <div className="w-full min-h-screen bg-slate-100">
            <Sidebar></Sidebar>
        </div>
    );
}
