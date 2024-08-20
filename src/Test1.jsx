import { people01, people02, people03 } from "./assets";

function Test1() {
  return (
    <div className="flex flex-col h-full w-full max-w-lg p-4 font-inter">
      <div className="text-2xl font-bold text-black">
        <h1 className="text-base"> Find your doctor</h1>
        <h1 className="text-3xl">Your health status</h1>
      </div>

      <div className="flex gap-1 mt-4 whitespace-nowrap text-stone-500 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col w-40 h-full items-center rounded-full text-white bg-purple-800">
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb66570c1c3aaf50a504e78590db9c110260bf577ec95d2016fa373f7e76f8d7?"
              className="aspect-[1.50] w-9"
            />
            <div className="text-sm">Pulse</div>
          </div>

          <div className="text-sm">62 bpm</div>
        </div>

        <div className="flex flex-col w-40 h-full items-center rounded-full bg-fuchsia-200">
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a28ee5ace59edc1464121c2242215eeccf279144880a96613189ae55d75ab779?"
              className="w-9 aspect-[1.50]"
            />
            <div className="text-sm">Blood Pressure</div>
          </div>
          <div className="text-sm">110/80</div>
        </div>

        <div className="flex flex-col w-40 h-full items-center rounded-full bg-neutral-200">
          <div className="flex items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c284c5b8f0e573cc814d98da8c9a7dc7b6fe9998f842c4252847f06f7414a3d1?"
              className="w-9 aspect-[1.50]"
            />
            <div className="text-sm">Temperature</div>
          </div>
          <div className="text-sm">37.5C</div>
        </div>
      </div>

      <div className="bg-slate-300 px-4 p-2  mt-6 rounded-3xl">
        <div className="flex p-2 justify-between">
          <h1 className="text-2xl font-bold text-black">Recent messages</h1>
          <h1 className="text-base text-stone-500">view all</h1>
        </div>
        {/*  */}
        <div className="flex justify-between p-2">
          <div className="flex gap-3.5 justify-between">
            <img loading="lazy" srcSet={people03} className="w-12 h-12" />
            <div className="flex flex-col">
              <div className="text-base font-semibold text-black">
                Dr. Kate Paul
              </div>
              <div className=" text-sm font-medium text-stone-500">
                How are you feeling today?
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center self-start font-medium whitespace-nowrap">
            <div className="text-xs text-black">10:24</div>
            <div className="justify-center self-start px-2 py-1 text-xs text-white bg-lime-600 rounded-full">
              3
            </div>
          </div>
        </div>

        <div className="flex justify-between p-2">
          <div className="flex gap-3.5 justify-between">
            <img loading="lazy" srcSet={people02} className="w-12 h-12" />
            <div className="flex flex-col flex-1 my-auto">
              <div className="text-base font-semibold text-black">
                Dr. Chidi Dickson
              </div>
              <div className=" text-sm font-medium whitespace-nowrap text-stone-500">
                How are you feeling today?
              </div>
            </div>
          </div>
          <div className="text-xs">
            <div>10:24</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f06268a34e9f329d5ff791088134ae1f7122b1bdf28b870f3afab13c40a87?"
              className=" w-4 h-5"
            />
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex gap-3.5 justify-between">
            <img loading="lazy" srcSet={people01} className="w-12 h-12" />
            <div className="flex flex-col flex-1 my-auto">
              <div className="text-base font-semibold text-black">
                Dr. Alice George
              </div>
              <div className="text-xs text-stone-500">
                How are you feeling today?
              </div>
            </div>
          </div>
          <div className="text-xs">
            <div>10:24</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f06268a34e9f329d5ff791088134ae1f7122b1bdf28b870f3afab13c40a87?"
              className=" w-4 h-5"
            />
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex gap-3.5 justify-between">
            <img loading="lazy" srcSet={people03} className="w-12 h-12" />
            <div className="flex flex-col flex-1 my-auto">
              <div className="text-base font-semibold text-black">
                Dr. Peter Nkwe
              </div>
              <div className="text-xs text-stone-500">
                How are you feeling today?
              </div>
            </div>
          </div>
          <div className="text-xs">
            <div>10:24</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f06268a34e9f329d5ff791088134ae1f7122b1bdf28b870f3afab13c40a87?"
              className=" w-4 h-5"
            />
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex gap-3.5 justify-between text-base font-semibold">
            <img loading="lazy" srcSet={people02} className="w-12 h-12" />
            <div className="text-base">
              Dr. Lisa Adah
            </div>
          </div>
          <div className="self-start text-xs font-medium">10:24</div>
        </div>
      </div>
    </div>
  );
}

export default Test1;
