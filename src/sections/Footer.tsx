import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16 border-t border-white/10">
            <div className="container">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    {/* Logo */}
                    <div>
                        <Image 
                            src={logoImage} 
                            alt="Layers Logo"
                            width={120} 
                            height={40} 
                        />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex gap-6">
                        {footerLinks.map((footer, index) => (
                            <Link 
                                key={index} 
                                href={footer.href} 
                                className="text-white/50 text-sm hover:text-lime-400 transition duration-300"
                            >
                                {footer.label}
                            </Link>
                        ))}
                    </nav>
                    <p className='text-white/50 text-center text-sm'>@Layers 2025 All right reserved.</p>
                </div>
                <p className='text-white/50 text-center text-sm pt-8'>Developed by Bishal Kc❤️</p>
              </div>
        </section>
    );
}
