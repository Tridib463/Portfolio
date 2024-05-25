
const Mobile_Nav = () => {
    
    const headerBtn = document.querySelector('.header_bars');
    const mobileNav = document.querySelector('.mobile_nav');
    const mobileLinks = document.querySelectorAll('.mobile_nav_link');

    //State
    let isMobileNavOpen = false;

    //after clicking the header_bars, we have to change the display from 'none' to 'flex' to make it appear
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen)
            {
                mobileNav.style.display = 'flex';
                //to prevent scrolling of the screen after the mobileNav appears
                document.body.style.overflowY = 'hidden';
            }
            else {
                mobileNav.style.display = 'none';
                document.body.style.overflowY = 'auto';
            }
    });

    //when I click one of the nav Link, navbar should close automatically and i will be able to Scroll
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};

export default Mobile_Nav ;