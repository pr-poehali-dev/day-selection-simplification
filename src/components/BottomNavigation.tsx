import Icon from "@/components/ui/icon";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-1">
            <Icon name="Home" size={20} className="text-orange-500" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mb-1">
            <Icon name="FileText" size={20} className="text-yellow-600" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-1">
            <Icon name="ShoppingCart" size={20} className="text-red-500" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
            <Icon name="User" size={20} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
