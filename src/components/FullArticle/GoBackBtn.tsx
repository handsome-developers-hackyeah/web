import { Link } from 'react-router-dom';
import GoBackImg from '../../assets/images/GoBack.svg';

const GoBackBtn = () => {
  return (
    <Link to='/baza-wiedzy'>
      <img src={GoBackImg} />
    </Link>
  );
};

export default GoBackBtn;
