import Clients from "./sections/Clients";
import Follow from "./sections/Follow";
import Indicator from "./sections/Indicator";
import ProfileCard from "./sections/Profile";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Stacks from "./sections/Stacks";
import Testimonials from "./sections/Testimonials";
import WorkProcess from "./sections/WorkProcess";
import WorkTogether from "./sections/WorkTogether";

function App() {
  const indicators = [
    { value: 10, label: "Projects", iconName: "ion:flag" },
    { value: 3, label: "Happy Clients", iconName: "mingcute:happy-fill" },
    { value: "02", label: "Year Expertise", iconName: "ion:star" },
  ];

  return (
    <div className="min-h-screen h-screen grid grid-cols-1 xl:grid-cols-[25%_32%_41%] gap-3 p-8 text-white">
      <div className="flex flex-col gap-3 order-2 md:order-none">
        <div className="bg-[#101010] rounded-3xl border border-[rgba(33,33,33,0.8)]">
          <Stacks />
        </div>
        <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)]">
          <Projects />
        </div>
        <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)]">
          <Services />
        </div>
      </div>

      <div className="flex flex-col gap-3.5 order-1 md:order-none">
        <div className="order-2 md:order-none rounded-xl">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {indicators.map((item, i) => (
              <Indicator
                key={i}
                value={item.value}
                label={item.label}
                iconName={item.iconName}
              />
            ))}
          </div>
        </div>

        <div className="order-1 md:order-none">
          <ProfileCard />
        </div>

        <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] order-3 md:order-none">
          <Clients />
        </div>
      </div>

      <div className="flex flex-col gap-3 order-3 md:order-none">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] md:w-[56%]">
            <Testimonials />
          </div>
          <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] md:w-[44%]">
            <WorkProcess />
          </div>
        </div>

        <div className="flex flex-col md:flex-row order-4 md:order-none gap-2">
          <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] md:w-[40%]">
            <Follow />
          </div>
          <div className="bg-[#101010] rounded-xl border border-[rgba(33,33,33,0.8)] mb-10 sm:mb-0 md:w-[60%]">
            <WorkTogether />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
