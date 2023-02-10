
import { Alert } from 'react-bootstrap';
import Link from 'next/link';

const UserActivation = () => {
  return (
      <Alert variant='success'>
        You have been succesfuly activated. You can login now!{' '}
        <Link href="/login">
          <a>
            Login
          </a>
        </Link>
      </Alert>
  )
}

export default UserActivation;