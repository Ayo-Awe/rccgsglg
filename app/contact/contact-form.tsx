"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit() {
    setIsLoading(true);
    try {
      // Here you would typically send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      toast("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch {
      toast("Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card
      className="border-none rounded-3xl py-10"
      style={{
        boxShadow: "4px 4px 24px 0px #00000040",
      }}
    >
      <CardHeader>
        <CardTitle className="font-roboto font-semibold text-xl md:text-2xl text-rccg-dark-blue">
          Get in touch with us
        </CardTitle>
        <CardDescription className="font-roboto font-normal text-[#94A3B8] text-sm md:text-base">
          Got questions or need more information? We are here and happy to help!
          Please leave a message and we will get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 md:space-y-8 font-roboto font-medium text-base text-[#374151]"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your First name"
                        {...field}
                        className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#CBD5E1] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Last name"
                        {...field}
                        className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#CBD5E1] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Sample@gmail.com"
                        {...field}
                        className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#CBD5E1] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your phone number"
                        {...field}
                        className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#CBD5E1] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here......"
                      className="min-h-[160px] border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#CBD5E1] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-gradient-to-r from-rccg-yellow to-rccg-gold text-[#fafafa] py-3.75 px-8 h-15 rounded-sm w-full text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Contact Us <Send className="ml-2 h-4.25 w-4.25" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
