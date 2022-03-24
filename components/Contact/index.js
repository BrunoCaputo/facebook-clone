import Image from "next/image";

export function Contact({ src, name }) {
  return (
    <div
      className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200
      cursor-pointer p-2 rounded-xl group"
    >
      <Image
        className="rounded-full"
        src={src}
        alt="Contact picture"
        width="50"
        height="50"
        objectFit="cover"
        layout="fixed"
      />
      <p>{name}</p>
      <div
        className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full
        group-hover:animate-bounce"
      ></div>
    </div>
  );
}
