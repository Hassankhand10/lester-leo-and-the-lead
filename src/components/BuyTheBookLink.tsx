import { Link } from "react-router-dom";
import { orderPath } from "@/lib/books";

type BuyTheBookLinkProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/** Routes shoppers straight to format selection / order on the book page. */
export function BuyTheBookLink({ className, children, onClick }: BuyTheBookLinkProps) {
  return (
    <Link to={orderPath} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
