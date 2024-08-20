import { people01 } from "../assets";

const PatientProfile = () => {
  return (
    <>
      <form action="" method="post">
        <div className="flex flex-col w-full h-full">
          <div className="flex gap-5 justify-between mt-4 ">
            <div className="flex-auto text-xl tracking-tighter font-bold text-zinc-800">
              Patient Profile Overview
            </div>
            <div className="justify-center px-8 py-2 my-auto text-base font-medium text-purple-800  rounded-xl border border-purple-800">
              Edit Profile ...
            </div>
          </div>

          <div className="w-full bg-black/20 py-4 px-2 rounded-3xl h-full my-4">
            <div className="space-y-2 py-2 flex flex-col items-center text-sm">
              <img loading="lazy" srcSet={people01} className="w-20 h-20" />
              <input type="file" className="border rounded-3xl" />
            </div>

            <div className="h-full w-full bg-white/40 p-4 rounded-3xl">
              <div className="flex flex-col w-80 space-y-2 py-4">
                <input
                  className="h-22 w-full rounded-full p-2 outline-none border border-slate-400"
                  type="text"
                  placeholder="Fullname"
                />
                <input
                  className="h-22 w-full rounded-full p-2 outline-none border border-slate-400"
                  type="text"
                  placeholder="Profession"
                />
                <input
                  className="h-22 w-full rounded-full p-2 outline-none border border-slate-400"
                  type="text"
                  name=""
                  id=""
                  placeholder="ID"
                />
                <div className="flex  justify-between">
                  <div className="text-base font-bold text-stone-500">
                    Gender: <input type="radio" name="gender" value="male" />{" "}
                    Male
                    <input type="radio" name="gender" value="female" /> Female
                  </div>
                </div>
                <div className="flex  justify-between ">
                  <div className="grow text-base font-bold text-stone-500">
                    Date of Birth:{" "}
                    <input
                      className="h-22 w-full rounded-full p-2 outline-none border border-slate-400"
                      type="date"
                      name=""
                      id=""
                      placeholder="03/12/1980"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-base items-center font-bold text-stone-500 flex w-full">
                    Age:{" "}
                    <input
                      className="h-22 w-full rounded-r-full p-2 outline-none border border-slate-400"
                      type="number"
                    />
                  </div>
                  <div className="text-sm text-black">yrs</div>
                </div>
                <div className="flex items-center">
                  <div className="text-base flex items-center font-bold text-stone-500">
                    Weight:{" "}
                    <input
                      className="h-22 w-full rounded-r-full p-2 outline-none border border-slate-400"
                      type="number"
                    />
                  </div>

                  <div className="text-sm text-black">kg</div>
                </div>
                <div className="flex items-center">
                  <div className="text-base items-center flex font-bold text-stone-500">
                    Height:{" "}
                    <input
                      className="h-22 w-full rounded-r-full p-2 outline-none border border-slate-400"
                      type="number"
                    />
                  </div>
                  <div className="text-sm text-black">cm</div>
                </div>{" "}
              </div>

              <div className="flex flex-col justify-between h-auto max-w-xs border shadow-black rounded-3xl shadow p-4">
                <div className="flex justify-between text-base font-bold text-black">
                  <span> Appointments</span>
                  <button className="text-sm border px-6 py-1 rounded border-purple-900 font-medium text-purple-800">
                    View all
                  </button>
                </div>

                <div className="space-y-4 py-4">
                  <div className="flex gap-4  justify-between px-6 py-2 font-semibold bg-white rounded-3xl ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f2e2537e1584f838dcecfade69d722c9bb0e67dfc078bb90d49c565a8f46525?"
                      className="h-7 w-8"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-sm text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex justify-between text-base text-stone-500">
                        <div className="text-xs">12th Feb, 2024</div>
                        <div className="text-xs">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4  justify-between px-6 py-2 font-semibold bg-white rounded-3xl ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a06eca5722c27020dd5f7dd4f364b120c4eb677407d2f712792e32ac6057aa?"
                      className="h-6 w-8"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-sm text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex justify-between text-base text-stone-500">
                        <div className="text-xs">12th Feb, 2024</div>
                        <div className="text-xs">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4  justify-between px-6 py-2 font-semibold bg-white rounded-3xl ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a06eca5722c27020dd5f7dd4f364b120c4eb677407d2f712792e32ac6057aa?"
                      className="h-6 w-8"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-sm text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex justify-between text-base text-stone-500">
                        <div className="text-xs">12th Feb, 2024</div>
                        <div className="text-xs">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-between px-6 py-2 font-semibold bg-white rounded-3xl ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a06eca5722c27020dd5f7dd4f364b120c4eb677407d2f712792e32ac6057aa?"
                      className="h-6 w-8"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-sm text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex justify-between text-base text-stone-500">
                        <div className="text-xs">12th Feb, 2024</div>
                        <div className="text-xs">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="">
                <div className=" ">
                  <div className="flex gap-2">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet={people01}
                          className="w-20 h-20"
                        />
                        <input type="file" />
                        <input type="text" placeholder="Fullname" />
                        <input type="text" placeholder="Profession" />
                        <input type="text" name="" id="" placeholder="ID" />

                        <div className="flex gap-5 justify-between mt-10">
                          <div className="text-base font-bold text-stone-500">
                            Gender:{" "}
                            <input type="radio" name="gender" value="male" />{" "}
                            Male
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                            />{" "}
                            Female
                          </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                          <div className="grow text-base font-bold text-stone-500">
                            Date of Birth:{" "}
                            <input
                              type="date"
                              name=""
                              id=""
                              placeholder="03/12/1980"
                            />
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6">
                          <div className="text-base font-bold text-stone-500">
                            Age: <input type="number" />
                          </div>
                          <div className="text-lg text-black">yrs</div>
                        </div>
                        <div className="flex gap-4 justify-between mt-6">
                          <div className="text-base font-bold text-stone-500">
                            Weight: <input type="number" />
                          </div>
                          <div className="text-lg text-black">kg</div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6">
                          <div className="text-base font-bold text-stone-500">
                            Height: <input type="number" />
                          </div>
                          <div className="text-lg text-black">cm</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col justify-center self-stretch my-auto text-base font-bold text-stone-500 max-md:mt-10">
                        <div>
                          <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="mt-3 text-lg text-black">
                          <input type="textarea" placeholder="Home Address" />
                        </div>
                        <div className="mt-3 text-lg text-black">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="mt-3 text-lg text-black">
                          <input
                            type="datetime"
                            name=""
                            id=""
                            placeholder="Registration Date"
                          />
                        </div>
                        <div className="mt-6">
                          Next of Kin <input type="text" />
                        </div>
                        <div className="mt-6">
                          Next of Kin Phone No <input type="number" value="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-col justify-center px-6 py-8 w-full bg-white rounded-3xl ">
                  <div className="flex gap-5 justify-between">
                    <h2 className="flex-auto text-xl font-bold text-black">
                      Files / Documents
                    </h2>
                    <h4 className="text-base font-medium text-purple-800">
                      View all
                    </h4>
                  </div>

                  <div className="flex flex-col justify-center px-6 py-4 mt-8 w-full bg-white rounded-xl">
                    <div className="flex gap-5 justify-between w-40">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">
                          <input
                            type="file"
                            name=""
                            placeholder="pdf,jpeg,png"
                          />
                        </div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        kb
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center px-6 py-4 mt-5 w-40 bg-white rounded-xl shadow">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">
                          <input
                            type="file"
                            name=""
                            placeholder="pdf,jpeg,png"
                          />
                        </div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        kb
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center px-6 py-4 mt-5 w-40 bg-white rounded-xl shadow">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">
                          <input
                            type="file"
                            name=""
                            placeholder="pdf,jpeg,png"
                          />
                        </div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        kb
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center px-6 py-4 mt-5 w-40 bg-white rounded-xl shadow max-md:px-5">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">
                          <input
                            type="file"
                            name=""
                            placeholder="pdf,jpeg,png"
                          />
                        </div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        kb
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center px-16 py-4 mt-8 w-full text-base font-medium text-purple-800 whitespace-nowrap bg-purple-50 rounded-xl max-md:px-5">
                    <div className="flex gap-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/202d4eb0d6fc3a7669aec22b1b2dcfcc5b2561ade55ab23335611b02cf97a443?"
                        className="w-6 aspect-square"
                      />
                      <div className="grow">
                        Add file{" "}
                        <input type="file" name="" placeholder="pdf,jpeg,png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          //
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center p-8 w-full bg-white rounded-3xl shadow">
                  <div className="flex gap-5 justify-between ">
                    <div className="flex-auto text-xl font-bold text-black">
                      Appointments
                    </div>
                    <div className="text-base font-medium text-purple-800">
                      View all
                    </div>
                  </div>

                  <div className="flex gap-4 justify-between px-6 py-4 mt-8 font-semibold bg-white rounded-3xl ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f2e2537e1584f838dcecfade69d722c9bb0e67dfc078bb90d49c565a8f46525?"
                      className="my-auto w-8 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex gap-5 justify-between mt-3 text-base text-stone-500">
                        <div className="flex-auto">12th Feb, 2024</div>
                        <div className="flex-auto">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between px-6 py-4 mt-6 font-semibold bg-white rounded-3xl ">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a06eca5722c27020dd5f7dd4f364b120c4eb677407d2f712792e32ac6057aa?"
                      className="my-auto w-8 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex gap-5 justify-between mt-3 text-base text-stone-500">
                        <div className="flex-auto">12th Feb, 2024</div>
                        <div className="flex-auto">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-between px-6 py-4 mt-6 font-semibold bg-white rounded-3xl shadow max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a71bfb4b60990a741c3acde2db6c6fa9e47267592f2c5d8c2d47e2fb71ce10?"
                      className="my-auto w-8 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-gray-900">
                        Dr. Chidi Dickson
                      </div>
                      <div className="flex gap-5 justify-between mt-3 text-base text-stone-500">
                        <div className="flex-auto">12th Feb, 2024</div>
                        <div className="flex-auto">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col grow px-6 py-8 w-full bg-white rounded-3xl ">
                  <div className="flex gap-5 justify-between">
                    <div className="flex-auto text-xl font-bold text-black">
                      Payments
                    </div>
                    <div className="text-base font-medium text-purple-800">
                      View all
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-stone-500">
                    <div className="flex-auto text-xl font-bold">
                      Transaction
                    </div>
                    <div className="text-base font-medium">Amount</div>
                  </div>
                  <div className="flex gap-5 justify-between py-4 mt-5 border-b border-solid border-b-zinc-500 border-b-opacity-40">
                    <div className="flex gap-4 justify-between font-bold">
                      <div className="my-auto w-4 h-4 rounded-full" />
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="text-xl text-gray-900">
                          Consultation fee
                        </div>
                        <div className="mt-2.5 text-base text-stone-500">
                          16/01/2024
                        </div>
                      </div>
                    </div>
                    <div className="my-auto text-base font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ </span>
                      <span className="text-purple-800">5,000</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-4 mt-2 border-b border-solid border-b-zinc-500 border-b-opacity-40">
                    <div className="flex gap-4 justify-between font-bold">
                      <div className="my-auto w-4 h-4 rounded-full" />
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="text-xl text-gray-900">
                          Consultaion fee
                        </div>
                        <div className="mt-2.5 text-base text-stone-500">
                          16/01/2024
                        </div>
                      </div>
                    </div>
                    <div className="my-auto text-base font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ </span>
                      <span className="text-purple-800">5,000</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between pt-4 mt-2 border-b border-solid border-b-zinc-500 border-b-opacity-40">
                    <div className="flex gap-4 justify-between text-xl font-bold text-gray-900">
                      <div className="self-start mt-5 w-4 rounded-full h-[5px]" />
                      <div className="grow justify-center">
                        Consultation fee
                      </div>
                    </div>
                    <div className="self-start mt-4 text-base font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ </span>
                      <span className="text-purple-800">5,000</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-5 text-xl">
                    <div className="flex-auto font-bold text-stone-500">
                      Total
                    </div>
                    <div className="font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ 1</span>
                      5,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </form>
    </>
  );
};

export default PatientProfile;
