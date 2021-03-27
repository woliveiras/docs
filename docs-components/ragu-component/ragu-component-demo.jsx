import {getRaguReactComponent} from "./templates/react";
import {getRaguVueComponent} from "./templates/vue";
import {getVanillaRaguComponent} from "./templates/vanilla";
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React from "react";

export const RaguComponentDemo = ({url}) => <div>
  <Tabs
    defaultValue="react"
    values={[
      {label: 'React', value: 'react'},
      {label: 'VueJs', value: 'vue'},
      {label: 'Vanilla', value: 'vanilla'},
    ]}>
    <TabItem value="react">
      <CodeBlock className="language-jsx">
        {getRaguReactComponent(url)}
      </CodeBlock>
    </TabItem>
    <TabItem value="vue">
      <CodeBlock className="language-html">
        {getRaguVueComponent(url)}
      </CodeBlock>
    </TabItem>
    <TabItem value="vanilla">
      <CodeBlock className="language-html">
        {getVanillaRaguComponent(url)}
      </CodeBlock>
    </TabItem>
  </Tabs>
</div>
