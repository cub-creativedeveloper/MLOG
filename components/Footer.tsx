import menuItems from './menulist';
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <div className="footersection">
                <div className="descp">
                    <small>
                        <Image src="/images/MBW.png" alt="footerlogo" width={70} height={70} className="mb-2" style={{ objectFit: 'cover', width: 'inherit', height: 'auto' }}/>
                        At MB Logistics, we understand that your time is valuable and your cargo is precious. That's why we
                        strive to provide efficient, reliable, and personalized logistics solutions to meet your unique
                        needs. 
                    </small>
                    <div>
                        <p>Site links</p>
                        <ul className="linkSec">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='ml-4'>
                        <p>Reach us at</p>
                        <ul className="list-none">
                            <li className='fhads'>
                                <i className="fas fa-phone"></i>
                                <span>+229 95 75 09 09</span>
                            </li>
                            <li className='fhads'>
                                <i className="fas fa-map-marker"></i>
                                <span>
                                    Maison Mohammed Bashir
                                    lot: 07, Pk10, Sèmé Kpodji Bénin,
                                    Cotonou Benin.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='copyright'>
                    © 2023 Alright reserve MB LOGISTICS
                </div>
            </div>
        </>
    )
}