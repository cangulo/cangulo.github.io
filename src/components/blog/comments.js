import React from "react";
import HyvorTalk from 'hyvor-talk-react'

export default class Comments extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.slug,
    }
  }

  render() {

    // const darkPalette = {
    //   accent: "#ffffff",
    //   accentText: "#000000",
    //   footerHeader: "#1b1818",
    //   footerHeaderText: "#cac7c7",
    //   box: "#232121",
    //   boxText: "#ffffff",
    //   boxLightText: "#aaaaaa",
    //   backgroundText: "#ffffff"
    // }

    return (
      <div >
        <section id="post-comments" >
          <h2>Comments</h2>
          <HyvorTalk.Embed
            loadMode="scroll"
            websiteId={1142}
            id={this.state.slug}
          // palette={theme == 'dark' ? darkPalette : {}}
          />
        </section>
      </div>
    )
  }
}
