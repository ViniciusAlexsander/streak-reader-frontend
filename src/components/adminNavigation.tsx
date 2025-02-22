"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface AdminNavigationProps {
  isAdmin: boolean;
}

export function AdminNavigation({ isAdmin }: AdminNavigationProps) {
  const router = useRouter();

  const handleHomeButton = () => router.push("/");
  const handleAdminButton = () => router.push("/admin");

  return (
    <ButtonGroup size="sm" variant="outline">
      {isAdmin && <Button onClick={handleHomeButton}>Home</Button>}
      {isAdmin && <Button onClick={handleAdminButton}>Administrador</Button>}
    </ButtonGroup>
  );
}
