"use client"

import React from "react";
import * as ChakraUI from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export const LinksList = (props: { list: any[] }) => {
  return (
    <ChakraUI.TableContainer>
    <ChakraUI.Table variant='simple'>
      <ChakraUI.Thead>
        <ChakraUI.Tr>
          <ChakraUI.Th>Nome</ChakraUI.Th>
          <ChakraUI.Th>Identifier</ChakraUI.Th>
          <ChakraUI.Th>Params</ChakraUI.Th>
          <ChakraUI.Th>Actions</ChakraUI.Th>
        </ChakraUI.Tr>
      </ChakraUI.Thead>

      <ChakraUI.Tbody>
        {props.list.map((_, index) => (
          <ChakraUI.Tr key={index}>
            <ChakraUI.Td>
              <div style={{ width: '15vw', display: 'flex' }}>
                <p style={{ whiteSpace: 'break-spaces' }}>Pré Cadastro Santa Mônica</p>
              </div>
            </ChakraUI.Td>

            <ChakraUI.Td>
              <ChakraUI.Text fontSize=".9em">yKM23BsA</ChakraUI.Text>
            </ChakraUI.Td>
            <ChakraUI.Td maxW={300} overflow="scroll">
              <ChakraUI.Code overflow="scroll" borderRadius="4px" p="1rem" w="100%">{"{params: {personContextId: 1, condominiumName: \"Santa Mônica Office\", serializedParams: \"{}\"}, condominiumName: \"Santa Mônica Office\", serializedParams: \"{}\"}}"}</ChakraUI.Code>
            </ChakraUI.Td>

            <ChakraUI.Td>
              <ChakraUI.IconButton
                colorScheme="green"
                aria-label="editar valores"
                icon={<EditIcon />}
                marginRight="8px"
              />
              <ChakraUI.IconButton
                colorScheme="red"
                aria-label="editar valores"
                icon={<DeleteIcon />}
              />
            </ChakraUI.Td>
          </ChakraUI.Tr>
        ))}
      </ChakraUI.Tbody>
    </ChakraUI.Table>
  </ChakraUI.TableContainer>  
  );
}