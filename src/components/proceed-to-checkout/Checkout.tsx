import { ICheckOutProps } from "@/types/CheckOut";
import Button from "../buttons/Button";

export const Chceckout: React.FC<ICheckOutProps> = ({
  total,
  handlePayment,
}) => (
  <div className="bg-slate-50 shadow-2xl rounded-xl p-6 space-y-4 text-center border-2">
    <p className="text-lg flex items-center justify-between">
      <span>Sub Total:</span>
      <span>{total}$</span>
    </p>
    <p className="text-lg flex items-center justify-between">
      <span>Shipping</span>
      <span>Free</span>
    </p>
    <p className="text-lg  flex items-center justify-between">
      <span>Total:</span>
      <span>{total}$</span>
    </p>

    <Button
      onClick={handlePayment}
      className="px-4 py-2 bg-orange-500 rounded text-white"
    >
      Proceed to Checkout
    </Button>
  </div>
);
