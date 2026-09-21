import type { AnchorHTMLAttributes, ComponentChildren } from 'preact'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  newTab?: boolean
  className?: string
  children?: ComponentChildren
}

/**
 * Base link component. Renders a plain anchor;
 * set `newTab` to open in a new tab (adding noopener noreferrer).
 */
export const Link = ({
  href,
  newTab,
  className,
  children,
  ...rest
}: LinkProps) => (
  <a
    href={href}
    target={newTab ? '_blank' : undefined}
    rel={newTab ? 'noopener noreferrer' : undefined}
    className={className}
    {...rest}
  >
    {children}
  </a>
)

export default Link
