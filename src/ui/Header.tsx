"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/style/header.module.css";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Проекты" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${
                  pathname === href ? styles.active : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
