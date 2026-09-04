import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  MessageCircle,
  Database,
  Users,
  Mail,
  FileText,
  Clock,
  Repeat,
  Zap,
  Smile,
  Wallet,
  Mail as MailIcon,
  Phone,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import nSymbol from "@/assets/n-symbol.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "NaniAiTech | AI Automation Agency for Businesses",
      },
      {
        name: "description",
        content:
          "NaniAiTech builds AI chatbots, WhatsApp assistants, CRM automation, lead-generation systems, email automation, and workflow solutions for businesses.",
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "author",
        content: "NaniAiTech",
      },
      {
        name: "application-name",
        content: "NaniAiTech",
      },
      {
        property: "og:title",
        content: "NaniAiTech | AI Automation Agency for Businesses",
      },
      {
        property: "og:description",
        content:
          "Automate customer support, WhatsApp conversations, lead generation, CRM workflows, email follow-ups, and repetitive business tasks with AI.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://naniaitech.vercel.app/",
      },
      {
        property: "og:site_name",
        content: "NaniAiTech",
      },
      {
        property: "og:locale",
        content: "en_IN",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "NaniAiTech | AI Automation Agency",
      },
      {
        name: "twitter:description",
        content:
          "AI automation solutions for customer support, WhatsApp, lead generation, CRM, email, and repetitive business tasks.",
      },
      {
        name: "theme-color",
        content: "#0f172a",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://naniaitech.vercel.app/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NaniAiTech",
          url: "https://naniaitech.vercel.app/",
          description:
            "AI automation agency helping businesses automate customer support, WhatsApp, lead generation, CRM workflows, email automation, and repetitive tasks.",
          email: "hello@naniaitech.com",
          telephone: "+919000157459",
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          knowsAbout: [
            "AI Automation",
            "AI Chatbots",
            "WhatsApp AI Assistants",
            "CRM Automation",
            "Lead Generation",
            "Email Automation",
            "Document Processing",
          ],
          sameAs: ["https://www.linkedin.com/in/naniaitech/"],
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent chatbots that answer questions, qualify leads, and support customers 24/7.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp AI Assistants",
    description:
      "Automated WhatsApp conversations that keep your customers engaged and informed.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    description:
      "Sync, update, and manage your CRM automatically so no lead falls through the cracks.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "AI-powered outreach and capture systems that bring qualified prospects to your pipeline.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Personalized email sequences triggered by behavior, saving hours of manual follow-up.",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Extract data, sort files, and generate reports automatically from documents and forms.",
  },
];

const reasons = [
  { icon: Clock, title: "Save 20+ hours every week" },
  { icon: Repeat, title: "Reduce repetitive work" },
  { icon: Zap, title: "Increase response speed" },
  { icon: Smile, title: "Improve customer experience" },
  { icon: Wallet, title: "Affordable automation solutions" },
];

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9000157459",
    href: "tel:+919000157459",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919000157459",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@naniaitech.com",
    href: "mailto:hello@naniaitech.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/naniaitech/",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container-tight flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src={nSymbol}
              alt="NaniAiTech"
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold text-black">NaniAiTech</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#why-us" className="transition-colors hover:text-foreground">
              Why Us
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <Button asChild size="sm" className="bg-navy text-navy-foreground hover:bg-navy/90">
            <a href="#contact">
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="container-tight relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
            <Zap className="h-4 w-4 text-teal" />
            AI automation for modern businesses
          </div>
          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl">
            AI Automation Agency Helping Businesses Save Time and Grow
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            NaniAiTech builds AI chatbots, WhatsApp assistants, CRM automations,
            lead-generation systems, and workflow automations that reduce repetitive
            work and help businesses respond faster.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-navy px-8 text-lg font-semibold text-navy-foreground shadow-lg shadow-navy/15 transition-all hover:bg-navy/90 hover:shadow-xl hover:shadow-navy/20"
              asChild
            >
              <a href="#contact">
                Book a Free AI Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border px-8 text-lg font-semibold hover:bg-soft"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-0 -z-0 h-[400px] w-[400px] rounded-full bg-navy/5 blur-3xl" />
      </section>

      {/* Services */}
      <section id="services" className="section-padding border-t border-border bg-soft/50">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-teal">Services</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Automation solutions built for your business
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-navy-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding">
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal">Why Us</h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Why Choose NaniAiTech?
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We combine smart AI tools with practical business thinking to deliver automation
                that actually works.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                      <reason.icon className="h-5 w-5" />
                    </div>
                    <p className="font-medium text-navy">{reason.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy/5 to-teal/10 p-10">
                <div className="flex h-full flex-col justify-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response time</p>
                      <p className="text-2xl font-bold text-navy">24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hours saved weekly</p>
                      <p className="text-2xl font-bold text-navy">20+*</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cost reduction</p>
                      <p className="text-2xl font-bold text-navy">40%*</p>
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  *Potential results vary by business, workflow, and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding border-t border-border bg-navy text-navy-foreground">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-teal">Contact</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to automate your business?
            </p>
            <p className="mt-4 text-lg text-navy-foreground/70">
              Book your free AI consultation or reach out directly. We will get back to you within
              24 hours.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-teal px-8 text-lg font-semibold text-teal-foreground shadow-lg shadow-teal/20 transition-all hover:bg-teal/90 hover:shadow-xl"
              asChild
            >
              <a
                href="https://wa.me/919000157459?text=Hi%20NaniAiTech%2C%20I%27d%20like%20a%20free%20AI%20automation%20consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free AI Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-8 text-center transition-colors hover:bg-navy-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-teal-foreground">
                  <contact.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-sm font-medium text-navy-foreground/60">{contact.label}</p>
                <p className="mt-1 font-semibold">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="container-tight flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="/" className="flex items-center gap-2">
            <img
              src={nSymbol}
              alt="NaniAiTech"
              className="h-7 w-auto"
            />
            <span className="text-lg font-bold text-black">NaniAiTech</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NaniAiTech. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
