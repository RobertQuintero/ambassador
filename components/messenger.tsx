"use client";
import { FacebookProvider, MessengerCheckbox  } from "react-facebook";

const Messenger = () => {
  return (
    <FacebookProvider
      appId="929338348839637
"
      chatSupport
    >
      <MessengerCheckbox
        pageId="246846501842903"
        messengerAppId="929338348839637"
      />
    </FacebookProvider>
  );
};

export { Messenger };
