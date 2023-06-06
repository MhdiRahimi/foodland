// eslint-disable-next-line react/prop-types
export default function Banner({ title }) {
  return (
    <>
      <section className="  w-full h-[208px] bg-cover bg-center bg-no-repeat	 bg-[url(https://food-delivery-ecommerce-app.netlify.app/static/media/banner-02.1d3252d3.jpg)]">
        <div className=" bg-[rgba(33,34,69,.6980392156862745)] w-full h-[208px]   ">
          <h5 className="font-rock text-4xl text-white font-bold w-full  flex  p-[80px]">
            {title}
          </h5>
        </div>
      </section>
    </>
  );
}
