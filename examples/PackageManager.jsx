import React from "react";
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const PackageManager = ({yarn, npm, both, binExecution}) => {
  const yarnCommand = yarn ? yarn : both;
  const npmCommand = npm ? npm : both;

  return <Tabs
    defaultValue="yarn"
    values={[
      {label: 'Yarn', value: 'yarn'},
      {label: 'NPM', value: 'npm'},
    ]}>
    <TabItem value="yarn">
      <CodeBlock className="language-shell">
        {`yarn ${yarnCommand}`}
      </CodeBlock>
    </TabItem>
    <TabItem value="npm">
      <CodeBlock className="language-shell">
        {`${binExecution ? 'npx' : 'npm'} ${npmCommand}`}
      </CodeBlock>
    </TabItem>
  </Tabs>;
}


