/// <reference types="react" />
interface TextAreaProps {
    cols: number;
    rows: number;
}
declare const TextArea: {
    ({ cols, rows }: TextAreaProps): JSX.Element;
    default: {
        cols: number;
        rows: number;
    };
};
export { TextArea };
