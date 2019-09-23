import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me regarding any new opptunities or work
              below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Phone: 636-288-8629</h4>
              <a href="https://www.linkedin.com/in/-vineethmerugumala/">
                Linkedin: {resumeData.linkedinId}
              </a>
              <h4>Email: vmerugumala111@gmail.com</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
