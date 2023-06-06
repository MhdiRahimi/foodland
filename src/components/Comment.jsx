export default function Comment() {
  return (
    <>
      <div className="mt-4 p-2 grid">
        <h3 className="text-[#212245] font-rock text-lg">Jhon Doe</h3>
        <p className="text-sm mt-2 font-istock font-thin">jhon1@gmail.com</p>
        <p className="text-gray-600 text-md font-istock mt-4"> great product</p>
      </div>
      <div className="mt-4 p-2 grid">
        <h3 className="text-[#212245] font-rock text-lg">Jhon Doe</h3>
        <p className="text-sm mt-2 font-istock font-thin">jhon1@gmail.com</p>
        <p className="text-gray-600 text-md font-istock mt-4"> great product</p>
      </div>
      <div className="mt-4 p-2 grid">
        <h3 className="text-[#212245] font-rock text-lg">Jhon Doe</h3>
        <p className="text-sm mt-2 font-istock font-thin">jhon1@gmail.com</p>
        <p className="text-gray-600 text-md font-istock mt-4"> great product</p>
      </div>
      <div className=" bg-[#fde4e4] sm:w-6/6 w-[90%] p-[3rem] my-[4rem] flex justify-center mx-auto rounded-lg">
        <form className="w-full ">
          <input
            type="text"
            id="base-input"
            placeholder="Enter your name"
            className="   w-full   h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <input
            type="text"
            id="base-input"
            placeholder="Enter your email"
            className="   w-full  my-[2rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <textarea
            type="text"
            id="base-input"
            placeholder="Write your review"
            className="   w-full  my-[4rem] h-10 p-2 border-t-0 border-l-0 border-r-0   bg-transparent border border-b-[rgba(33,34,69,.2980392156862745)] text-gray-900 text-md rounded-sm  focus:outline-none "
          />
          <button className=" flex justify-center w-1/5 px-6 py-2 font-istock text-md   transition-all relative  items-center   text-center overflow-hidden   text-white rounded-sm bg-[#DF2020]  ">
            submit
          </button>
          <div className="  flex mt-5 justify-center mx-auto "></div>
        </form>
      </div>
    </>
  );
}
