export function getRaguReactComponent(url) {
  return `import {RaguComponent} from "ragu-client-react";

<RaguComponent src="${url}" />`;
}
