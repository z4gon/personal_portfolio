import type { FunctionalComponent } from "preact";
import styles from "./IconLink.module.scss";
import Link from "./Link";

interface IconLinkProps {
  Icon: FunctionalComponent<{ className?: string }>;
  href: string;
}

const IconLink = ({ href, Icon }: IconLinkProps) => {
  return (
    <Link href={href} newTab>
      <Icon className={styles.iconSvg} />
    </Link>
  );
};

export default IconLink;
