import { useShoppingCart } from "@/hooks/useShoppingCart";
import ButtonFilled from "@/components/shared/button/ButtonFilled";
import PriceRow from "@/components/shared/PriceRow";
import StickyModalFooter from "../StickyModalFooter";

import { useUserAddress } from "@/hooks/useUserAddress";

interface FooterProps {
  onOrderClick: () => "teste";
}
export default function Footer({ onOrderClick }: FooterProps) {
  // Shopping Cart
  const { address } = useUserAddress();
  // Shopping Cart
  const { totalPayment } = useShoppingCart();

  const handleOrderClick = () => {
    alert("Order Closed");
    onOrderClick();
  };

  return (
    <StickyModalFooter>
      <PriceRow lable="Total Payment" amount={totalPayment} />
      <ButtonFilled className="w-full mt-2" onClick={handleOrderClick}>
        Order Now
      </ButtonFilled>
    </StickyModalFooter>
  );
}
