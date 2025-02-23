import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MyProfile = () => {
  return (
    <div className="w-full  h-screen bg-gray-100 p-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 dark:bg-gray-900">
          <Card className="w-96  mx-auto shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-56 w-full bg-blue-500">
              <Avatar className="h-24 w-24">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full p-4">
              <h1 className="text-gray-900 dark:text-white text-2xl font-bold">
                John Doe
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                Software Engineer at Acme Inc.
              </p>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <MailIcon className="h-6 w-6" />
                <h6 className="mx-2 text-sm font-medium">
                  johndoe@example.com
                </h6>
              </div>
              <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                <PhoneIcon className="h-6 w-6" />
                <h6 className="mx-2 text-sm font-medium">+1 234 567 890</h6>
              </div>
              <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                <LocateIcon className="h-6 w-6" />
                <h6 className="mx-2 text-sm font-medium">New York, USA</h6>
              </div>
              <div className="flex justify-center mt-6">
               
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>
                Update your profile information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="address"
                  placeholder="Enter your address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" placeholder="Enter your pincode" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Input id="district" placeholder="Enter your district" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Change Profile</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export default MyProfile;

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
