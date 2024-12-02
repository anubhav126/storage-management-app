"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

export const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block bg-brand rounded-full px-4  py-2 pl-2"
        />

        <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden bg-brand rounded-sm p-1"
        />
      </Link>

      <nav className="sidebar-nav ">
        <ul className="flex flex-1 flex-col gap-6 ">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full hover:bg-blue-700 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active",
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active",
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      /> */}

<Link
  href={{
    pathname: '/account-details',
    query: {
      fullName: fullName,
      email: email,
      avatar: avatar,
    },
  }}
>
  <div className="select-none sidebar-user-info cursor-pointer flex items-center justify-center bg-gray-100 rounded-lg w-full h-full p-4">
    <Image
      src={avatar}
      alt="Avatar"
      width={64} // Adjusted size for better proportions
      height={64}
      className="rounded-full border-2 border-gray-300"
    />
    <div className="hidden lg:block ml-4">
      <p className="subtitle-2 capitalize text-gray-800 font-semibold">
        {fullName}
      </p>
      <p className="caption text-gray-600">{email}</p>
    </div>
  </div>
</Link>

    </aside>
  );
};
export default Sidebar;
