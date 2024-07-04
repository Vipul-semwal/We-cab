import { Suspense } from "react";

const Loadable = (Component) => (props) =>
  (
    // put a good loader here
    <Suspense
      fallback={
        <div className="h-[100vh] flex justify-center items-center flex-col">
          <img src="/wecare_logo.svg" width="100px" alt="" />
          <img src="/load.gif" width="100px" alt="" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
