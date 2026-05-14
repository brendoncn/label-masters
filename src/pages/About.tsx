import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import aboutImg from "@/assets/about-factory.jpg";

const About = () => {
  const { t } = useLanguage();
  const timelineItems = t("about.timelineItems") as { year: string; event: string }[];

  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{t("about.headerTag") as string}</p>
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{t("about.headerTitle") as string}</h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/70">{t("about.headerDesc") as string}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 overflow-hidden rounded-lg shadow-elevated">
            <img src={aboutImg} alt="Factory" loading="lazy" className="w-full object-cover aspect-video" width={1280} height={720} />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-foreground">{t("about.companyName") as string}</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t("about.intro1") as string}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("about.intro2") as string}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-2xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t("about.timeline") as string}</h2>
          <div className="relative border-l-2 border-accent/30 pl-8">
            {timelineItems.map((item) => (
              <div key={item.year} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-card text-[10px] font-bold text-accent" />
                <p className="text-sm font-bold text-accent">{item.year}</p>
                <p className="text-sm text-muted-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
