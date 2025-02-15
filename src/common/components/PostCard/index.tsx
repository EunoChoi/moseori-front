import styled from "styled-components";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommentIcon from '@mui/icons-material/Comment';

const PostCard = () => {
  return (<Wrapper>
    <CardWrapper>
      <ImageWrapper></ImageWrapper>
      <Content>
        <SingleLineText className="title">인스타브레인</SingleLineText>
        <SingleLineText className="author">안데르스 한센</SingleLineText>
        <SingleLineText className="publisher">동양북스</SingleLineText>
      </Content>
      <TagWrapper>
        <Tag>#미분류</Tag>
        <Tag>#00.00마감</Tag>
      </TagWrapper>
      <InteractionButtonWrapper>
        <InteractionButton><BookmarkIcon className="icon" fontSize="inherit" color="inherit" /><span>123</span></InteractionButton>
        <InteractionButton><CommentIcon className="icon" fontSize="inherit" color="inherit" /><span>12</span></InteractionButton>
      </InteractionButtonWrapper>
    </CardWrapper>
  </Wrapper>);
}

export default PostCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;  
  @media (min-width:1024px) {
    transition: 200ms ease-in-out transform;  
    &:hover {
      z-index: 9;
      transform: scale(1.01) translateY(-8px);
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  padding: 20px 10%;

  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 22px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 16px 7%;
    border-radius: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  aspect-ratio: 1;
  flex-shrink: 0;

  background-color: whitesmoke;
  border: 1px #e4e4e4 solid;
  border-radius: 20%;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 40%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SingleLineText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  word-break: keep-all;

  margin: 1px 0;
  font-weight: 400;

  &.title{
    font-size: 20px;
    font-weight: 600;
  }
  &.author, &.publisher{
    font-size: 18px;
  }
  @media (max-width: 479px) { //mobile port
    &.title{
      font-size: 16px;
    }
    &.author, &.publisher{
      font-size: 14px;
    }
  }
  @media (min-width:480px) and (max-width:640px) {
    &.title{
      font-size: 18px;
    }
    &.author, &.publisher{
      font-size: 16px;
    }
  }
`;
const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
  width: 100%;
`;
const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color : #8e94a0;
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 640px) {
    font-size: 14px;
  }
  @media (min-width:480px) and (max-width:640px) {
    font-size: 16px;
  }
`;

const InteractionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media (max-width: 640px) {
    gap: 12px;
  }
`;

const InteractionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
 
  span, .icon {
    font-size: 18px;
    font-weight: 500;
    color: var(--main-color);
    filter: brightness(90%) saturate(105%);
    @media (max-width: 479px) {
      font-size: 14px;
    }
    @media (min-width:480px) and (max-width:640px) {
      font-size: 16px;
    }
  }
`;
