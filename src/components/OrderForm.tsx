import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    eatSaturday: false,
    eatWeekend: false,
  });

  const handleInputChange = (field: string, value: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="px-4 space-y-6">
      {/* Чекбоксы */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="saturday"
            checked={formData.eatSaturday}
            onCheckedChange={(checked) =>
              handleInputChange("eatSaturday", checked as boolean)
            }
          />
          <label htmlFor="saturday" className="text-sm font-medium">
            Питаюсь в субботу
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="weekend"
            checked={formData.eatWeekend}
            onCheckedChange={(checked) =>
              handleInputChange("eatWeekend", checked as boolean)
            }
          />
          <label htmlFor="weekend" className="text-sm font-medium">
            Питаюсь в субботу и воскресенье
          </label>
        </div>
      </div>

      {/* Цена */}
      <div className="py-4">
        <div className="text-lg font-medium">1050 р/день</div>
      </div>

      {/* Кнопка Далее */}
      <div className="pt-6 pb-4">
        <Button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium">
          Далее
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
