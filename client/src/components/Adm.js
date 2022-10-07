import {styled, color} from '../styles/styles';

const AdmStyle = styled.div`
  align-items: center;
  background-color: ${color.tres};
  border-radius: 15px;
  box-sizing: border-box;
  color: green;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0px auto;
  max-width: ${props => props.maxsize ? `${props.maxsize}px` : "1250px"};
  padding: 25px;
`;

const Input = styled.input`
  background-color: ${color.um};
  border-radius: 15px;
  color: ${color.facebook};
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 8px 10px;
`;

const Submit = styled(Input)`
  background-color: transparent;
  border: solid 2px ${color.seis};
  color: ${color.seis};
  font-size: 15px;
  padding: 8px 15px;
  cursor: pointer;
`;

export default () => <AdmStyle>
  <Input type="text" placeholder="user"/>
  <Input type="password" placeholder="senha"/>
  <Submit type="submit" value="Acessar"/>
</AdmStyle>;