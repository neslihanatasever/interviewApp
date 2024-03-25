import { Box, Card, Container, Flex, ScrollArea, Text } from "@radix-ui/themes";

export default function LevelsPage() {
    return (
        <Flex align="center" justify="center" direction="column" style={{ height: "calc(100vh - 110px)" }}>
            <Box maxWidth="" maxHeight="">
            <Text>Mülakata girmek istediğiniz seviyeyi seçin</Text>
            <Card>
                <Flex >
                    <Box>
                        <Text>1</Text>
                        <Text>Temel Seviye JavaScript Testi</Text>
                    </Box>
                    
                </Flex>
            </Card>
        </Box>
        </Flex>
    )
}

/*
<Flex align="center" justify="center" direction="column" >

                <Text>Mülakata girmek istediğiniz seviyeyi seçin</Text>
            


            <ScrollArea type="always" scrollbars="vertical">
                <Flex gap="5" direction="column">
                    <Box >
                        <Text >1</Text>
                    </Box>
                    <Box>
                        <Text>Temel Seviye JavaScript Testi</Text>
                    </Box>
                </Flex>
            </ScrollArea>


        </Flex>

*/ 