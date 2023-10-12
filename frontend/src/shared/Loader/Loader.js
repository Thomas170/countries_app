import React from "react";
import {ColorRing} from "react-loader-spinner";

const Loader = () => {

    return <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e1c25b', '#60c0f4', '#ff4747', '#b081ff', '#849b87']}
    />
}

export default Loader;