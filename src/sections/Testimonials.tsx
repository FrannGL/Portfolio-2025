import Header from "@/components/custom/Header";
import TestimonialCard from "@/components/custom/TestimonialCard";

const testimonials = [
  {
    name: "Kevin Fiorentino",
    company: "Notimation",
    date: "16/10/2024",
    content:
      'Trabajé más de un año con Fran, indirectamente, como líder de su líder. Realmente ha sido exponencial ver su crecimiento como desarrollador front-end. Desde arrancar completamente de abajo, sabiendo lo básico, a hacerse cargo de proyectos y desarrollos grandes en poco tiempo. Fran hizo ese "clic" que considero deben hacer los programadores en donde demuestran haber "pasado de nivel". Un día comenzó a proponer, analizar, resolver a otro ritmo. Con mayor eficacia, eficiencia e incluso en cantidad de tareas. Sumado a su buen trato diario y gran comunicación constante que ha tenido con su líder o directamente conmigo. Tienen todos los soft y hard skills necesarios para este trabajo. Todo por delante como desarrollador de software.',
    avatarUrl: "/assets/testimonials-01.jfif",
  },
  {
    name: "Lucía Dias",
    company: "Notimation",
    date: "25/03/2024",
    content:
      "Hace casi un año que trabajo con Franco en el equipo de desarrollo front-end en Notimation. Desde el principio, demostró un entusiasmo notable por aprender y una actitud proactiva por resolver sus tareas. Franco aborda sus responsabilidades con rapidez y eficacia. Destaca como una persona muy comunicativa, amigable y de confianza. Sin duda, se convirtió en un pilar fundamental de nuestro equipo. Recomiendo absolutamente trabajar con él.",
    avatarUrl: "/assets/testimonials-02.jfif",
  },
  {
    name: "Sofía Pereira",
    company: "Uruguay",
    date: "5/04/2025",
    content:
      "Muy buena comunicación y resultados. Me sentí acompañada en todo momento. Definitivamente volvería a elegirlo.",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-5 gap-2 text-foreground">
      <Header
        title="Testimonials"
        subtitle="Rave Reviews Showcase"
        icon="ion:happy-sharp"
      />

      <div className="testimonial-carousel mt-2 h-[250px] overflow-hidden">
        <div className="testimonial-carousel-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(3)
            .fill(null)
            .flatMap(() => testimonials)
            .map((t, index) => (
              <TestimonialCard key={`${t.name}-${index}`} {...t} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
