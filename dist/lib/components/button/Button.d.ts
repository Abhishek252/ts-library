/// <reference types="react" />
interface ButtonProps {
    label?: string;
    color: string;
    bgColor: string;
    outline?: boolean;
}
declare const Button: {
    ({ label, bgColor, color, outline }: ButtonProps): JSX.Element;
    defaultProps: {
        color: string;
        bgColor: string;
        outline: boolean;
    };
};
export { Button };
