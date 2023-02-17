import styled from "styled-components";

const StyledTextArea = styled.textarea.attrs({
  maxlength: 10,
})`
  padding: 10px;
  font-size: 16px;
`;

interface TextAreaProps {
  cols: number;
  rows: number;
}
const TextArea = ({ cols, rows }: TextAreaProps) => {
  return <StyledTextArea rows={rows} cols={cols}></StyledTextArea>;
};

export { TextArea };

TextArea.default = {
  cols: 35,
  rows: 15,
};
