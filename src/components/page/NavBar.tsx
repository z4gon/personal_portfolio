import IconLink from "../link/IconLink";
import GitHubIcon from "../icons/GitHubIcon";
import Link from "../link/Link";
import styles from "./NavBar.module.scss";
import { githubUser, githubUrl } from "../../config";

const icons = [
  {
    href: githubUrl,
    label: "GitHub profile",
    Icon: GitHubIcon,
  },
];

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li>
          <Link href="/" className={styles.titleLink}>
            {githubUser}
          </Link>
        </li>
        <li className={styles.secondaryLink}>
          <Link href="/">Portfolio</Link>
        </li>
        <li className={styles.secondaryLink}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <ul className={styles.icons}>
        {icons.map((icon) => (
          <li className={styles.icon} key={icon.href}>
            <IconLink {...icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
