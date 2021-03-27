import React, {useState} from "react";
import {RaguComponentDemo} from "./ragu-component/ragu-component-demo";
import CloseIcon from "../static/img/close-icon.png";
import BrowserOnly from "@docusaurus/BrowserOnly";


export const LoadMicroFrontend = ({name, url}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return <div className="microfrontend">
    <h4>{name}</h4>

    <RaguComponentDemo url={url}/>

    {
      !(shouldLoad && loaded) &&
      <div className="microfrontend-placeholder">
        <button className="microfrontend-placeholder-button" onClick={() => setShouldLoad(true)}>
          {shouldLoad ? 'Loading...' : `Load ${name} Micro-frontend`}
        </button>
      </div>
    }

    {
      shouldLoad &&
      <div className="microfrontend-wrapper">
        <img src={CloseIcon} className="microfrontend-close" onClick={() => {
          setLoaded(false);
          setShouldLoad(false);
        }}/>
        <BrowserOnly>
          {() => {
            const {RaguComponent} = require('ragu-client-react');

            return <RaguComponent src={url} onFetchCompleted={() => setLoaded(true)}/>
          }}
        </BrowserOnly>
      </div>
    }
  </div>
}
