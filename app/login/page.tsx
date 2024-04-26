export default function LoginPage() {
    return (
        <main className="mx-auto container w-full h-[100vh] flex flex-col justify-center items-center text-center gap-9">
            <div className="login ">
                <form className=" flex flex-col gap-5 ">
                    <input className="border-b border-t h-12 flex items-center justify-center px-10" type="email" placeholder="email" />
                    <input className="border-b border-t h-12 flex items-center justify-center px-10" type="password" placeholder="password" />
                    <button className="border-b border-t h-12 flex items-center justify-center px-10" type="submit">
                    <span className="transition-all ease-out hover:-translate-y-1">Login</span>

                    </button>
                </form>
            </div>
        </main>

    )
}
