import { Image } from 'next/image';

export function RegistrationButton({ registration }) {
    return (
        <>
            {
                (registration - new Date().getTime() > 0) ? (
                    <button className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent hover:bg-HSWsecondary-2 w-fit">Registration Not Released</button>
                ) : (
                    <div className="bg-HSWsecondary text-red-500 px-4 py-2 rounded-md max-lg:text-sm border border-red-500 flex gap-2 justify-center items-center">
                        <p className='text-2xl max-lg:text-sm font-extrabold'>Closed</p>
                    </div>
                )
            }
        </>
    )
}