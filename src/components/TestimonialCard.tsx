import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react'; // For a quote icon

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle?: string;
  authorAvatarSrc?: string;
  authorAvatarFallback?: string;
  companyLogoSrc?: string;
  companyName?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
  authorAvatarSrc,
  authorAvatarFallback = "A",
  // companyLogoSrc, // Potentially for future use
  // companyName,
}) => {
  console.log("Rendering TestimonialCard for:", authorName);

  return (
    <Card className="w-full max-w-md p-6 flex flex-col">
      <CardHeader className="p-0 mb-4">
        <Quote className="h-8 w-8 text-gray-300" />
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <p className="text-gray-700 italic mb-4">"{quote}"</p>
      </CardContent>
      <CardFooter className="p-0 mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            {authorAvatarSrc && <AvatarImage src={authorAvatarSrc} alt={authorName} />}
            <AvatarFallback>{authorAvatarFallback.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{authorName}</p>
            {authorTitle && <p className="text-xs text-gray-500">{authorTitle}</p>}
          </div>
        </div>
        {/* Optional: Company Logo
        {companyLogoSrc && companyName && (
          <div className="ml-auto">
            <img src={companyLogoSrc} alt={companyName} className="h-8"/>
          </div>
        )}
        */}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;