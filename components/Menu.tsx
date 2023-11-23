import Image from 'next/image';
import Link from "next/link";
import menuItems from './menulist';
import { usePathname } from 'next/navigation';


export default function Menu({mobMenuToggle,toggleMobileMenu,mobileMenuIsActive,menuRef}) {

    const params = usePathname()
  console.log(params)
    return (
        <>
           <div className="flex p-2">
                <div className="w-full md:w-2/5">
                    <Link href="/" className="menu-font">
                        <Image alt="MB-logo" src="/images/MBNB.png" width={100} height={50} />
                    </Link>
                </div>
                <div className="w-full md:w-3/5 flex justify-end">
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                {params === item.href ?(
                                    <Link href={item.href} className="menu-font-active">
                                    {item.label}
                                </Link>
                                ):(<Link href={item.href} className="menu-font">
                                {item.label}
                            </Link>)

                                }
                                
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden">
                        <h1 ref={mobMenuToggle} className="duadv" onClick={toggleMobileMenu}><i className="fa fa-bars"></i></h1>
                    </div>
                </div>
            </div>
            {mobileMenuIsActive && (
                <div ref={menuRef} className="mobileMenu block">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link onClick={toggleMobileMenu} href={item.href} className="menu-font">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}