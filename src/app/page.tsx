
import { UserTable } from '@/components/user-table';
import { User } from '@/types/user';

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (response.ok) {
    const data = await response.json();

    return data as User[];
  }

  return [];
};

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex w-full mb-4'>
        <h1 className='text-2xl'>Users</h1>
      </div>
      <UserTable users={users} />
    </main>
  );
}
