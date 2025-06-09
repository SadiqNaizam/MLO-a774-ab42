import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Home, BookOpen } from 'lucide-react';

const ThankYouPage = () => {
  console.log('ThankYouPage loaded');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-cyan-50 p-4">
      <Card className="w-full max-w-md shadow-xl text-center">
        <CardHeader className="items-center">
          <Avatar className="h-16 w-16 bg-green-100 mb-4">
            {/* You can use an image or a fallback icon */}
            {/* <AvatarImage src="/path/to/success-icon.png" alt="Success" /> */}
            <AvatarFallback>
              <CheckCircle className="h-10 w-10 text-green-600" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold text-gray-800">Thank You!</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Your submission has been received.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-2">
            We appreciate you reaching out. Our team will review your request and get back to you shortly.
          </p>
          <p className="text-sm text-gray-500">
            Expect a response within 24-48 business hours.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Button asChild variant="default" size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Back to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/blog"> {/* Example link */}
              <BookOpen className="mr-2 h-4 w-4" /> Read Our Blog
            </a>
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-8 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.
      </p>
    </div>
  );
};

export default ThankYouPage;