import React from 'react'

export default function Sidebar() {
    const menus = [
        {
            name: "Dashboard",
            icon: "fas fa-tachometer-alt",
            url: "/"
        },
        {
            name: "Category Settings",
            icon: "fas fa-tachometer-alt",
            url: "/"
        }, {
            name: "Product",
            icon: "fas fa-tachometer-alt",
            url: "/"
        }, {
            name: "Order List",
            icon: "fas fa-tachometer-alt",
            url: "/"
        }, {
            name: "Users",
            icon: "fas fa-tachometer-alt",
            url: "/"
        }, {
            name: "Settings",
            icon: "fas fa-tachometer-alt",
            url: "/"
        },
    ];

    return (
        <div className='h-screen border-gray-200 shadow-sm bg-white w-64'>
            <div className='flex flex-col item-center'>
                <img src="/assets/logos/logo.png" className='w-[150px]' />
            </div>
            <div>
                <ul>
                    <div className='mb-4 mx-auto'>Menus</div>
                    {
                        menus.map((menu, index) => {
                            return (
                                <div className="w-60 h-12 left-0 top-[796px] ">
                                    <div className="w-60 h-12 left-0 top-0 ">
                                        <div className="text-neutral-800 text-sm font-semibold font-['Nunito Sans'] tracking-tight">Table</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
