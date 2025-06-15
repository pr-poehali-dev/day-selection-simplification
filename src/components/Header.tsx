import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <Button
        variant="ghost"
        size="sm"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4"
      >
        <Icon name="ArrowLeft" size={20} />
      </Button>
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">Корзина 1</div>
      </div>
      <Button variant="ghost" size="sm">
        <Icon name="Menu" size={24} />
      </Button>
    </div>
  );
};

export default Header;
