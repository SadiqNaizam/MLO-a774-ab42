import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Using shadcn Avatar as an icon holder
import { Star } from 'lucide-react'; // Example icon

interface BenefitHighlightItemProps {
  icon?: React.ElementType; // Optional: Pass a Lucide icon component
  iconSrc?: string; // Optional: Or an image URL for an Avatar
  iconFallbackText?: string;
  title: string;
  description: string;
}

const BenefitHighlightItem: React.FC<BenefitHighlightItemProps> = ({
  icon: IconComponent,
  iconSrc,
  iconFallbackText = "B",
  title,
  description,
}) => {
  console.log("Rendering BenefitHighlightItem:", title);

  return (
    <div className="flex flex-col items-center text-center p-4 sm:flex-row sm:text-left sm:items-start sm:space-x-4">
      <div className="flex-shrink-0 mb-3 sm:mb-0">
        {IconComponent ? (
          <IconComponent className="h-10 w-10 text-green-600" />
        ) : (
          <Avatar className="h-12 w-12">
            {iconSrc && <AvatarImage src={iconSrc} alt={title} />}
            <AvatarFallback>{iconFallbackText}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BenefitHighlightItem;