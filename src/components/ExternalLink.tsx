import type { FunctionalComponent, ComponentChildren } from "preact";
import styles from "./ExternalLink.module.scss";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import { classNames } from "../utils/classNames";

interface ExternalLinkProps {
  href: string;
  className?: string;
  Icon?: FunctionalComponent<{ className?: string }>;
  children: ComponentChildren;
}

const ExternalLink = ({
  href,
  className,
  Icon,
  children,
}: ExternalLinkProps) => {
  return (
    <a
      className={classNames(styles.externalLink, className)}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      {Icon ? (
        <Icon className={styles.iconSvg} />
      ) : (
        <ExternalLinkIcon className={styles.iconSvg} />
      )}
    </a>
  );
};

export default ExternalLink;
