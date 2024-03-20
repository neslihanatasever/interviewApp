export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center items-center text-center gap-9" style={{ height: "calc(100vh - 110px)" }}>
      <div className="flex gap-5 flex-col">
        <p className="font-bold text-4xl">Mülakat Uygulamasına Hoş Geldiniz!</p>
        <p className="text-2xl">Kendinizi test etmenin tam zamanı!</p>
      </div>


      <div className="techBox flex gap-5">
        <div className="w-80 h-40 flex items-center justify-center flex-col gap-5 bg-[#EAE9E9] rounded-md">
          <p>JavaScript Mülakat Soruları</p>
        </div>
        <div className="w-80 h-40 flex items-center justify-center flex-col gap-5 bg-[#EAE9E9] rounded-md">
          <p>React Mülakat Soruları</p>
        </div>
        <div className="w-80 h-40 flex items-center justify-center flex-col gap-5 bg-[#EAE9E9] rounded-md">
          <p>CSS Mülakat Soruları</p>
        </div>
      </div>
    </main>
  );
}
