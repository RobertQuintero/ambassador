"use client";
import Script from "next/script";
import React, { FunctionComponent, useEffect } from "react";

interface MessengerPluginProps {}
declare global {
  interface Window {
    fbAsyncInit: () => void
    FB: {
      init: (params: object) => void
    }
  }
}

const Messenger:FunctionComponent<MessengerPluginProps> = () => {
  const pageId = 246846501842903

  const MessengerRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (MessengerRef.current) {
        MessengerRef.current.setAttribute("page_id", pageId.toString())
        MessengerRef.current.setAttribute("theme_color", "#000000")
        MessengerRef.current.setAttribute("attribution", "biz_inbox")

      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: 'v16.0',
        })
      }
      ;(function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        const js = d.createElement(s) as HTMLScriptElement
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
        fjs?.parentNode?.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  }, [])

  return (
    <React.Fragment>
      <div id='fb-root'></div>
      <div ref={MessengerRef} id='fb-customer-chat' className='fb-customerchat'></div>
    </React.Fragment>
  );
};

export { Messenger };
