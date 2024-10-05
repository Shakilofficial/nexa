import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/logo.svg"
        alt="Company Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
}
