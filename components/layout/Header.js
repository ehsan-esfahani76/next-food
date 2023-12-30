import Navbar from "./Navbar";
import Button from "../Button";
export default function Header() {
  return (
    <div className="h-[50vh] md:h-[80vh] bg-cover bg-center bg-no-repeat text-white">
      <Navbar />
      <img
        src={"/assets/images/hero-bg.jpg"}
        className="w-full object-cover max-w-[100%] h-[50vh] lg:h-[80vh]"
      />
      <div className="absolute z-10 right-1/2 translate-x-1/2 lg:translate-x-0 top-24 text-center lg:right-32 lg:top-1/4 lg:leading-8 lg:text-right w-full md:w-auto">
        <h1 className="text-yellow-600 text-2xl md:text-4xl">عنوان</h1>
        <p className="lg:pt-10 lg:w-96 lg:block hidden">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
        <div className="lg:block hidden lg:mt-10">
          <Button to={"/menu"}>سفارش</Button>
        </div>
      </div>
    </div>
  );
}
