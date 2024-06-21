import React from "react";
import "./Things.css";
function Things() {
  return (
    <section className="  things thingsto flex items-center justify-center gap-5 flex-wrap">
      <div className="flex items-center justify-center flex-col boxes">
        <img src="/Utility/vi.png" width="100px" alt="" />
        <h3 className="mb-3">Ride in comfort</h3>
        <p>
          Choose from a variety of car types to suit your needs, from
          budget-friendly sedans to spacious SUVs.
        </p>
      </div>

      <div className="flex items-center justify-center flex-col boxes">
        <img src="/Utility/sign.png" alt="" />
        <h3 className="mb-3 mt-3">Ride in comfort</h3>
        <p>
          Choose from a variety of car types to suit your needs, from
          budget-friendly sedans to spacious SUVs.
        </p>
      </div>

      <div className="flex items-center justify-center flex-col boxes">
        <img src="/Utility/box.png" alt="" />
        <h3 className="mb-3 mt-3">Ride in comfort</h3>
        <p>
          Choose from a variety of car types to suit your needs, from
          budget-friendly sedans to spacious SUVs.
        </p>
      </div>
    </section>
  );
}

export default Things;
