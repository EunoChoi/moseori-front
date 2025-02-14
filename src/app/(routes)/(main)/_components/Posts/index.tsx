import PostCard from '@/common/components/PostCard';
import styled from 'styled-components';

const Posts = () => {
  return (
    <PostCardWrapper>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </PostCardWrapper>
  );
};

export default Posts;

const PostCardWrapper = styled.div`
  width: 100dvw;
  height: auto;

  @media (max-width: 640px) { //mobile port
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;

    padding: 4px 3dvw;
    padding-bottom: 48px;
    gap: 12px;
    row-gap: 32px;
  }
  @media (min-width:641px) and (max-width:900px) { //mobile land + tablet
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 290px);
    grid-template-rows: auto;

    padding: 12px 3dvw;
    gap: 18px;
    row-gap: 32px;
  }
  @media (min-width:901px) { //desktop
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-columns: repeat(auto-fill, 290px);
    grid-template-rows: auto;

    padding: 20px 5dvw;
    gap: 24px;
    row-gap: 32px;
  }
`
