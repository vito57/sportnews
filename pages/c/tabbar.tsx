import React, { useState } from "react";

import { Tabs, TabItem } from "@salutejs/plasma-ui";

export default function Tabbar() {
  return (
    <Tabs forwardedAs="ul">
      <TabItem isActive tabIndex={0} forwardedAs="li">
        Каждый
      </TabItem>
      <TabItem tabIndex={0} forwardedAs="li">
        Охотник
      </TabItem>
      <TabItem tabIndex={0} forwardedAs="li">
        Желает
      </TabItem>
      <TabItem tabIndex={0} forwardedAs="li">
        Знать
      </TabItem>
      <TabItem tabIndex={0} forwardedAs="li">
        Где
      </TabItem>
      <TabItem tabIndex={0} forwardedAs="li">
        Сидит
      </TabItem>
      <TabItem tabIndex={0} forwardedAs="li">
        Фазан
      </TabItem>
    </Tabs>
  );
}
