import * as React from 'react';

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <script async defer data-domain="nowicki.io" src="https://stats.nowicki.io/js/index.js"/>
  ])
}
