import {
    LogoVariant,
    MainLogo,
    MascotLogo, OriginalLogo,
    TextLogo
} from "@/app/components/logo";
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='bg-blue-950'>
            <div className='w-[80%] m-auto flex justify-between items-center'>
                <div className='py-1'>
                    <div className='hidden lg:block'>
                        <OriginalLogo/>
                    </div>
                    <div className='lg:hidden'>
                        <MascotLogo/>
                    </div>
                </div>
                <div className='flex gap-x-2'>
                    <Link
                        href="/chat">
                        <button>Launch Chat</button>
                    </Link>
                    <Link
                        href="/quiz">
                        <button>Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}