'use client'
import { useUser } from '@auth0/nextjs-auth0/client';

const ClientUser = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <p>client user obj : {JSON.stringify(user)}</p>
      </div>
    )
  );

}

export default ClientUser
