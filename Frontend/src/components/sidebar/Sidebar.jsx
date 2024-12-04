import React, { useState } from 'react'
import { Link } from "react-router-dom";

// React Logo 
import { IoHomeOutline } from "react-icons/io5";
import { GrDocumentNotes } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaUserXmark } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            {/* Side bar  */}

            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>

            </button>

            <aside id="logo-sidebar"
                // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" 
                className={`fixed top-0 left-0 z-40 w-58 h-screen transition-transform bg-gray-50 dark:bg-gray-800 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0`}

                aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800" style={{
                    background:"white"
                }}>
                    <div className='flex justify-between items-center cursor-pointer'>
                        {/* <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5"> */}
                        <div id="sidebar-logo">
                            <img src="./Logo.jpeg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                        </div>

                        {/* Cancel icon, visible only on small screens */}
                        <div id="sidebar-cancle" className="block sm:hidden">
                            <FaTimesCircle onClick={toggleSidebar} className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </div>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoHomeOutline />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GrDocumentNotes />
                                <span className="flex-1 ms-3 whitespace-nowrap">Notes</span>
                            </a>
                        </li>
                        <li>
                            <Link to={"/lead"} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <CiFilter />
                                <span className="flex-1 ms-3 whitespace-nowrap">Lead</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <CiBellOn />
                                <span className="flex-1 ms-3 whitespace-nowrap">Reminder</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaPeopleGroup />
                                <span className="flex-1 ms-3 whitespace-nowrap">Metting</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GoPeople />
                                <span className="flex-1 ms-3 whitespace-nowrap">Customer</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <CiUser />
                                <span className="flex-1 ms-3 whitespace-nowrap">Staff</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoChatbubbleOutline />
                                <span className="flex-1 ms-3 whitespace-nowrap">Chat</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaUserXmark />
                                <span className="flex-1 ms-3 whitespace-nowrap">Leave</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoCheckmarkDoneCircle />
                                <span className="flex-1 ms-3 whitespace-nowrap">Attendance</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaFileInvoice />
                                <span className="flex-1 ms-3 whitespace-nowrap">Invoice</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoSettingsOutline />
                                <span className="flex-1 ms-3 whitespace-nowrap">General Settings</span>
                            </a>
                        </li>
                    </ul>

                </div>

            </aside>


        </>
    )
}

export default Sidebar