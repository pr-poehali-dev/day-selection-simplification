import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    people: "1 человек",
    startDay: "",
    duration: "",
    customDays: "",
    eatSaturday: true,
    eatWeekend: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.startDay && formData.duration;

  return (
    <div className="px-4 space-y-4">
      {/* Количество людей */}
      <div className="flex items-center space-x-2">
        <Select
          value={formData.people}
          onValueChange={(value) => handleInputChange("people", value)}
        >
          <SelectTrigger className="flex-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1 человек">1 человек</SelectItem>
            <SelectItem value="2 человека">2 человека</SelectItem>
            <SelectItem value="3 человека">3 человека</SelectItem>
            <SelectItem value="4 человека">4 человека</SelectItem>
          </SelectContent>
        </Select>
        <Button
          size="sm"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Icon name="ChevronDown" size={16} />
        </Button>
      </div>

      {/* С какого дня */}
      <div className="flex items-center space-x-2">
        <Select
          value={formData.startDay}
          onValueChange={(value) => handleInputChange("startDay", value)}
        >
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="С какого дня?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="понедельник">Понедельник</SelectItem>
            <SelectItem value="вторник">Вторник</SelectItem>
            <SelectItem value="среда">Среда</SelectItem>
            <SelectItem value="четверг">Четверг</SelectItem>
            <SelectItem value="пятница">Пятница</SelectItem>
            <SelectItem value="суббота">Суббота</SelectItem>
            <SelectItem value="воскресенье">Воскресенье</SelectItem>
          </SelectContent>
        </Select>
        <Button
          size="sm"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Icon name="ChevronDown" size={16} />
        </Button>
      </div>

      {/* Неделя */}
      <div className="flex items-center space-x-2">
        <Select
          value={formData.duration}
          onValueChange={(value) => handleInputChange("duration", value)}
        >
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Неделя" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1 неделя">1 неделя</SelectItem>
            <SelectItem value="2 недели">2 недели</SelectItem>
            <SelectItem value="3 недели">3 недели</SelectItem>
            <SelectItem value="4 недели">4 недели</SelectItem>
          </SelectContent>
        </Select>
        <Button
          size="sm"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Icon name="ChevronDown" size={16} />
        </Button>
      </div>

      {/* Или укажите количество дней */}
      <div>
        <Input
          placeholder="Или укажите количество дней"
          value={formData.customDays}
          onChange={(e) => handleInputChange("customDays", e.target.value)}
          className="w-full"
        />
      </div>

      {/* Чекбоксы */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="saturday"
            checked={formData.eatSaturday}
            onCheckedChange={(checked) =>
              handleInputChange("eatSaturday", checked)
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
              handleInputChange("eatWeekend", checked)
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
        <Button
          className={`w-full py-3 text-white font-medium transition-all duration-200 ${
            isFormValid
              ? "bg-green-500 hover:bg-green-600 hover:scale-105"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Далее
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
