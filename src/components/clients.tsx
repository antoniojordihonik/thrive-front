import "./clients.css";
import "../styles.css";
import { useTranslation } from "react-i18next";
import Quote from "/quote.svg";

export default function Clients() {
  const { t } = useTranslation();

  return (
    <section className="clients-background">
      <div className="clients-title">
        <h3>What ThriveAlive.Ai</h3>
        <h1>Clients are Saying</h1>
      </div>

      <div className="clients-section">
        <div className="clients-container">

          <div className="clients-card">
            <div className="clients-icon">
              <img src={Quote} alt= "Quote" />
            </div>
            <div className="clients-text">
              <p>
                ThriveAlive.Ai helps discover who you are by figuring out 
                what you value most and how you see the world. Rather than
                a bland thoughtless ChatGPT request you get a thoughtful
                dissection of what you value and see as your purpose in this
                world. With each question they probe just a little deeper and
                keep picking to really help you discover your real purpose.
                This can .... 
              </p>
              <a href="clients-readmore">Read More</a>
              <h2 className="client-name">John Waltz</h2>
              <p className="client-role">CEO/Founder Pdun Inc.</p>
            </div>
          </div>

          <div className="clients-card">
            <div className="clients-icon">
              <img src={Quote} alt= "Quote" />
            </div>
            <div className="clients-text">
              <p>
                ThriveAlive.Ai helps discover who you are by figuring out 
                what you value most and how you see the world. Rather than
                a bland thoughtless ChatGPT request you get a thoughtful
                dissection of what you value and see as your purpose in this
                world. With each question they probe just a little deeper and
                keep picking to really help you discover your real purpose.
                This can .... 
              </p>
              <a href="clients-readmore">Read More</a>
              <h2 className="client-name">John Waltz</h2>
              <p className="client-role">CEO/Founder Pdun Inc.</p>
            </div>
          </div>

          <div className="clients-card">
            <div className="clients-icon">
              <img src={Quote} alt= "Quote" />
            </div>
            <div className="clients-text">
              <p>
                ThriveAlive.Ai helps discover who you are by figuring out 
                what you value most and how you see the world. Rather than
                a bland thoughtless ChatGPT request you get a thoughtful
                dissection of what you value and see as your purpose in this
                world. With each question they probe just a little deeper and
                keep picking to really help you discover your real purpose.
                This can .... 
              </p>
              <a href="clients-readmore">Read More</a>
              <h2 className="client-name">John Waltz</h2>
              <p className="client-role">CEO/Founder Pdun Inc.</p>
            </div>
          </div>
       
        </div>
       <a href="testimonials" className="clients-btn">See All Testimonials</a>
      </div>
    </section>
  );
}
