import { ShoppingBag } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="text-white" size={30} />
      <h1 className="text-2xl font-bold text-white">
        CampusCart
      </h1>
    </div>
  );
}

export default Logo;