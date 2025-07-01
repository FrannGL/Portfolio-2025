import Header from "@/components/custom/Header";

const cards = [
  {
    key: "ui",
    src: "/assets/logo_notimation.png",
    alt: "Notimation",
    text: "Notimation",
  },
  {
    key: "web",
    src: "/assets/jst.png",
    alt: "JST Seguridad en el Transporte",
    text: "JST | Seguridad en el Transporte",
  },
  { key: "seo", src: "/assets/finanex.png", alt: "Finanex", text: "Finanex" },
];

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-6.5 pt-5 gap-1 text-foreground">
      <Header
        title="My Clients"
        subtitle="Satisfied Partners"
        icon="ion:rocket-sharp"
      />

      <div className="mt-4 w-full overflow-hidden">
        <div className="flex w-fit gap-4 animate-[scroll-carousel-right_20s_linear_infinite]">
          {[...Array(2)].flatMap((_, i) =>
            cards.map(({ key, src, alt }) => (
              <div
                key={`${key}-${i}`}
                className="flex flex-col items-center justify-center w-48 h-[50px] bg-[#191919] text-white rounded-lg shadow-sm border border-[#212121] mx-2 p-1 flex-shrink-0"
              >
                <img
                  src={src}
                  alt={alt}
                  className="max-h-full object-contain"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
