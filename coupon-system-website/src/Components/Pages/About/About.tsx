import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
            <h1> Coupon System Website</h1>
            The Coupon Management System is a web application developed using
            Java Spring on the backend and React TypeScript on the frontend.
            <p />
            <h1>Key Features</h1>
            <p>The system encompasses a wide array of crucial features, including:

                <p> User Authentication: The platform supports user registration, login, and account management.
                    Admin users are endowed with specialized permissions that are centered around the addition
                    and deletion of companies.
                </p>

                Administration: The admin user is solely responsible for the addition and deletion
                of companies within the system. This feature ensures proper organization and streamlined management.

                <p>    Coupon Creation and Management: Authenticated admin users have exclusive authority to create,
                    modify, and delete coupons. These coupons come with a range of attributes such as title,
                    description, discount percentage, and expiration date.
                </p>
                <p>    Coupon Distribution: Admin users possess the capability to allocate coupons to specific customers or
                    segments of customers. In parallel, customers have the ability to view available coupons and their
                    corresponding details.
                </p>
                <p>    Coupon Redemption: Customers can seamlessly redeem their coupons during the checkout process,
                    availing themselves of the associated discounts on their purchases.
                </p>
                <p>   Responsive Design: The frontend of the application, developed using React TypeScript, delivers
                    a user-friendly and responsive interface catering to both desktop and mobile devices.
                    Security Measures: The system's security framework is fortified with features like encryption,
                    secure API endpoints, and user authorization. These measures safeguard user data and sensitive
                    coupon information.
                </p>
                <h1>Benefits</h1>
                <p>The implementation of the Coupon Management System serves to heighten customer engagement and
                    empowers businesses to enhance their sales through targeted coupon distribution and efficient
                    management of company information.
                </p>
                <h1>Conclusion</h1>
                <p>This project serves as a testament to the successful synergy between Java Spring and React TypeScript.
                    The result is a robust coupon management solution that offers a comprehensive range of features while
                    ensuring streamlined company administration and customer interaction.
                </p>





            </p>

            <div className="ContentWrapper">
                <div className="VideoWrapper">
                    <iframe
                        width="300"
                        height="200"
                        src="https://www.youtube.com/embed/eSnSuh73vE0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </div>
    );
}

export default About;
