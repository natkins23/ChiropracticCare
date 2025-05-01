import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, Check } from 'lucide-react';
import { useState } from 'react';

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  preferredContact: z.enum(["email", "phone"]),
  appointmentType: z.string().min(1, { message: "Please select an appointment type" }),
  message: z.string().min(10, { message: "Please provide some details about your issue" }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const appointmentTypes = [
  { value: "new-patient", label: "New Patient Consultation" },
  { value: "follow-up", label: "Follow-up Visit" },
  { value: "emergency", label: "Urgent Care / Same Day" },
  { value: "massage", label: "Massage Therapy" },
  { value: "second-opinion", label: "Second Opinion" },
];

const ContactNowModal: React.FC<ContactNowModalProps> = ({ open, onOpenChange }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Initialize react-hook-form with Zod validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      appointmentType: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    form.reset();
    setIsSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!newOpen) {
        // Reset the form when closing the dialog
        resetForm();
      }
      onOpenChange(newOpen);
    }}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Contact Us Now
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Fill out the form below and we'll get back to you promptly.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-10 flex flex-col items-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Message Sent!</h3>
            <p className="text-center text-gray-600 mb-6">
              Thank you for reaching out to us. One of our staff members will contact you shortly.
            </p>
            <DialogClose asChild>
              <Button variant="default" onClick={resetForm}>Close</Button>
            </DialogClose>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="preferredContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Contact Method</FormLabel>
                      <div className="flex space-x-4 pt-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="email-contact"
                            value="email"
                            checked={field.value === 'email'}
                            onChange={() => field.onChange('email')}
                            className="mr-2 h-4 w-4"
                          />
                          <Label htmlFor="email-contact" className="flex items-center cursor-pointer">
                            <Mail className="h-4 w-4 mr-1" /> Email
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="phone-contact"
                            value="phone"
                            checked={field.value === 'phone'}
                            onChange={() => field.onChange('phone')}
                            className="mr-2 h-4 w-4"
                          />
                          <Label htmlFor="phone-contact" className="flex items-center cursor-pointer">
                            <Phone className="h-4 w-4 mr-1" /> Phone
                          </Label>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="appointmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an appointment type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your symptoms or the reason for your visit..." 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4 flex justify-end space-x-2">
                <DialogClose asChild>
                  <Button variant="outline" type="button">Cancel</Button>
                </DialogClose>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactNowModal;