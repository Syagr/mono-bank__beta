import styled from 'styled-components';

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      {name}
      <NameTag>{name}</NameTag>
      <LoginButton onClick={onClick}>Вхід</LoginButton>
    </HeaderTag>
  );
}

const NameTag = styled.div`
  color: #fff;
`;

const LoginButton = styled.div`
  color: #fff;

  padding: 8px 32px;

  border: 2px solid #000;

  border-radius: 4px;

  cursor: pointer;
`;
const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #9999ff;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
