import { currentUser } from '@clerk/nextjs/server';
import Header from '../../components/ui/header';
import TextGenCard from '@/components/ui/tool-card';
import ToolCard from '@/components/ui/tool-card';

export default async function Dashboard() {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;
  return (
    <div>
      <Header />
        <div className="justify-center items-center">
          <h1 className="text-5xl font-extrabold text-center">Hello, {user?.firstName}</h1>
          <p className=" pt-3 text-xl font-semibold text-center">What would you like to do today?</p>
          <ToolCard />
        </div>
    </div>
  );
};