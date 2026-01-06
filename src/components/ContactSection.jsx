import {
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Send as SendIcon,
  Github as GithubIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Contact Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background/70 backdrop-blur p-10">

          <h3 className="text-2xl font-semibold mb-8 text-center">
            Contact Information
          </h3>

          {/* Contact Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MailIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">
                  ranajeet.professional.work@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <PhoneIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+918969036495"
                  className="font-medium hover:text-primary transition-colors"
                >
                  +91 9339834464
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 sm:col-span-2 justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPinIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground text-center">
                  Location
                </p>
                <p className="font-medium text-center">India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-10 text-center">
            <p className="font-medium mb-4">Connect With Me</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ranajeet-roy-459ab5236/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>

              <a
                href="https://github.com/Rana-NST-RU"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                title="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
