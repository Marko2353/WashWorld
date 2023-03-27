import BtnStartWash from "@/app/components/BtnStartWash/BtnStartWash";
import ProgramDetails from "@/app/components/ProgramDetails/ProgramDetails";
import Programs from "@/app/components/Programs/Programs";

export default function Temporary() {
  return (
    <section className="flex flex-col items-center px-6">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold mb-2  mt-14">Some text here</h2>
        <p className="text-base w-2/3 mb-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          vel maxime, illum odit a commodi ad et impedit voluptatibus sed, est,
          quas aliquam repudiandae! Recusandae maxime rerum nesciunt quibusdam
          doloribus.
        </p>
      </div>
      <div className="flex justify-between max-w-7xl w-full">
        <div>
          <div className="mb-16">
            <span className="text-lg font-bold">1. Your car</span>
            <p className="text-sm mt-2 mb-4 w-96">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio architecto ut vel quia placeat sint impedit expedita
              totam cum!
            </p>
            <div>
              <span>DK</span>
              <span>AB12345</span>
            </div>
          </div>

          <div className="mb-16">
            <span className="text-lg font-bold">2. Location</span>
            <p className="text-sm mt-2  w-96">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              accusamus nisi quasi ut voluptate amet odit eos facere autem modi?
            </p>
          </div>

          <div className="mb-14">
            <span className="text-lg font-bold">3. Choose your program.</span>
            <p className="text-sm mt-2 mb-4  w-96">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus fugiat repudiandae ipsum repellat sequi cupiditate
              excepturi labore rem totam provident?
            </p>
            <Programs />
          </div>
        </div>

        <div>
          <ProgramDetails />
          <BtnStartWash />
        </div>
      </div>
    </section>
  );
}
