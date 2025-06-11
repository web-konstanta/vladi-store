import { Category } from "@/lib/types";
import React from "react";
import Image from "next/image";

const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <div className="flex-shrink-0">
      <Image
        src={category.image!}
        alt={category.title}
        height={440}
        width={312}
        className="w-full rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold">{category.title}</h3>
      </div>
    </div>
  );
};

export default CategoryItem;
