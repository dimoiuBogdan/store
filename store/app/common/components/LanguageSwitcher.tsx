"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import type { JSX } from "react";
import { cn, getCurrentPathWithoutLang } from "../utils/utils";

export default function LanguageSwitcher(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChangeLanguage = (locale: "en" | "ro"): void => {
    router.replace(`/${locale}/${getCurrentPathWithoutLang(pathname)}`);
  };

  return (
    <div className="flex items-center gap-x-2 text-sm">
      <div
        className={cn(
          "cursor-pointer rounded bg-zinc-800 px-3 py-2 text-center font-medium text-zinc-200 shadow shadow-primary transition-all hover:bg-primary hover:text-zinc-800",
          {
            "bg-primary text-zinc-800": locale === "en",
          },
        )}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </div>
      <div
        className={cn(
          "cursor-pointer rounded bg-zinc-800 px-3 py-2 text-center font-medium text-zinc-200 shadow shadow-primary transition-all hover:bg-primary hover:text-zinc-800",
          {
            "bg-primary text-zinc-800": locale === "ro",
          },
        )}
        onClick={() => handleChangeLanguage("ro")}
      >
        RO
      </div>
    </div>
  );
}
