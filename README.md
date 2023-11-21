# Styled Antd Icon

Styled Antd Icon 是一个与 chakra-ui 的 Icon 功能一致的库，但集成了styled-antd，专门为antd而开发，支持antd的主题配置。

## Getting Started

```shell
npm install -S styled-antd-icon styled-antd antd @emotion/styled @emotion/react
```

> 注意，仅支持 antd 5.0 以上的版本。

```tsx
// App.tsx
import React from 'react';
import { ConfigProvider, Box, antd } from 'styled-antd';
import { Icon } from 'styled-antd-icon';
import { FileFilled } from '@ant-design/icons';

const App: React.FC = () => (
  <ConfigProvider>
    <Icon as={FileFilled} fontSize="24px" color="colorSuccess" />
  </ConfigProvider>
);

export default App;
```

## Usage

因为styled-antd-icon是基于@chakra-ui/icon的源码开发的，且功能保持一致，不一样的是，styled-antd-icon初始就是支持antd的主题设置的，所以有关于使用方法，你可以阅读下方两个文档：

- [chakra-icon官方文档](https://chakra-ui.com/docs/components/icon)
- [styled-antd使用文档](https://github.com/WaldenLiang/styled-antd)
