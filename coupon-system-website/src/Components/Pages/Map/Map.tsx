import "./Map.css";
import png from "../../../assets/Images/emoji_driving-removebg-preview.png"
import png2 from "../../../assets/Images/visit_us_2-removebg-preview.png"
import png3 from "../../../assets/Images/on the way.png"

function Map(): JSX.Element {
    return (
        <div className="Map">
            <div className="Map">

                <img className="I1" src={png2} />

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.193247483802!2d34.784022375941966!3d32.06402157396973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70c925e5ed%3A0x9e629a46351e04c3!2sJohn%20Bryce%20Training!5e0!3m2!1sen!2sil!4v1691655150176!5m2!1sen!2sil"
                    width="600"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>


                <img className="I2" src={png} />

                <div>
                    <img className="PO" src={png3} />
                </div>





            </div>
        </div>
    );
}

export default Map;

