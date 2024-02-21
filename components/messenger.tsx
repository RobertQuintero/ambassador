"use client";
import Script from "next/script";
import React from "react";

const Messenger = () => {
  return (
    <React.Fragment>
        <div id="fb-root"></div>
<div id="fb-customer-chat" className="fb-customerchat">

</div>

<Script id="fb-chat" strategy="lazyOnload">
{`
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page\_id", "246846501842903");
chatbox.setAttribute("attribution", "biz\_inbox");

window.fbAsyncInit = function() {
FB.init({
xfbml            : true,
version          : 'v12.0'
});
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)\[0\];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en\_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
`}
</Script>
    </React.Fragment>
  );
};

export { Messenger };
