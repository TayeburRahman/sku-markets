import "./modal.css";
import "./watchlist.css";

const WhatsappAlerts = () => {
  return (
    <div>
      <div class="container-width ">
        <div class="row">
          <div class="col-md-12 ">
            <div class="whatsapp-status shadow-box mb-1 card">
              <span>
                WhatsApp bot is not connected. Please follow the instruction
                below to proceed.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-width card mb-5">
        <div className="row addAlartCompo m-0 ">
          <div className="col-md-12 ">
            <div className="link-instruction mt-1">
              <span style={{ fontSize: "18px" }}>Delivery method</span>
              <br />
              <div className="py-3">
                <span style={{ fontSize: "15px" }}>
                  <i className=" fa-brands fa-whatsapp whatsapp-icon"></i>
                  Whatsapp
                </span>

                <span>
                  <br />
                  SKU Markets Bot is{" "}
                  <span className="rate-red">not connected</span>
                </span>
                <br />
              </div>
              <span>To connect the bot to your WhatsApp account:</span>

              <ol>
                <li>
                  1. Install WhatsApp on your phone, on your desktop, or access
                  the web version.
                </li>
                <li>
                  2. Add SKU Markets bot to your WhatsApp account and send the
                  start message with this link: SKU Markets Bot
                </li>
                <li>
                  3. Your account becomes linked. You can refresh this page and
                  check it.
                </li>
              </ol>

              <span style={{ fontSize: "15px" }}>
                {" "}
                <i className="fa-regular fa-envelope mail-icon"></i>Email:
              </span><br/>
              <span>
                Active E-mail is: <a href="//">admin@2p.sa</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappAlerts;
