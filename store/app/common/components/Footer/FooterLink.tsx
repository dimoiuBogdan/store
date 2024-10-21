import Link from "next/link";
import type { FC } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const FooterLink: FC<Props> = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="transition-colors duration-200 hover:text-gray-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default FooterLink;
