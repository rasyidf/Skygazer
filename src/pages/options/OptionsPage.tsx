import { Container, Paper, Text } from '@mantine/core';

export function OptionsPage() {
    return (
        <Container>
            <Paper p="md" shadow="xs">
                <Text>General Settings</Text>
                <Text>Notification Settings</Text>
                <Text>About Page</Text>
            </Paper>
        </Container>
    );
}
