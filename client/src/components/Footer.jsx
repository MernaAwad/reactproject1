import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Footer } from "flowbite-react";
export default function FooterCom() {
  return (

<Footer className="bg-slate-900 dark:bg-gray-900 rounded-0 footer">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm text-white font-medium uppercase dark:text-white">Company</h2>
            <ul className="text-white font-medium">
                <li className="mb-4">
                    <Link to={"#"} className=" hover:underline">About</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Careers</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Brand Center</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Blog</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
            <ul className="text-white font-medium">
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Discord Server</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Twitter</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Facebook</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"} className="hover:underline">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
            <ul className="text-white font-medium">
                <li className="mb-4">
                    <Link to={"#"}  class="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"}  class="hover:underline">Licensing</Link>
                </li>
                <li className="mb-4">
                    <Link to={"#"}  class="hover:underline">Terms &amp; Conditions</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Download</h2>
            <ul class="text-white font-medium">
                <li class="mb-4">
                    <Link to={"#"}  class="hover:underline">iOS</Link>
                </li>
                <li class="mb-4">
                    <Link to={"#"}  class="hover:underline">Android</Link>
                </li>
                <li class="mb-4">
                    <Link to={"#"}  class="hover:underline">Windows</Link>
                </li>
                <li class="mb-4">
                    <Link to={"#"}  class="hover:underline">MacOS</Link>
                </li>
            </ul>
        </div>
    </div>

    </div>
</Footer>
  );
}
