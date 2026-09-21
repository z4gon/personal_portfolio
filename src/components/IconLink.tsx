import type { FunctionalComponent } from "preact";
import styles from "./IconLink.module.scss";

interface IconLinkProps {
  Icon: FunctionalComponent<{ className?: string }>;
  href: string;
}

const IconLink = ({ href, Icon }: IconLinkProps) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <Icon className={styles.iconSvg} />
    </a>
  );
};

export default IconLink;
