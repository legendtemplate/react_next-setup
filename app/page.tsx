'use client'
import { Link } from '@chakra-ui/next-js'
import Image from "next/image";

interface Item {
  id: number;
  name: string;
  description: string;
}

const datas: Item[] = [
  {
    id: 1,
    name: "Chakura UI",
    description:
      "1 - Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    description:
      "2 - Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
  {
    id: 3,
    name: "React JS",
    description:
      "3 - Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
  {
    id: 3,
    name: "Next JS",
    description:
      "4 - Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
  {
    id: 3,
    name: "React & Chakura Icons",
    description:
      "5 - Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
  {
    id: 3,
    name: "Framer Motion",
    description:
      "6 - Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export default function Home() {
  return (
    <main className="p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {datas.map((data) => (
          <a
            href=""
            className="group rounded-lg mb-16 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <div key={data.id}>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {data.name}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {data.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
    </Link>
    </main>
  );
}
