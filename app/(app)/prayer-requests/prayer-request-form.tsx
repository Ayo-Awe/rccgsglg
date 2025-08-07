"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
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
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  prayerRequest: z.string().min(10, {
    message: "Prayer request must be at least 10 characters.",
  }),
});

export default function PrayerRequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const pastorEmail = "pastor@rccgsglg.com"; // Dummy email as requested

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      prayerRequest: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const mailtoLink = `mailto:${pastorEmail}?subject=${encodeURIComponent(
        `Prayer Request: ${values.subject}`
      )}&body=${encodeURIComponent(
        `Dear Pastor,\n\nI am writing to request your prayers.\n\nName: ${values.name}\nEmail: ${values.email}\n\nPrayer Request:\n${values.prayerRequest}\n\nThank you for your prayers.\n\nBlessings,\n${values.name}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast("Prayer request prepared!", {
        description: "Your email client should open with the prayer request ready to send.",
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
    <div className="bg-white rounded-3xl p-8 md:p-12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 md:space-y-8 font-roboto font-medium text-base text-[#374151]"
        >
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        {...field}
                        className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#64748B] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        placeholder="your.email@example.com"
                        {...field}
                        className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#64748B] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief description of your prayer request"
                      {...field}
                      className="border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#64748B] placeholder:text-sm md:placeholder:text-base shadow-none h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="prayerRequest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">
                    Prayer Request
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please share your prayer request in detail. We will keep this confidential and lift you up in prayer."
                      className="min-h-[160px] border-[#F1F5F9] placeholder:font-roboto placeholder:font-medium placeholder:text-[#64748B] placeholder:text-sm md:placeholder:text-base shadow-none"
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
                "Preparing..."
              ) : (
                <>
                  Send Prayer Request <Send className="ml-2 h-4.25 w-4.25" />
                </>
              )}
            </Button>
        </form>
      </Form>
    </div>
  );
}