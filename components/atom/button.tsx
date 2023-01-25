import Link from "next/link";
import * as React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  href?: string;
  external?: boolean;
}

const Button = ({ children, href, external = false, ...props }: Props) => {
  const sharedClassNames =
    "inline-block bg-primary font-bold text-xs uppercase px-24 py-8 tracking-widest";

  // external link
  if (href && external)
    return (
      <a
        className={sharedClassNames}
        href={href}
        target="__blank"
        rel="noreferrer noopenner"
      >
        {children}
      </a>
    );

  // internal link
  if (href)
    return (
      <Link className={sharedClassNames} href={href}>
        {children}
      </Link>
    );

  // button
  return (
    <button className={sharedClassNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
