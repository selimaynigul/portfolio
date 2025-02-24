import React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  border: 1px solid #ccc;
  padding: 4px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  color: #ccc;
  transition: all 0.3s ease-in-out;
  text-wrap: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <StyledTag>{children}</StyledTag>;
};

export default Tag;
