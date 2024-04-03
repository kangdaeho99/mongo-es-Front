import {
    Box,
    Button,
    ChakraProvider,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";

import { LANGUAGE_VERSIONS } from "../constants.js";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
    return (

        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
                Language:
            </Text>
            <Menu isLazy>
                <MenuButton as={Button}>{language}</MenuButton>
                <MenuList bg="white">
                    {languages.map(([lang, version]) => (
                        <MenuItem
                            key={lang}
                            color={lang === language ? ACTIVE_COLOR : ""}
                            bg={lang === language ? "white" : "transparent"}
                            _hover={{
                                color: ACTIVE_COLOR,
                                bg: "green",
                            }}
                            onClick={() => onSelect(lang)}
                        >
                            {lang}
                            &nbsp;
                            <Text as="span" color="black" fontSize="sm">
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};
export default LanguageSelector;