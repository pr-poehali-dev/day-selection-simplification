import Header from "@/components/Header";
import CalorieCard from "@/components/CalorieCard";
import OrderForm from "@/components/OrderForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        <Header />

        <div className="pt-4">
          <h1 className="text-2xl font-bold text-gray-900 px-4 mb-6">
            Добавить еду
          </h1>
          <CalorieCard />
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
