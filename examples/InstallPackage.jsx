import React from "react";
import {PackageManager} from './PackageManager'

export const InstallPackage = ({packageName, isDev}) =>
  <PackageManager yarn={`add ${packageName} ${isDev ? '--dev' : ''}`} npm={`install ${packageName} ${isDev ? '--dev' : ''}`} />
