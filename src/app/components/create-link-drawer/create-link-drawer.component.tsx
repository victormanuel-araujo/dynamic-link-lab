"use client"

import React, { useState } from "react";
import * as ChakraUI from '@chakra-ui/react'
import { CreateLinkDrawerProps } from "./create-link-drawer.types";

export const CreateLinkDrawer = (props: CreateLinkDrawerProps) => {
  const [linkIdentifier, setLinkIdentifier] = useState(buildLinkIdentifier());
  const [linkName, setLinkName] = useState("");
  const [linkParams, setLinkParams] = useState("");
  const [isParamsValid, setIsParamsValid] = useState<boolean | null>(null);

  function buildLinkIdentifier() {
    const ASCII_NUMBERS = {start: 48, end: 57, range: 57 - 48};
    const ASCII_UPPER_LETTERS = {start: 97, end: 122, range: 122 - 97};
    const ASCII_LOWER_LETTERS = {start: 65, end: 90, range: 90 - 65};
    const accessKind: Record<number, typeof ASCII_NUMBERS> = { 0: ASCII_NUMBERS, 1: ASCII_UPPER_LETTERS, 2: ASCII_LOWER_LETTERS }

    return Array(8).fill(0).reduce((curr, next) => {
      const characterKind = Math.floor(Math.random() * 3);
      const charCode = Math.floor(Math.random() * (accessKind[characterKind].range)) + accessKind[characterKind].start;
      return curr + String.fromCharCode(charCode)
    }, "")
  }

  function validateParams() {
    if (!linkParams) return setIsParamsValid(false);
    try {
      JSON.parse(linkParams);
      setIsParamsValid(true);
    } catch (error) {
      setIsParamsValid(false);
    }
  }

  function addParams() {

  }

  return (
      <ChakraUI.Drawer isOpen={props.open} placement='right' onClose={props.onClose} size="md">
        <ChakraUI.DrawerOverlay />
        <ChakraUI.DrawerContent>
          <ChakraUI.DrawerCloseButton />
          <ChakraUI.DrawerHeader>Criar novo link dinâmico</ChakraUI.DrawerHeader>

          <ChakraUI.DrawerBody>
            <ChakraUI.Text mb="4px">Nome do link: </ChakraUI.Text>
            <ChakraUI.Input value={linkName} onChange={(e) => setLinkName(e.target.value)} placeholder='Type here...' />
            
            <ChakraUI.Text mt="24px">Identificador do link: </ChakraUI.Text>
            <ChakraUI.Input contentEditable={false}  placeholder='Type here...' value={linkIdentifier} />
            
            <ChakraUI.Text mt="24px">Params: </ChakraUI.Text>
            <ChakraUI.Textarea
              isInvalid={isParamsValid === false}
              onChange={(e) => {
                setLinkParams(e.target.value)
                setIsParamsValid(null);
              }}
              resize="none"
              placeholder='Type here...'
              value={linkParams}
            />

          </ChakraUI.DrawerBody>

          <ChakraUI.DrawerFooter>
            <ChakraUI.Button variant='outline' mr={3} onClick={props.onClose}>
              Cancel
            </ChakraUI.Button>
            {isParamsValid ? (
              <ChakraUI.Button onClick={addParams} colorScheme='blue'>Adicionar</ChakraUI.Button>
            ) : <ChakraUI.Button onClick={validateParams} colorScheme='blue'>Validate</ChakraUI.Button>}
          </ChakraUI.DrawerFooter>
        </ChakraUI.DrawerContent>
      </ChakraUI.Drawer>
  );
}
