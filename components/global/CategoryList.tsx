"use client";
import Image from "next/image";
import type { Category } from "@/types";

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="flex overflow-x-auto gap-4 pb-4 md:pb-6 scrollbar-hide">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white/20 backdrop-blur-md p-4 w-[20rem] h-[6rem] rounded-lg text-center flex-shrink-0"
        >
          <div className="flex items-center gap-3">
            <Image
              src={category.icon}
              alt={category.title}
              width={56}
              height={56}
            />
            <span>{category.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}