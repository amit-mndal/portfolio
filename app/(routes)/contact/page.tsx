"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { StarHeader } from "@/components/shared/star-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   // Simulate submission — wire up to your preferred email service (Resend, EmailJS, etc.)
  //   await new Promise((r) => setTimeout(r, 1200));
  //   setLoading(false);
  //   setSubmitted(true);
  // };
 
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      "service_urkd2jn", // your service id
      "template_4fkb5oh", // your template id
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "DWTLSJZveVXCNSLLd" // your public key
    );

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }

  setLoading(false);
};




  return (
    <div className="flex min-h-screen flex-col">
      <StarHeader>
        <section className="relative py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Contact
              </h1> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="bg-linear-to-r from-slate-50 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
                  Contact
                </span>
              </motion.h1>




              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                Reach out to me
                {/* <br />
                 I&apos;m actively looking for SDE opportunities. */}
              </p>
            </motion.div>
          </div>
        </section>
      </StarHeader>

      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle className="h-16 w-16 text-primary" />
                  <h3 className="text-2xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }} variant="outline">
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about the role or project..."
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Or email directly at{" "}
                    <a href="mailto:marchamit07@gmail.com" className="text-primary hover:underline">
                      marchamit07@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right — contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="mb-2 text-2xl font-bold">Let&apos;s connect via</h2>
                {/* <p className="text-muted-foreground">
                  I&apos;m actively looking for SDE, backend, or full-stack roles. Whether you have
                  a position in mind or just want to chat tech — I&apos;d love to hear from you.
                </p> */}
              </div>

              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="border-2 transition-colors hover:border-primary">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {getIconComponent(social.icon, "h-5 w-5")}
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {social.name}
                          </p>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-colors hover:text-primary"
                          >
                            {social.url.replace("mailto:", "").replace("tel:", "")}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-primary">Currently open to -</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Full-time SDE roles (India or remote)</li>
                    <li>• Data / Systems Engineering positions</li>
                    <li>• AI / ML Engineering roles</li>
                    <li>• Startup </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
