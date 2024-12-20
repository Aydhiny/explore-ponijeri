"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminDashboard from "../components/AdminDashboard";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      router.push("/login");
    }
  }, [router]);

  return <AdminDashboard />;
}
