import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CONTACT_EMAIL = "info@labelmasters.com";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", company: "", message: "" });

  const contactInfo = [
    { icon: MapPin, label: t("contact.address") as string, value: t("footer.address") as string },
    { icon: Phone, label: t("contact.phone") as string, value: "(852) 2743 2218" },
    { icon: Mail, label: t("contact.emailLabel") as string, value: CONTACT_EMAIL },
    { icon: Clock, label: t("contact.hours") as string, value: t("contact.hoursValue") as string },
  ];

  const subject = `[${t("contact.headerTitle") as string}] ${form.name || ""} ${form.company ? `- ${form.company}` : ""}`.trim();
  const body = [
    `${t("contact.name") as string}: ${form.name}`,
    `${t("contact.company") as string}: ${form.company}`,
    "",
    form.message,
  ].join("\n");
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{t("contact.headerTag") as string}</p>
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{t("contact.headerTitle") as string}</h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/70">{t("contact.headerDesc") as string}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-xl font-bold text-foreground">{t("contact.sendMessage") as string}</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">{t("contact.name") as string} *</label>
                <Input maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("contact.namePlaceholder") as string} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">{t("contact.company") as string}</label>
                <Input maxLength={200} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={t("contact.companyPlaceholder") as string} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">{t("contact.message") as string} *</label>
                <Textarea maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("contact.messagePlaceholder") as string} />
              </div>
              <Button asChild size="lg" className="gradient-hero border-0 text-primary-foreground">
                <a href={mailtoHref}>
                  <Mail className="mr-2 h-4 w-4" />
                  {t("contact.submit") as string}
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold text-foreground">{t("contact.contactMethods") as string}</h2>
            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <c.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8!2d114.13!3d22.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIxJzM2LjAiTiAxMTTCsDA3JzQ4LjAiRQ!5e0!3m2!1sen!2shk!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
