import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react'; // Icon for features list

interface PricingTierCardProps {
  tierName: string;
  price: string; // e.g., "$29" or "Free"
  priceFrequency: string; // e.g., "/month" or "one-time"
  description?: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  isPopular?: boolean; // To highlight a specific tier
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({
  tierName,
  price,
  priceFrequency,
  description,
  features,
  ctaText,
  onCtaClick,
  isPopular = false,
}) => {
  console.log("Rendering PricingTierCard:", tierName);

  return (
    <Card className={`w-full max-w-sm flex flex-col ${isPopular ? 'border-2 border-green-500 shadow-lg relative' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          POPULAR
        </div>
      )}
      <CardHeader className="pt-8"> {/* Added padding top for popular badge */}
        <CardTitle className="text-xl font-bold">{tierName}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <div className="mt-2">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="text-sm text-gray-500 ml-1">{priceFrequency}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onCtaClick} variant={isPopular ? 'default' : 'outline'}>
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingTierCard;