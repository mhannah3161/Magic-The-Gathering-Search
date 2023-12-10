import {createGlobalStyle} from 'styled-components';

export const globalStyles = createGlobalStyle`
.topNav{
    background-image: linear-gradient(to right, ${({ theme}) => theme.colors.background-color}, ${({ theme}) => theme.colors.color} );
}
.navbar {
    background-image: linear-gradient(to right, ${({ theme}) => theme.colors.background-color}, ${({ theme}) => theme.colors.color} );
}
.buttonNav {
    background-color: ${({ theme}) => theme.colors.button-color};
    color: white;
}
.buttonNav:hover {
    background-color: #AE43D9;
    color: black;
}
.buttonNav:Link {
    color: white;
}
.linkStyle {
    color: white;
}
.linkStyle:hover {
    color: black;
}
.DD {
    background-image: linear-gradient(to right, white, black);
}
.footer {
    background-image: linear-gradient(to right, #3D3D3D, black);
}
.footer-text{
    color: white;
}
.footer-api{
    color: white;
}
.footer-link{
    color: white;
    text-decoration: none;
}
`;
