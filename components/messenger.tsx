"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const Messenger = () => {
  return (
    <FacebookProvider
      appId="929338348839637
"
      chatSupport
    >
      <CustomChat
        pageId="246846501842903
"
        themeColor="#000000"
        minimized={true}
      />
    </FacebookProvider>
  );
};

export { Messenger };
