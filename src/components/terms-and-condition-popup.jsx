import React from 'react';
import '../styles/tc-popup.css'

export default class TermsAndConditionPopup extends React.Component {

    render() {
        return (
            <section className="tc-container">
                <div className="tc-header">
                    <div className="header-heading">
                        Terms and Conditions for Company Name
                </div>
                </div>
                <div className="tc-body">
                    <div className="tc-bd-heading">Introduction</div>
                    <div className="tc-bd-text">
                        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.

        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

        Minors or people below 18 years old are not allowed to use this Website.
                </div>
                    <div className="tc-bd-heading">Intellectual Property Rights</div>
                    <div className="tc-bd-text">
                        Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.

    You are granted limited license only for purposes of viewing the material contained on this Website.
                </div>
                    <div className="tc-bd-heading"> Restrictions</div>
                    <div className="tc-bd-text">
                        You are specifically restricted from all of the following:

    publishing any Website material in any other media;
    selling, sublicensing and/or otherwise commercializing any Website material;
    publicly performing and/or showing any Website material;
    using this Website in any way that is or may be damaging to this Website;
    using this Website in any way that impacts user access to this Website;<br/><br/>
    using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
    engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
    using this Website to engage in any advertising or marketing.
    Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                </div>

                    <div className="tc-bd-heading">Entire Agreement</div>
                    <div className="tc-bd-text">
                        These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.
</div>
                    <div className="tc-bd-heading">Governing Law & Jurisdiction</div>
                    <div className="tc-bd-text">These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.</div>
                </div>
                <div className="tc-footer">
                <button className="tcbtn" value="true" onClick={this.props.tcAccptDecline}> Close</button>
                </div>
            </section>
        );
    }
}