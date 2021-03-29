import React, {useState} from "react";
import {RaguComponentDemo} from "./ragu-component/ragu-component-demo";
import CloseIcon from "../static/img/close-icon.png";
import BrowserOnly from "@docusaurus/BrowserOnly";


export const LoadMicroFrontend = ({name, url, hideDemo, startShouldLoad, closable}) => {
  const isClosable = closable !== false;
  const [shouldLoad, setShouldLoad] = useState(startShouldLoad || false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const buttonLabel = () => {
    if (failed) {
      return `Fail to load "${url}" is the micro-frontend server running? Click to try again!`;
    }

    if (!shouldLoad) {
      return `Click to load ${name} Micro-frontend here.`
    }

    return 'Loading...';
  }

  return <div className="microfrontend">
    <h4>{name}</h4>

    {!hideDemo && <RaguComponentDemo url={url}/>}

    {
      !(shouldLoad && loaded) &&
      <div className="microfrontend-placeholder">
        <button className={`microfrontend-placeholder-button ${failed ? 'failed' : ''}`} onClick={() => {
          setLoaded(false);
          setFailed(false);
          setShouldLoad(true);
        }}>
          {buttonLabel()}
        </button>
      </div>
    }

    {
      shouldLoad &&
      <div className={loaded ? 'microfrontend-wrapper' : ''}>
        {loaded && isClosable && <img src={CloseIcon} className="microfrontend-close" onClick={() => {
          setLoaded(false);
          setShouldLoad(false);
        }}/>}
        <BrowserOnly>
          {() => {
            const {RaguComponent} = require('ragu-client-react');

            return <RaguComponent
              src={url}
              onFetchCompleted={() => setLoaded(true)}
              onFetchFail={() => {
                setShouldLoad(false);
                setFailed(true);
              }}
            />
          }}
        </BrowserOnly>
      </div>
    }
  </div>
}
