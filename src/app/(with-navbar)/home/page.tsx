import Post from "@/components/Post";
import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { FaComment } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";

export default function Home() {
  return (
    <section>
      
    <div className="flex flex-col-reverse md:flex md:flex-row  gap-12 md:gap-0  justify-between items-center py-12 md:py-24">
      <div className="space-y-6 max-w-lg px-4 md:px-0">
        <h1 className="font-spectral text-xl text-orange-500 font-medium">
          Fation ----
        </h1>
        <h1 className="font-spectral text-3xl md:text-5xl font-semibold">
          Understanting The Background of Fation
        </h1>
        <p className="font-quicksand text-medium ">
          The decision about what to put into your paragraphs begins with the
          germination of a seed of ideas; this “germination process” is better
          known as brainstorming. There are many techniques for brainstorming;
          whichever one you choose, this stage of paragraph development cannot
          be skipped.{" "}
        </p>
        <button className="font-quicksand font-medium border-b-2 border-orange-500">
          View more
        </button>
      </div>
      <div>
        <div className="md:w-[528px] md:h-[528px] w-[320px] h-[320px] rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1659477373039-7fa49011ccb7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            width={528}
            height={528}
            className="object-cover"
          />
        </div>
      </div>
    </div>


    <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-5xl mx-auto gap-5 md:gap-16 py-12 md:py-24 px-4 md:px-0 ">
      <div><h1 className="border-b-2 border-orange-500 py-2 font-spectral text-sm  md:text-xl">Understaning The Background of Fation</h1></div>
      <div><h1 className="border-b-2 border-orange-500 py-2 font-spectral text-sm  md:text-xl">Feel The Love, And Thinks On My Mind</h1></div>
      <div><h1 className="border-b-2 border-orange-500 py-2 font-spectral text-sm  md:text-xl">Black Attack Earns, Boels First 2019 Victory</h1></div>
   
    </div>

    {/* Trending post
    
    */}


    <Post/>

  
      </section>
  );
}
