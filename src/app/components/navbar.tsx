import {
    MainLogo,
    MascotLogo,
    TextLogo
} from "@/app/components/logo";


export default function Navbar() {
    return (
        <div className='bg-gradient-to-b from-sky-100 to-background'>
            <div className='w-[80%] m-auto flex justify-between items-center p-2'>
                <div className='hidden lg:block'>
                    <MainLogo />
                </div>
                <div className='lg:hidden'>
                    <MascotLogo/>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}