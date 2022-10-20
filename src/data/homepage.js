import logo from "../assets/logo.svg"
import graphicDesignIcon from "../assets/pattern-graphic-design.svg"
import uiUxIcon from "../assets/pattern-ui-ux.svg"
import appsIcon from "../assets/pattern-apps.svg"
import illustrationsIcon from "../assets/pattern-illustrations.svg";
import photographyIcon from "../assets/pattern-photography.svg";
import motionGraphicsIcon from "../assets/pattern-motion-graphics.svg";
import slideImg1 from "../assets/image-slide-1.jpg";
import slideImg2 from "../assets/image-slide-2.jpg";
import slideImg3 from "../assets/image-slide-3.jpg";
import slideImg4 from "../assets/image-slide-4.jpg";
import slideImg5 from "../assets/image-slide-5.jpg";
import amyImg from "../assets/image-amy.webp";
import leftArrow from "../assets/icon-arrow-left.svg";
import rightArrow from "../assets/icon-arrow-right.svg";

export const data = {
    color: {
        wht: '#FFF7F0',  // WHITE
        dark: '#030303', // BLACK
        text: '#7A746E', // BEIGE
        acc1: '#755CDE', // PURPLE
        acc2: '#F6A560', // ORANGE
        acc3: '#F39E9E', // PEACH
        acc4: '#EB7565', // BLOOD ORANGE
        acc5: '#61C4B7', // MINT GREEN
        acc6: '#552049', // DARK PURPLE
    },
    breakpoint: {
        md: "768px",
        lg: "1200px"
    },
    headerFooter: {
        logo: {
            img: logo,
            url: "",
            alt: "Site logo"
        },
        button: {
            text: "Free Consultation",
            url: ""
        }
    },
    intro: {
        title: "Design solutions made easy",
        desc: "With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs."
    },
    skills: {
        graphicDesign: {
            img: graphicDesignIcon,
            title: "Graphic Design"
        },
        uiUx: {
            img: uiUxIcon,
            title: "UI/UX"
        },
        apps: {
            img: appsIcon,
            title: "Apps"
        },
        illustrations: {
            img: illustrationsIcon,
            title: "Illustrations"
        },
        photography: {
            img: photographyIcon,
            title: "Photography"
        },
        motionGraphics: {
            img: motionGraphicsIcon,
            title: "Motion Graphics"
        },

    },
    bio: {
        img: amyImg,
        title: "I'm Amy, and I'd love to work on your next project",
        body: "I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!",
        button: {
            text: "Free Consultation",
            url: ""
        }
    },
    slider: {
        title: "My Work",
        images: [
            slideImg1,
            slideImg2,
            slideImg3,
            slideImg4,
            slideImg5
        ],
        button: {
            left: {
                img: leftArrow,
                alt: "Slide left"
            },
            right: {
                img: rightArrow,
                alt: "Slide right"
            }
        }
    },
    consultation: {
        title: "Book a call with me",
        body: "I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.",
        button: {
            text: "Free Consultation",
            url: ""
        }
    }
}