import './footer.css';
import  LanguageOutlined  from '@mui/icons-material/LanguageOutlined';

export function Footer(){
    const AboutTomatoArr=["Who We Are","Blog","Work with us",
        "investor relations","Report fraud","press kit","contact us" ];
    const TomaverseArr=["Tomato","blinkit","feeding india","hyperpure",
        "tomato live","tomaland","weather union"  ];
    const forRestaurantArr=["partner with us","apps for you"];
    const learnMoreArr=["privacy","security","terms","sitemap"];
    return(
        <div id="footer-container">
            <div id="footer-title">
                <p id='footer-tomato-header'>Tomato</p>
                <div id="country-selec">
                <div id='country-selection-btn'>
                        {/* <span> <LanguageOutlined sx={{
                        height:'16px',
                        width:'16px',marginTop:'5px',marginRight:'5px'
                    }} /></span>  */}
                    <p>India</p></div>
                    <div id='language-selection-btn'>
                        <span> <LanguageOutlined sx={{
                        height:'16px',
                        width:'16px',marginTop:'5px',marginRight:'5px'
                    }} /></span> 
                    <p>English</p></div>
                      
                </div>
            </div>
            <div id='footer-main'>
                <div id='about-tomato-div'>
                    <p id='footer-contents-header'>About Tomato</p>
                    {
                        AboutTomatoArr.map((val,ind)=>{
                            return <div id='footer-main-contents' key={ind} >
                                <p  id='footer-arr-contents' > {val} </p>
                            </div>
                        })
                    }
                </div>
                <div id='tomaverse-div'>
                    <p id='footer-contents-header'>Tomaverse</p>
                    {
                        TomaverseArr.map((val,ind)=>{
                            return <div id='footer-main-contents' key={ind}>
                                <p  id='footer-arr-contents' > {val} </p>
                            </div>
                        })
                    }
                </div>
                <div id='for-restaurant-div'>
                    <p id='footer-contents-header'>For Restaurant</p>
                    {
                        forRestaurantArr.map((val,ind)=>{
                            return <div id='footer-main-contents' key={ind}>
                                <p  id='footer-arr-contents' > {val} </p>
                            </div>
                        })
                    }
                </div>
                <div id='learn-more-div'>
                    <p id='footer-contents-header'>Learn More</p>
                    {
                        learnMoreArr.map((val,ind)=>{
                            return <div id='footer-main-contents'  key={ind}>
                                <p id='footer-arr-contents' > {val} </p>
                            </div>
                        })
                    }
                </div>
                <div id='social-links-div'>
                    <p id='footer-contents-header'>social links</p>
                    <div id='social-icons-div'>
                        <p>Fb</p>
                        <p>Insta</p>
                        <p>X</p>
                        <p>Twitter</p>
                    </div>
                    <p>Play store</p>
                    <p>App store</p>
                </div>
            </div>
            <hr id='hr' />
            <p id='footer-text'>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, 
            Privacy Policy and Content Policies. All trademarks are properties of their 
            respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved
            </p>
            
        </div>
    )
}