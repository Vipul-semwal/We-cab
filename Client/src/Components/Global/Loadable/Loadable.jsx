import { Suspense } from 'react';


const Loadable = (Component) => (props) => (
    // put a good loader here
    <Suspense fallback={<div>loding...</div>}>
        <Component {...props} />
    </Suspense>
);

export default Loadable



