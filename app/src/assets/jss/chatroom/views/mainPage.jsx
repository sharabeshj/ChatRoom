import { container } from '../../../../assets/jss/chatroom';

const mainPageStyle = {
    container,
    brand: {
        color: "#FFFFFF",
        textAlign: "left"
    },
    title: {
        fontSize: "4.2rem",
        fontWeight: "600",
        display: "inline-block",
        position: "relative"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px 0 0"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    },
    chats : {
        boxSizing : "border-box",
        padding : "0 20px",
        margin : "10px 0 0",
        height : "510 px",
        overflowY : "scroll"
    },
    chat : {
        background : "rgba(255, 255,  255, 0.8)",
        position : "relative",
        padding : "0 20px",
        fontSize : "14px",
        borderRadius : "10px",
        listStyle : "none",
        float : "left",
        clear : "both",
        margin : "10px 0",
        maxWidth : "200px"
    },
    chatRight : {
        float : "right",
        clear : "both"
    }
};

export default mainPageStyle;
