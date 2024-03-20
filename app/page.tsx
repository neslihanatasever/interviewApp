export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center items-center text-center" style={{ height: "calc(100vh - 110px)" }}>
      <div>
        <h1>Mülakat Uygulamasına Hoş Geldiniz!</h1>
        <p>Kendinizi test etmenin tam zamanı!</p>
      </div>


      <div className="techBox">
        <div className="w-80 h-40 flex items-center justify-center flex-col gap-5 bg-[#EAE9E9] rounded-md">
          <p>JavaScript</p>
          <p>Mülakat Soruları</p>
        </div>
      </div>
    </main>
  );
}
