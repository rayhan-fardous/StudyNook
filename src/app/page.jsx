import Banner from "@/components/home/Banner";
import LatestRooms from "@/components/home/LatestRooms";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyStudy from "@/components/home/WhyStudy";

const page = () => {
  return (
    <div>
      <Banner/>
      <LatestRooms/>
      <WhyStudy/>
      <TestimonialsSection/>
    </div>
  );
};

export default page;