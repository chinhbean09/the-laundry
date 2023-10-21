import styled from "styled-components";

const AboutUs = () => {
    return (
        <Wrapper>
        <div className="container">
        <div className="grid grid-three-column">
            <div className="about-data1">
                <h2 className="h2-fix">Good price</h2>
                <p>
                    Help customers proactively pay 
                    for laundry costs. Sign an annual
                    price and fee contract based on 
                    monthly volume.
                </p>
                
                <h2 className="h2-fix">Utilities</h2>
                <p>
                    Just call us to inform us about 
                    your laundry needs, and your time
                    will be saved for your family 
                    and friends.
                </p>
            </div>
            <div className="about-img">
            <img
                src="images/about.jpg"
                alt="about-photo"
                className="img-style1"
              />
            </div>
            <div className="about-data1">
                <h2 className="h2-fix">Fast delivery</h2>
                <p>
                    Delivery within 24 hours after 
                    receipt. Especially with the 
                    ability to do laundry and same-day
                    returns in large quantities.
                </p>
                <h2 className="h2-fix">Quality</h2>
                <p>
                    We use the best technology, 
                    hight-quality detergents with 
                    clear origins, and are safe 
                    for health.
                </p>
            </div>

        </div>
        </div>
        </Wrapper>
    )
};

export default AboutUs;
const Wrapper = styled.section`
.img-style1 {
    width: 120%;
    height: 100%;
    justify-content: center;
  }
.about-data1{
    padding-top: 100px;
    padding-bottom: 10px;
    padding-left: 20px;
}
.h2-fix{
    padding-top: 30px;
    color: rgb(98 84 243);
}
`;
