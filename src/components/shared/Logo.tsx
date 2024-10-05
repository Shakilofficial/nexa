import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/images/NEXA.svg"
        alt="NEXA Logo"
        width={100}
        height={36}
        priority
      />
    </Link>
  );
}
