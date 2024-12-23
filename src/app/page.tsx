import ImageLoadingTest from "@/components/ImageLoadingTest";

export default function Home() {
  return (
    <div className="w-[500px] mx-auto p-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ImageLoadingTest />
      </main>
    </div>
  );
}
