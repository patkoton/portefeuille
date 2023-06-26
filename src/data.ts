export const aboutContent = {  
    heading: 'I am', 
    name: 'Patience Orukotan', 
    role: 'Front End Developer', 
    summary: 'Nerdy, optimistic and purpose driven software developer with hands-on experience in software development, implementing UI mock-ups, and providing end-users technical support. Effective skills in generating easily maintainable code. An excellent, creative, supportive and goal oriented team player, a critical thinker.',
}


export type Imagez = {
    a_img1: string
    a_img2: string
    a_img3: string
    a_img4: string
    a_img5: string
}
export const Image1 = ((): Imagez => ({  
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


