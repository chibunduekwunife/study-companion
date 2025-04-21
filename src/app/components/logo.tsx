import Image from "next/image";
import Link from "next/link";

export const MainLogo = () => {
    return (
        <Link href={'/'}>
            <Image
                src="/sidebyside.png"
                alt="Logo"
                width={140} // Required
                height={140} // Required
                className='cursor-pointer'
            />
        </Link>
    )
}

export const LogoVariant = () => {
    return (
        <Link href={'/'}>
            <Image
                src="/logo-trans.png"
                alt="Logo"
                width={110} // Required
                height={110} // Required
                className='cursor-pointer'
            />
        </Link>
    )
}

export const OriginalLogo = () => {
    return (
        <Link href={'/'}>
            <Image
                src="/logo.png"
                alt="Logo"
                width={110} // Required
                height={110} // Required
                className='cursor-pointer'
            />
        </Link>
    )
}

export const MascotLogo = () => {
    return (
        <Link href={'/'}>
            <Image
                src="/owl.png"
                alt="Logo"
                width={90} // Required
                height={90} // Required
                className='cursor-pointer'
            />
        </Link>
    )
}

export const TextLogo = () => {
    return (
        <Link href={'/'}>
            <Image
                src="/textlogo.png"
                alt="Logo"
                width={160} // Required
                height={160} // Required
                className='cursor-pointer'
            />
        </Link>
    )
}

