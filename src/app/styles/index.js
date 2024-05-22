import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

    * {
        font-family: 'Space Mono', monospace;
    }

    a {
        text-decoration: none;
    }
    label {
        color: #fff !important;
    }
    .ant-typography {
        color: #fff !important;
        font-family: 'Space Mono', monospace;
    }
    .ant-modal-content {
        background-color: #001529 !important;
    }
    .ant-modal-title {
        background-color: #001529 !important;
        color: #f1f1f1 !important;
    }
    .ant-modal-close-x {
        color: #f1f1f1
    }
    .bg-image {
        height: calc(100vh - 64px);
        background-image: url('https://i.postimg.cc/bwxxFFqq/audi.webp');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .h-full-car {
        min-height: calc(100vh - 281px);
    }
    .h-187{
        min-height: calc(100vh - 187px);
    }
`;

export default GlobalStyle;
