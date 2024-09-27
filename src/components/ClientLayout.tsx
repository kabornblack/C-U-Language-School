"use client"; // This is a Client Component

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loading /> : children}</>;
};

export default ClientLayout;
