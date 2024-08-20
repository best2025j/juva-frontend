import { people01, people02 } from "./assets";
import CalendarGfg from "./components/Calender";

const Test = () => {
  return (
    <div className="flex space-y-2 flex-col px-6 pt-6 pb-4 mx-auto w-full bg-purple-50 rounded-[48px]">
      <div className="flex flex-col justify-center w-full rounded-3xl max-md:px-5">
        <div className="flex justify-between h-full w-full">
          <CalendarGfg />
        </div>

        {/*  */}
      </div>

      <div className="flex p-2 justify-between pt-6 ">
        <div className="flex-auto text-xl font-bold text-black">
          Appointments
        </div>
        <div className="my-auto text-base text-stone-500">view all</div>
      </div>

      <div className="flex gap-5 justify-between bg-white p-2 rounded-3xl">
        <img loading="lazy" srcSet={people02} className="w-12 h-12" />
        <div className="flex flex-col flex-1 justify-center">
          <div className="text-black/70 text-sm font-bold">Dr. Kate Paul</div>
          <div className="text-sm font-medium text-stone-500">
            Gynaecologist
          </div>
          <div className="text-base text-purple-800 whitespace-nowrap">
            February 4,{" "}
            <span className="text-xs font-bold text-black/70">2:00pm</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-between p-2 bg-white rounded-3xl">
        <img loading="lazy" srcSet={people01} className="w-12 h-12" />
        <div className="flex flex-col flex-1 justify-center">
          <div className="text-black/70 text-sm font-bold">
            Dr. Chidi Dickson
          </div>
          <div className="text-sm font-medium text-stone-500">
            General Practitioner
          </div>
          <div className="text-base text-purple-800 whitespace-nowrap">
            February 6,{" "}
            <span className="text-xs font-bold text-black/70">12:00pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
