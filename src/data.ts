
export const aboutContent = {  
    heading: 'I am', 
    name: 'Patience Orukotan', 
    role: 'Front End Developer', 
    summary: 'Nerdy, optimistic and purpose driven software developer with hands-on experience in software development, implementing UI mock-ups, and providing end-users technical support. Effective skills in generating easily maintainable code. An excellent, creative, supportive and goal oriented team player, a critical thinker.',
}



type Imagex = {
    a_img1: string
    a_img2: string
    a_img3: string
    a_img4: string
    a_img5: string
}
const Image1 = ((): Imagex => ({  
    a_img1: require('./assets/images/PHP.png'),
    a_img2: require('./assets/images/CSS.png'),
    a_img3: require('./assets/images/Html 5.png'),
    a_img4: require('./assets/images/React Native.png'),
    a_img5: require('./assets/images/JSON.png')
    }
))();
export const aboutImage = [
    {
        image: Image1.a_img1,
    },
    {
        image: Image1.a_img2,
    },
    {
        image: Image1.a_img3,
    },
    {
        image: Image1.a_img4,
    },
    {
        image: Image1.a_img5,
    },   
]



type Imagey = {
    x_img1: string
    x_img2: string
    x_img3: string
    x_img4: string
}
const Image2 = ((): Imagey => ({  
    x_img1: require('./assets/images/Code.png'),
    x_img2: require('./assets/images/Mobile Wallet.png'),
    x_img3: require('./assets/images/Vector.png'),
    x_img4: require('./assets/images/WordPress.png'),
    }
))();
export const servicesContent = [
    {
        image: Image2.x_img1,
        activity: 'Custom Web Applications',
        description: 'Web Apps tailored to your Specific Needs.'
    },
    {
        image: Image2.x_img2,
        activity: 'E-commerce Applications',
        description: 'For Small and Large Businesses and Market.'
    },
    {
        image: Image2.x_img3,
        activity: 'Content Management Platforms',
        description: 'Blogging Platforms.'
    },
    {
        image: Image2.x_img4,
        activity: 'WordPress Applications',
        description: 'Web Apps tailored to your Specific Needs.'
    }, 
]



type Imagez = {
    p_img1: string
    p_img2: string
    p_img3: string
    p_img4: string
}
const Image3 = ((): Imagez => ({  
    p_img1: require('./assets/images/landing_page.png'),
    p_img2: require('./assets/images/website_pix.png'),
    p_img3: require('./assets/images/admin_dashboard.png'),
    p_img4: require('./assets/images/blogsite_pix.png'),
    }
))();
export const projectContent = [
    {
        image: Image3.p_img1,
        section: 'Landing Page',
        activity: 'Responsive Landing Page',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        link:'More Info',
        href: 'https://aiki-landing-page.netlify.app/'
    },
    {
        image: Image3.p_img2,
        section: 'Website',
        activity: 'Responsive Website with ReactJS & MUI',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        link:'More Info',
        href: 'https://nbjvip.com/'
    },
    {
        image: Image3.p_img3,
        section: 'Admin Dashboard',
        activity: 'Responsive Dashboard with Bootstrap5',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        link:'More Info',
        href: ''
    },
    {
        image: Image3.p_img4,
        section: 'Blogsite',
        activity: 'A Blogsite with WordPress',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        link:'More Info',
        href: 'https://dev-learningwordp.pantheonsite.io/',
    }, 
]


