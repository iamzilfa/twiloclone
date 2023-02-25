import Link from "next/link";

const Button = ({ children, style, link }) => {
  return (
    <Link href={`${link}`} target="_blank">
      <button className={`py-4 px-5  font-bold tracking-[0.0125rem] leading-[1.625rem] text-base ${style}`}>{children}</button>
    </Link>
  );
};

export default Button;
