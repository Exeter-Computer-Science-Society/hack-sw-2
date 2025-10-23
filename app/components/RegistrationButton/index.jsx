import { Image } from 'next/image';
import Link from 'next/link';

export function RegistrationButton({ registration_open, registration_closed, force=false }) {
    
    return (
        <>
            {
                // is registration link available yet
                (registration_open - new Date().getTime() < 0) && (!force) ? (
                    <>
                        {
                            (registration_closed - new Date().getTime() > 0) ? (
                                <Link href="https://dorahacks.com/hack-south-west-ctf" target="_blank" className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent hover:bg-HSWsecondary-2 w-fit max-lg:text-sm flex text-center hover:scale-105 animate-all duration-200 ">
                                    <p className='text-2xl max-lg:text-sm font-extrabold'>Register Now</p>
                                </Link>
                            ) : (
                                <div className="bg-HSWsecondary text-red-500 px-4 py-2 rounded-md max-lg:text-sm border border-red-500 flex gap-2 justify-center items-center">
                                    <p className='text-2xl max-lg:text-sm font-extrabold'>Closed</p>
                                </div>
                            )
                        }
                    </>
                ) : (
                    <button className="bg-HSWsecondary px-4 py-2 rounded-md border border-gray-500 text-gray-500 hover:bg-HSWsecondary-2 w-fit">Registration Pending ...</button>
                )
            }
        </>
    )
}