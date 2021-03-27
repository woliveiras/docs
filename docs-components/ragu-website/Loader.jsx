import React from "react";
import {LoadMicroFrontend} from "../LoadMicroFrontend";


export const RaguWebsiteLoader = () => <div>
  <LoadMicroFrontend name={"Onboarding Micro-frontend"} url={'https://ragu-framework.github.io/ragu-cli/mfe.json?bg=true'} />
  <LoadMicroFrontend name={"Core Concept Micro-frontend"} url={'https://ragu-framework.github.io/ragu/main-features-mfe.json?bg=true'} />
</div>
