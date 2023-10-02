import Link from "next/link";
import React from "react";

const MobileDropdown = ({ menus }) => {
  return (
    <div className="md:hidden block">
      <ul className="w-full space-y-1 text-center text-gray-500 list-inside dark:text-gray-400">
        {menus?.map((menu: any, i) => (
          <>
            <li key={i} className="items-center text-white py-1">
              {typeof menu === "object" && (
                <>
                  <Link className="p-0" href={`/services/${menu.href}`}>
                    {menu.label}
                  </Link>
                </>
              )}
              {typeof menu !== "object" && menu}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default MobileDropdown;
