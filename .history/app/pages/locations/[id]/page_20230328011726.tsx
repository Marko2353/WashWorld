import BtnStartWash from "@/app/components/BtnStartWash/BtnStartWash";
import ProgramDetails from "@/app/components/ProgramDetails/ProgramDetails";
import Programs from "@/app/components/Programs/Programs";

export default function Temporary() {
  return (
    <section className="flex flex-col items-center px-6">
      <div className="max-w-7xl">
        <h2 className="mb-2 text-3xl font-bold mt-14">Some text here</h2>
        <p className="w-2/3 text-base mb-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          vel maxime, illum odit a commodi ad et impedit voluptatibus sed, est,
          quas aliquam repudiandae! Recusandae maxime rerum nesciunt quibusdam
          doloribus.
        </p>
      </div>
      <div className="flex justify-between w-full max-w-7xl">
        <div>
          <div className="mb-16">
            <span className="text-lg font-bold">1. Your car</span>
            <p className="mt-2 mb-4 text-sm w-96">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio architecto ut vel quia placeat sint impedit expedita
              totam cum!
            </p>
            <div>
              <span>DK</span>
              <div className="flex items-center w-full px-4 py-2 border-2 border-gray-400 rounded-lg">
      <div className="flex items-center justify-center w-6 h-6 mr-2 font-bold text-white bg-blue-500 rounded-l-lg">
        DK
      </div>
      <input

        className="w-full border-none outline-none"
      />
    </div>
            </div>
          </div>

          <div className="mb-16">
            <span className="text-lg font-bold">2. Location</span>
            <p className="mt-2 text-sm w-96">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              accusamus nisi quasi ut voluptate amet odit eos facere autem modi?
            </p>
          </div>

          <div className="mb-14">
            <span className="text-lg font-bold">3. Choose your program.</span>
            <p className="mt-2 mb-4 text-sm w-96">
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
