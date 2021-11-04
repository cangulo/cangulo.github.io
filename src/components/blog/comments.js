import React from 'react'
import HyvorTalk from 'hyvor-talk-react'

const Comments = ({ slug }) => {

  var para = document.querySelector('html');
  var theme = para.dataset["theme"];
  console.log(theme)

  // var observer = new MutationObserver(function (mutations) {
  //   mutations.forEach(function (mutationRecord) {
  //     console.log('style changed!');
  //   });
  // });

  // var target = document.getElementsByName('html');
  // observer.observe(target, { attributes: true, attributeFilter: ['data-theme'] });

  const darkPalette = {
    accent: "#ffffff",
    accentText: "#000000",
    footerHeader: "#1b1818",
    footerHeaderText: "#cac7c7",
    box: "#232121",
    boxText: "#ffffff",
    boxLightText: "#aaaaaa",
    backgroundText: "#ffffff"
  }

  return (
    <section>
      <h2>Comments</h2>
      <HyvorTalk.Embed
        loadMode="scroll"
        websiteId={1142}
        id={slug}
        palette={theme == 'dark' ? darkPalette : {}}
      />
    </section>
  )
}
export default Comments
