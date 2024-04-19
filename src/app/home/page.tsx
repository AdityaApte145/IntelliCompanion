import ModeToggle from '@/components/theme-switcher';
export default function HomeUI() {
  return (
    <main className="">
      <h1 className="text-2xl font-bold">Welcome to IntelliCompanion</h1>
      <p className="text-lg">An Intelligent Virtual Assistant with the power of LLMs</p>
      <ModeToggle />
    </main>
  );
};