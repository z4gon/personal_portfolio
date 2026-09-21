import type { FunctionalComponent } from "preact";
import styles from "./IconLink.module.scss";
import Link from "./Link";

interface IconLinkProps {
  Icon: FunctionalComponent<{ className?: string }>;
  href: string;
  /** Accessible name for the link, required since the link has no text. */
  label: string;
}

const IconLink = ({ href, Icon, label }: IconLinkProps) => {
  return (
    <Link href={href} newTab aria-label={label}>
      <Icon className={styles.iconSvg} />
    </Link>
  );
};

export default IconLink;
