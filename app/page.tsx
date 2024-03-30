import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-auto container w-full h-[100vh] flex flex-col justify-center items-center text-center gap-9" >
      <div className="flex gap-5 flex-col">
        <p className="font-bold text-4xl text-[#000000]">Intervija'ya Hoş Geldiniz!</p>
        <p className="text-2xl text-[#C06014]">Kendinizi test etmenin tam zamanı!</p>
      </div>

      <div className="w-[70%] p-12">
        <p className="text-xl">
        JavaScript, React ve CSS gibi teknoloji alanlarında mülakatlara hazırlanmanıza olanak sağlar. Uygulama, deneyimli yazılımcıların sıkça karşılaştığı ve genellikle mülakat süreçlerinde yer alan soruları içermektedir.
        </p>
      </div>

      {/* aşağıdan teknik mülakata girmek istediğiniz alanı seçebilirsiniz */}

      <div className="techBox flex gap-5">
        <Link className="w-80 h-40 flex items-center justify-center flex-col gap-5 border-b border-t" href={"/level"}>
          <p className="text-lg font-semibold w-40">JavaScript Mülakat Soruları</p>  
        </Link>
        <Link className="w-80 h-40 flex items-center justify-center flex-col gap-5 border-b border-t" href={"/"}>
          <p className="text-lg font-semibold w-40">React Mülakat Soruları</p>
        </Link>
        <Link className="w-80 h-40 flex items-center justify-center flex-col gap-5 border-b border-t" href={"/"}>
          <p className="text-lg font-semibold w-40">CSS Mülakat Soruları</p>
        </Link>
      </div>
    </main>
  );
}
