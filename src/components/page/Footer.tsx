import IconLink from "../link/IconLink";
import GitHubIcon from "../icons/GitHubIcon";
import { githubUser, githubUrl } from "../../config";
import styles from "./Footer.module.scss";

const icons = [
  {
    href: githubUrl,
    label: "GitHub profile",
    Icon: GitHubIcon,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()}, {githubUser}
      </p>
      <ul className={styles.icons}>
        {icons.map((icon) => (
          <li className={styles.icon} key={icon.href}>
            <IconLink {...icon} />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
