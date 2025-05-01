
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex gap-6 mb-8">
        <div className="w-32 h-32 bg-black rounded-full shadow-lg"></div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600">тут будет отображаться ваш проект</p>
      </div>
    </div>
  );
};

export default Index;
