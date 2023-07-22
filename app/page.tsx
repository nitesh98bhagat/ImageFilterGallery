import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-neutral-900 min-h-screen text-white w-full flex flex-col items-center p-8">
      <div className="flex-col flex items-stretch w-1/3 my-auto gap-6">
        <button className="bg-red-500 py-2 px-10 text-white font-bold rounded-lg text-sm flex  items-center justify-center gap-4">
          <div className="bg-white p-1 rounded-full">
            <Image
              src={"/assets/google_logo.png"}
              alt="google_logo"
              width={25}
              height={25}
            />
          </div>
          <span>Login with Google</span>
        </button>

        <div className="flex-row flex items-center ">
          <hr className="border border-white flex-1" />
          <span className="px-2">OR</span>
          <hr className="border border-white flex-1" />
        </div>

        <input
          type="text"
          className="rounded-lg p-3 text-center placeholder:font-bold text-neutral-700"
          placeholder="Username"
        />
        <input
          type="password"
          className="rounded-lg p-3 text-center placeholder:font-bold text-neutral-700"
          placeholder="Password"
        />
        <Link
          href={"/gallery"}
          className="bg-teal-300 py-2 px-4 w-fit text-neutral-900 rounded-lg text-sm mx-auto font-semibold"
        >
          <button className="bg-teal-300 py-2 px-4 w-fit text-neutral-900 rounded-lg text-sm mx-auto font-semibold">
            Submit
          </button>
        </Link>
      </div>
    </main>
  );
}
