"use client";

import dynamic from "next/dynamic";

const Service3DIcon = dynamic(() => import("./Service3DIcon"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#090909]" />,
});

export default Service3DIcon;
