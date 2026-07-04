"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, HelpCircle, Check, ChevronDown, ChevronUp } from "lucide-react";

interface Faq {
  question: string;
  answer: string;
}

export default function Contact() {
  const faqs: Faq[] = [
    {
      question: "Are my donations tax-deductible?",
      answer: "Yes, EVT is a registered 501(c)(3) non-profit organization. All donations are tax-deductible. After donating, you will receive a digital tax receipt via email immediately.",
    },
    {
      question: "How can I volunteer for river planting?",
      answer: "We hold community planting and cleanups every second Saturday of the month. You can sign up on our 'Get Involved' page or email contact@wildlifetrust.org. We provide all tools, gloves, and safety briefings.",
    },
    {
      question: "Can I donate physical land parcels?",
      answer: "Yes! We accept land donations and conservation easements in the Emerald Valley region. Please select 'Land Easements' in the contact form or call our director to discuss legal deed transfers.",
    },
    {
      question: "Do you offer educational talks for local schools?",
      answer: "Absolutely. Our field biologists lead free guided educational nature walks and classroom presentations on stream hydrology and salmon cycles. Get in touch via the form below.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");

  const toggleFaq = (idx: number) => {
    if (expandedFaq === idx) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(idx);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName("");
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative bg-emerald-950 py-20 text-white text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_forest.png"
            alt="Misty redwood forest conservation"
            fill
            priority
            className="object-cover opacity-25 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-emerald-950/90 to-emerald-950/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4 animate-fade-in pt-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/20 px-3 py-1 rounded-full border border-accent/20">
            Contact
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Get In Touch & FAQs
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about volunteer days, land donations, or school programs? Write to our regional office.
          </p>
        </div>
      </section>

      {/* 2. Interactive FAQ Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
            Help Center
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Quick answers regarding land donations, volunteering, and audits.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="bg-card border border-card-border rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-foreground hover:bg-muted-light font-serif font-bold text-sm sm:text-base transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-accent shrink-0" />
                    {faq.question}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-muted shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-card-border/60 text-xs sm:text-sm text-muted leading-relaxed animate-fade-in bg-muted-light/20">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Form & Coordinates */}
      <section className="py-16 bg-muted-light/35 border-t border-b border-card-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm">
              {formSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col justify-center items-center space-y-4 text-center animate-fade-in">
                  <div className="inline-flex p-3 bg-green-100 text-green-600 rounded-full">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-primary">Inquiry Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-muted max-w-sm leading-relaxed">
                    Thank you, <strong>{name}</strong>. A Trust representative will review your message and reply within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground">Send us a Message</h3>
                    <p className="text-xs text-muted mt-1">Fields marked with * are required.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="user-name" className="text-xs font-bold text-foreground block">Your Name *</label>
                      <input
                        id="user-name"
                        required
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-muted-light border border-card-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="user-email" className="text-xs font-bold text-foreground block">Email Address *</label>
                      <input
                        id="user-email"
                        required
                        type="email"
                        placeholder="name@example.com"
                        className="w-full bg-muted-light border border-card-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-subject" className="text-xs font-bold text-foreground block">Topic of Inquiry</label>
                    <select
                      id="inquiry-subject"
                      className="w-full bg-muted-light border border-card-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:border-primary"
                    >
                      <option>General Volunteering Days</option>
                      <option>Land Easements & Protection</option>
                      <option>School/Education Programs</option>
                      <option>Corporate Partnership & Audits</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="user-msg" className="text-xs font-bold text-foreground block">Your Message *</label>
                    <textarea
                      id="user-msg"
                      required
                      rows={5}
                      placeholder="Type details of your request here..."
                      className="w-full bg-muted-light border border-card-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full justify-center inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Coordinates Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Trust Office */}
              <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 space-y-6">
                <h3 className="font-serif font-bold text-xl">Trust Office</h3>
                <ul className="space-y-4 text-xs sm:text-sm">
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>142 Redwood Canopy Road,<br />Emerald Valley, CA 94025</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <span>+1 (800) 555-WILD</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent shrink-0" />
                    <span>contact@wildlifetrust.org</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-white/10 space-y-1 text-xs text-stone-200">
                  <span className="font-semibold block text-white">Office Hours:</span>
                  <span>Monday - Friday: 9:00 AM - 4:30 PM (PST)</span>
                  <span className="block">Saturday - Sunday: Field patrols only</span>
                </div>
              </div>

              {/* Local Advisory */}
              <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4 shadow-sm">
                <h4 className="font-serif font-bold text-foreground text-sm">Emergency Local Sightings?</h4>
                <p className="text-xs text-muted leading-relaxed">
                  To report injured local wildlife or urgent stream pollution, please call the California Department of Fish and Wildlife regional hotline directly at +1 (916) 445-0411.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
