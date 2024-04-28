import styled from 'styled-components';

const ReviewBox = styled.div`
  width: 430px;
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #101828;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  margin-bottom: 16px;
`;
const AvatarModal = styled.div`
  border-radius: 60px;
  background: #f2f4f7;
  width: 60px;
  height: 60px;
  color: #e44848;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 16px;
  }
`;
export { ReviewBox, AvatarModal, ReviewHeader };
