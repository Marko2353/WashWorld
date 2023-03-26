import BtnStartWash from "@/app/components/BtnStartWash/BtnStartWash";
import ProgramDetails from "@/app/components/ProgramDetails/ProgramDetails";
import Programs from "@/app/components/Programs/Programs";

export default function Temporary() {
  return (
    <section className="flex flex-col items-center">
      <div className="max-w-7xl">
        <h2>Some text here</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          vel maxime, illum odit a commodi ad et impedit voluptatibus sed, est,
          quas aliquam repudiandae! Recusandae maxime rerum nesciunt quibusdam
          doloribus.
        </p>
      </div>
      <div className="flex justify-between max-w-7xl w-full">
        <div>
          <div>
            <span>1. Your car</span>
            <p>Lorem isum dolor sit amet.</p>
            <div>
              <span>DK</span>
              <span>AB12345</span>
            </div>
          </div>

          <div>
            <span>2. Location</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div>
            <span>3. Choose your program.</span>
            <p>Lorem ipsum dolor sit amet.</p>
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
