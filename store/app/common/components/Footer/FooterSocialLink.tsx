import Link from "next/link";
import type { FC } from "react";

type Props = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
};

const FooterSocialLink: FC<Props> = ({ href, children, ariaLabel }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all hover:text-gray-300"
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);

export default FooterSocialLink;
