"use client"

import { useState } from "react";
import { CreateLinkDrawer } from "./components/create-link-drawer";
import { LinksList } from "./components/links-list";
import styles from "./page.module.css";
import * as ChakraUI from "@chakra-ui/react";

const MOCK = [{}];

export default function Home() {
  const [isNewLinkDrawerOpen, setNewLinkDrawerOpen] = useState(false);

  return (
    <main className={styles.main}>
      <ChakraUI.Stack flexDir="row" alignItems="center" marginBottom="1rem" justifyContent="space-between">
        <ChakraUI.Heading size="xl" className={styles.heading}>Gerenciar links dinâmicos</ChakraUI.Heading>
        <ChakraUI.Button colorScheme="blue" onClick={() => setNewLinkDrawerOpen(true)}>Adicionar novo</ChakraUI.Button>
      </ChakraUI.Stack>

      <LinksList list={MOCK} />
      <CreateLinkDrawer open={isNewLinkDrawerOpen} onClose={() => setNewLinkDrawerOpen(false)} />
    </main>
  );
}
